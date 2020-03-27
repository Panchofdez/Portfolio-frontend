import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import {createAboutPage, editAboutPage} from '../store/actions/portfolios';
import { toast } from 'react-toastify';

class AboutForm extends Component{
	constructor(props){
		super(props);
		this.state={
			statement:  this.props.portfolio ? this.props.portfolio.statement : "Make a statement",
			about: this.props.portfolio ? this.props.portfolio.about : 'This is your chance to tell us something about who you are and what you do',
			image:null
		}
		
	}
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value});
	};
	onFileChange=(e)=>{
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
		let formData = new FormData();
  		formData.append('statement', this.state.statement);
  		formData.append('about',this.state.about);
  		if(this.state.image){
  			formData.append('image', this.state.image);
  			this.notifyUpload();
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

			<form encType='multipart/form-data' onSubmit={this.handleSubmit}>

				<div className="row justify-content-center mt-5">
					<div className="col-md-8">
						
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
							<label htmlFor="statement">Mission Statement</label>
							<textarea 

								className="form-control mb-3" 
								id="statement" 
								rows="2" 
								value={statement} 
								onChange={this.handleChange}
								name="statement"

							/>
							<label htmlFor="upload-image">Upload a Background Header Image</label>
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
							<label htmlFor="about">About</label>
							<textarea 
								className="form-control mb-3" 
								id="about" 
								rows="5"
								value={about} 
								onChange={this.handleChange}
								name="about"
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