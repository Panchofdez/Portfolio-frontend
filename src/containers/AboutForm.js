import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import {createAboutPage, editAboutPage} from '../store/actions/portfolios';
import { toast } from 'react-toastify';
import cloudinaryUpload from '../services/cloudinary';


class AboutForm extends Component{
	constructor(props){
		super(props);
		this.state={
			about: this.props.portfolio ? this.props.portfolio.about : 'This is your chance to tell us something about who you are and what you do',
			location: this.props.portfolio ? this.props.portfolio.location : "City,Country",
			birthday: this.props.portfolio? this.props.portfolio.birthday : "Your Birthday",
			type:this.props.portfolio? this.props.portfolio.type :"Profession/Occupation"
		}
		
	};
	componentDidMount() {
	  window.scrollTo(0, 0)
	}
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value});
	};
	onFileChange=(e)=>{
		this.setState({image:e.target.files[0]});
	};
	clearText=(e)=>{
    	this.setState({[e.target.name]:""})
    };
    notifySuccess=()=>{
    	toast.success("Successfully saved changes", {autoClose:3000});   	
    };
	handleSubmit=async (e)=>{
		e.preventDefault();
		console.log(this.state);
		try{
			let formData = {}
	  		if(this.state.image){
	    		const response = await cloudinaryUpload(this.state.image);
		  		formData ={
		  			headerImage:response.secure_url,
		  			headerImageId:response.public_id,
		  			about:this.state.about,
		  			statement:this.state.statement
		  		}
	  		}else{
	  			formData={
	  				headerImage:"",
		  			headerImageId:"",
		  			about:this.state.about,
		  			statement:this.state.statement
	  			}
	  		}
  	
  			if(this.props.portfolio){
  				await this.props.editAboutPage(formData);
  				this.props.history.push('/myportfolio/about');
  				this.notifySuccess();
  				
	  		}else{
	  			await this.props.createAboutPage(formData);
				this.props.history.push('/myportfolio/create/work');
				this.notifySuccess();
				
	  		}
  			
  		}catch(err){
  			return;
  		}
  		
	}
	render(){
		const { statement, about, image} = this.state;
		return(

			<form encType='multipart/form-data' onSubmit={this.handleSubmit} >

				<div className="row justify-content-center mt-5 pb-5">
					<div className="col-md-8 col-10">
						
					
						<h1 className="my-3">About Me</h1>
						<h5 className="my-3">Tell us about who you are and what you do</h5>
									
						
						<div className="form-group">
							<label htmlFor="upload-image">Upload a Cover Photo</label>
							<p><small>An image that will make your portfolio stand out</small></p>
							<div className="input-group mb-3" id="upload-image">
								<div className="custom-file">
									<input 
										type="file" 
										name="image"
										className="custom-file-input" 
										id="header-image"
										onChange={this.onFileChange}
									/>
									{image?(<label className="custom-file-label" htmlFor="header-image">{image.name}</label>):(
									<label className="custom-file-label" htmlFor="header-image">Choose file</label>)}
								</div>
							</div>
							{this.props.portfolio && ( 
								<p>Current Header Image: {this.props.portfolio.headerImage}</p>
							)}
							<label htmlFor="statement">Mission Statement</label>
							<textarea 

								className="form-control mb-3" 
								id="statement" 
								rows="2" 
								value={statement} 
								onChange={this.handleChange}
								name="statement"
								onFocus={!this.props.portfolio ? this.clearText: undefined}

							/>
							<label htmlFor="about">About</label>
							<textarea 
								className="form-control mb-3" 
								id="about" 
								rows="5"
								value={about} 
								onChange={this.handleChange}
								name="about"
								onFocus={!this.props.portfolio ? this.clearText: undefined}
							/>
							<button className="btn button form-control mt-3" type="submit" >Save Changes</button>
							
							
						</div>
					</div>
				</div>
			</form>		
		)
	}
	
}

export default connect(null, {createAboutPage,editAboutPage})(AboutForm);