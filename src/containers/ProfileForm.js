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
			name: this.props.portfolio ? this.props.portfolio.name : "Your name or name of your business",
			email:this.props.portfolio? this.props.portfolio.email :"Your email",
			phone: this.props.portfolio?this.props.portfolio.phone:"Your phone number",
			facebook: this.props.portfolio?this.props.portfolio.facebook:"",
			instagram: this.props.portfolio?this.props.portfolio.instagram:"",
			profileImage:null,
			profileImageId:null


		}
	};
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value});
	};
	handleFileChange=(e)=>{
		this.setState({image:e.target.files[0]});
	};
	notifyUpload = ()=>{
        toast("Upload In Progress", { autoClose: 2000 });
    };
    notifySuccess=()=>{
    	toast.success("Successfully saved changes", {autoClose:3000});   	
    };
	handleSubmit=async (e)=>{
		e.preventDefault();
		if(!this.state.type || !this.state.name){
			this.props.addErrorMessage("You must provide a name, profile picture and your occupation");
			return;
		}
		if(!this.state.image && !this.props.portfolio){
			this.props.addErrorMessage("You must provide a name, profile picture and your occupation");
			return;
		}
		let formData = new FormData();
  		formData.append('location', this.state.location);
  		formData.append('birthday', this.state.birthday);
  		formData.append('type',this.state.type);
  		formData.append('name', this.state.name);
  		formData.append('email', this.state.email);
  		formData.append('phone', this.state.phone);
  		formData.append('facebook', this.state.facebook);
  		formData.append('instagram', this.state.instagram);
  		if(this.state.image){
  			setTokenHeader();
    		const data = new FormData();
	    	data.append('file', this.state.image);
	    	data.append('upload_preset', 'panchofdez')
	    	const res = await axios.post('https://api.cloudinary.com/v1_1/fdez/image/upload', data);
	    	const token =localStorage.jwtToken;
	    	setTokenHeader(token)
	  		formData.append('profileImage', res.data.secure_url)
	  		formData.append('profileImageId', res.data.public_id)
	  		this.notifyUpload();
  			
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
		const {image, location,birthday,type, name, email, phone, instagram, facebook}=this.state;
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
								<p>Remember you can always edit your portfolio later</p>
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
							/>
							<label htmlFor="location">Location</label>
						 	<input
						 		value={location} 
								onChange={this.handleChange}
								name="location"
								className="form-control mb-3"
								type="text"
								id="location"
							/>
							
							<label htmlFor="statement">Year of Birth</label>
							<input

								className="form-control mb-3" 
								id="birthday" 
								value={birthday} 
								onChange={this.handleChange}
								name="birthday"
								type="text"

							/>							
							<h3 className="my-3">Contact Information</h3>
							<label htmlFor="type">Email</label>
							<input
								className="form-control mb-3" 
								id="email" 
								value={email} 
								onChange={this.handleChange}
								name="email"
								type="text"
							/>
							<label htmlFor="type">Phone Number</label>
							<input
								className="form-control mb-3" 
								id="phone" 
								value={phone} 
								onChange={this.handleChange}
								name="phone"
								type="text"
							/>
							<h3 className="my-3">Social Media</h3>
							<label htmlFor="type">Facebook</label>
							<p><small>Example: https://www.facebook.com/yourusername</small></p>
							<input
								className="form-control mb-3" 
								id="facebook" 
								value={facebook} 
								onChange={this.handleChange}
								name="facebook"
								type="text"
							/>
							<label htmlFor="type">Instagram</label>
							<p><small>Example: https://www.instagram.com/yourusername</small></p>
							<input
								className="form-control mb-3" 
								id="instagram" 
								value={instagram} 
								onChange={this.handleChange}
								name="instagram"
								type="text"
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