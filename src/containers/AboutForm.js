import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import {createAboutPage, editAboutPage} from '../store/actions/portfolios';

class AboutForm extends Component{
	constructor(props){
		super(props);
		this.state={
			name: this.props.portfolio ? this.props.portfolio.name : "Give your portfolio a name",
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
	handleSubmit=async (e)=>{
		e.preventDefault();
		let formData = new FormData();
  		formData.append('name', this.state.name);
  		formData.append('statement', this.state.statement);
  		formData.append('about',this.state.about);
  		formData.append('type', this.state.type);
  		if(this.state.image){
  			formData.append('image', this.state.image);
  		}
  		
  		try{
  			if(this.props.portfolio){
  				await this.props.editAboutPage(formData);
  				this.props.history.push('/myportfolio/about');
	  		}else{
	  			await this.props.createAboutPage(formData);
				this.props.history.push('/myportfolio/create/work');
	  		}
  			
  		}catch(err){
  			return;
  		}
  		
	}
	render(){
		const {name, statement, about, image} = this.state;
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
						 	<label htmlFor="name">Name</label>
						 	<input
						 		value={name} 
								onChange={this.handleChange}
								name="name"
								className="form-control mb-3"
								type="text"
							/>
							<label htmlFor="statement">Mission Statement</label>
							<textarea 

								className="form-control mb-3" 
								id="statement" 
								rows="2" 
								value={statement} 
								onChange={this.handleChange}
								name="statement"

							/>
							<label htmlFor="upload-image">Upload a Header Image</label>
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
							<button className="btn btn-success form-control mt-3" type="submit" >Next</button>
						</div>
					</div>
				</div>
			</form>		
		)
	}
	
}

function mapStateToProps(state){
	return {
		portfolio:state.showPortfolio.portfolio
	}
}
export default connect(mapStateToProps, {createAboutPage,editAboutPage})(AboutForm);