import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createProfilePage, editProfilePage} from '../store/actions/portfolios';
import {addErrorMessage} from '../store/actions/errors';
import { toast } from 'react-toastify';
import axios from 'axios';
import {setTokenHeader} from '../services/apiCall';

class ProfileForm extends Component{
	constructor(props){
		super(props);
		this.state={
			image:null,
			location: this.props.portfolio ? this.props.portfolio.location : "City,Country",
			birthday: this.props.portfolio? this.props.portfolio.birthday : "Year",
			type:this.props.portfolio? this.props.portfolio.type :"Profession/Occupation",
			name: this.props.portfolio ? this.props.portfolio.name : "Your name or name of your business"
		}
	};
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value});
	};
	handleFileChange=(e)=>{
		this.setState({image:e.target.files[0]});
	};
    notifySuccess=()=>{
    	toast.success("Successfully saved changes", {autoClose:3000});   	
    };
    clearText=(e)=>{
    	this.setState({[e.target.name]:""})
    }
	handleSubmit=async (e)=>{
		e.preventDefault();
		if(!this.state.type || !this.state.name || !this.state.location){
			this.props.addErrorMessage("You must provide a name, profile picture, occupation and your location");
			return;
		}
		if(!this.state.image && !this.props.portfolio){
			this.props.addErrorMessage("You must provide a name, profile picture, occupation and your location");
			return;
		}
		let formData = {};
  		if(this.state.image){
  			setTokenHeader();
    		const data = new FormData();
	    	data.append('file', this.state.image);
	    	data.append('upload_preset', 'panchofdez')
	    	const res = await axios.post('https://api.cloudinary.com/v1_1/fdez/image/upload', data);
	    	const token =localStorage.jwtToken;
	    	setTokenHeader(token)
	  		formData={
	  			profileImage: res.data.secure_url,
	  			profileImageId:res.data.public_id,
	  			type:this.state.type,
	  			name:this.state.name,
	  			birthday:this.state.birthday,
	  			location:this.state.location
	  		}
  		}else{
  			formData={
	  			profileImage:"",
	  			profileImageId:"",
	  			type:this.state.type,
	  			name:this.state.name,
	  			birthday:this.state.birthday,
	  			location:this.state.location
	  		}
  		}
		try{
			if(this.props.portfolio){
				await this.props.editProfilePage(formData);
				this.props.history.push('/myportfolio/profile');
				this.notifySuccess();
			}else{
				await this.props.createProfilePage(formData);
				this.props.history.push("/myportfolio/create/about");
				this.notifySuccess();
			}
		
		}catch(err){
			console.log(err);
			return;
		}
	}

	render(){
		const {image, location,birthday,type, name}=this.state;
		return (
			<form encType='multipart/form-data' onSubmit={this.handleSubmit}>
				<div className="row justify-content-center mt-5">
					<div className="col-md-8 col-10">
						{this.props.portfolio ?(
							<h1>Edit Your Profile Page</h1>
						):(
							<React.Fragment>
								<p className="float-right">Step 1 of 4</p>
								<h1>Create Your Portfolio!</h1>
								<p>You can always edit your portfolio later</p>
								<p>Lets start by setting up your Profile Page so we can make it easier for people to find and identify you</p>
							</React.Fragment>
						)}
						
						<div className="form-group">
							<label htmlFor="name">Give your portfolio a name *</label>
						 	<input
						 		value={name} 
								onChange={this.handleChange}
								name="name"
								className="form-control mb-3"
								type="text"
								onFocus={!this.props.portfolio ? this.clearText : undefined}
							/>
							<label htmlFor="profile-pic">Upload your profile picture *</label>
							<div className="input-group">
								<div className="custom-file mb-3" >
									<input 
										type="file" 
										name="image"
										className="custom-file-input" 
										id="profile-pic"
										onChange={this.handleFileChange}
									/>
									{image?(<label className="custom-file-label" htmlFor="header-image">{image.name}</label>):(
									<label className="custom-file-label" htmlFor="header-image">Choose file</label>)}
								</div>
							</div>
							{this.props.portfolio && (<p>Current Profile Picture: {this.props.portfolio.profileImage}</p>)}
							<label htmlFor="type">What do you do? *</label>
							<input
								className="form-control mb-3" 
								id="type" 
								value={type} 
								onChange={this.handleChange}
								name="type"
								type="text"
								onFocus={!this.props.portfolio ? this.clearText :undefined}
							/>
							<label htmlFor="location">Location *</label>
						 	<input
						 		value={location} 
								onChange={this.handleChange}
								name="location"
								className="form-control mb-3"
								type="text"
								id="location"
								onFocus={!this.props.portfolio ? this.clearText : undefined}
							/>
							
							<label htmlFor="statement">Year of Birth (optional)</label>
							<input

								className="form-control mb-3" 
								id="birthday" 
								value={birthday} 
								onChange={this.handleChange}
								name="birthday"
								type="text"
								onFocus={!this.props.portfolio ? this.clearText: undefined}

							/>							
		
							{this.props.portfolio ?(
								<button className="btn btn-success form-control mt-3" type="submit" >Save Changes</button>
							):(
								<button className="btn btn-success form-control mt-3" type="submit" >Next</button>
							)}
							
						</div>
					</div>
				</div>
			</form>		
		)
	}
}

export default connect(null,{createProfilePage, editProfilePage, addErrorMessage})(ProfileForm);