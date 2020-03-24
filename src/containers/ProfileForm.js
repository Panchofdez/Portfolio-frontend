import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createProfilePage} from '../store/actions/portfolios';


class ProfileForm extends Component{
	constructor(props){
		super(props);
		this.state={
			image:null,
			location:"City/Country",
			birthday:"Year",
			type:"Type of work"

		}
	};
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value});
	};
	handleFileChange=(e)=>{
		this.setState({image:e.target.files[0]});
	};
	handleSubmit=async (e)=>{
		e.preventDefault();
		let formData = new FormData();
  		formData.append('location', this.state.location);
  		formData.append('birthday', this.state.birthday);
  		formData.append('type',this.state.type);
  		formData.append('image', this.state.image);
		try{
			await this.props.createProfilePage(formData);
			this.setState({
				image:null,
				location:"City/Country",
				birthday:"Year",
				type:"Type of work"
			})
			this.props.history.push("/myportfolio/create/about");
		}catch(err){
			console.log(err);
			return;
		}
	}

	render(){
		const {image, location,birthday,type}=this.state;
		return (
			<form encType='multipart/form-data' onSubmit={this.handleSubmit}>
				<div className="row justify-content-center mt-5">
					<div className="col-md-8">
						<h1>Create Your Portfolio!</h1>
						<p>Lets start by setting up your profile and make it easier for people to find you</p>
						<div className="form-group">
							<label htmlFor="profile-pic">Upload your profile picture</label>
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
							<label htmlFor="type">What do you do?</label>
							<input
								className="form-control mb-3" 
								id="type" 
								value={type} 
								onChange={this.handleChange}
								name="type"
								type="text"
							/>
							<button className="btn btn-success form-control mt-3" type="submit" >Save</button>
						</div>
					</div>
				</div>
			</form>		
		)
	}
}

export default connect(null,{createProfilePage})(ProfileForm);