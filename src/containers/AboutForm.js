import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import {createAboutPage, editAboutPage} from '../store/actions/portfolios';
import { toast } from 'react-toastify';
import axios from 'axios';
import {setTokenHeader} from '../services/apiCall';

class AboutForm extends Component{
	constructor(props){
		super(props);
		this.state={
			statement:  this.props.portfolio ? this.props.portfolio.statement : "A small statement or title",
			about: this.props.portfolio ? this.props.portfolio.about : 'This is your chance to tell us something about who you are and what you do',
			image:null
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
		let formData = {}
  		if(this.state.image){
  			setTokenHeader();
    		const data = new FormData();
	    	data.append('file', this.state.image);
	    	data.append('upload_preset', 'panchofdez')
	    	const res = await axios.post('https://api.cloudinary.com/v1_1/fdez/image/upload', data);
	    	const token =localStorage.jwtToken;
	    	setTokenHeader(token)
	  		formData ={
	  			headerImage:res.data.secure_url,
	  			headerImageId:res.data.public_id,
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
  		try{
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

				<div className="row justify-content-center mt-5">
					<div className="col-md-8 col-10">
						
						{this.props.portfolio? (
							<h1 className="my-3">Edit Your About Page</h1>
						):(
							<React.Fragment>
								<p className="float-right">Step 2 of 4</p>
								<h1 className="my-3">Your About Page</h1>
								<h5 className="my-3">This is the first thing that people will see so let's make a good first impression!</h5>
							</React.Fragment>
						)}					
						
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

export default connect(null, {createAboutPage,editAboutPage})(AboutForm);