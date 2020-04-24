import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createProfile, editProfile} from '../store/actions/portfolios';
import {addErrorMessage} from '../store/actions/errors';
import Loading from '../components/Loading';
import { toast } from 'react-toastify';
import cloudinaryUpload from '../services/cloudinary';
import fixImage from '../services/imageOrientation';

class ProfileForm extends Component{
	constructor(props){
		super(props);
		this.state={
			headerImage: this.props.location.state ? this.props.location.state.portfolio.headerImage : null,
			showHeaderImage:this.props.location.state ? fixImage(this.props.location.state.portfolio.headerImage) : null,
			profilePic:this.props.location.state ? this.props.location.state.portfolio.profileImage : null,
			showProfilePic:this.props.location.state ? fixImage(this.props.location.state.portfolio.profileImage) : null,
			name: this.props.location.state ? this.props.location.state.portfolio.name : "Your name or name of your business",
			loading:false
		}
	};
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value});
	};
	handleFileChange=(e)=>{
		this.setState({[e.target.name]:e.target.files[0]});
		if(e.target.name ==="headerImage" && e.target.files[0]){
			this.setState({showHeaderImage:URL.createObjectURL(e.target.files[0])});
		}
		if(e.target.name ==="profilePic" && e.target.files[0]){
			this.setState({showProfilePic:URL.createObjectURL(e.target.files[0])})
		}
	};
    notifySuccess=()=>{
    	toast.success("Successfully saved changes", {autoClose:3000});   	
    };
    clearText=(e)=>{
    	this.setState({[e.target.name]:""})
    };
	handleSubmit=async (e)=>{
		e.preventDefault();

		if(!this.state.profilePic  || this.state.name===""){
			this.props.addErrorMessage("You must provide a name and profile picture");
			return;
		}
		this.setState({loading:true});
		if(this.props.location.state && this.props.location.state.portfolio){
			this.handleEdit();
		}else{
			this.handleCreate();
		}
	};
	handleCreate= async()=>{	
		try{
			const profilePicRes = await cloudinaryUpload(this.state.profilePic);
			let data ={}
			if(this.state.headerImage){
				const coverPhotoRes = await cloudinaryUpload(this.state.headerImage);
				data = {
					name:this.state.name, 
					profileImage:profilePicRes.secure_url,
					profileImageId:profilePicRes.public_id,
					headerImage:coverPhotoRes.secure_url,
					headerImageId:coverPhotoRes.public_id
				}
			}else{
				data={
					name:this.state.name, 
					profileImage:profilePicRes.secure_url,
					profileImageId:profilePicRes.public_id,
				}
			}
			
			await this.props.createProfile(data);
			this.props.history.push("/myportfolio/about");
			this.notifySuccess();
		}catch(err){
			console.log(err);
		}
	};
	handleEdit = async()=>{
		try{
			let formData = {}
			if(this.state.profilePic !== this.props.location.state.portfolio.profileImage){
				const profileImageRes = await cloudinaryUpload(this.state.profilePic);
				if(this.state.headerImage && this.state.headerImage !== this.props.location.state.portfolio.headerImage){
					const headerImageRes = await cloudinaryUpload(this.state.headerImage);
					formData = {
						name:this.state.name,
						profileImage:profileImageRes.secure_url,
						profileImageId:profileImageRes.public_id,
						headerImage:headerImageRes.secure_url,
						headerImageId:headerImageRes.public_id
					}
				}else{
					formData={
						name:this.state.name,
						profileImage:profileImageRes.secure_url,
						profileImageId:profileImageRes.public_id,
					}
				}
			}else if(this.state.headerImage && this.state.headerImage!== this.props.location.state.portfolio.headerImage){
				const coverPhotoResponse = await cloudinaryUpload(this.state.headerImage);
				formData = {
					name:this.state.name,
					headerImage:coverPhotoResponse.secure_url,
					headerImageId:coverPhotoResponse.public_id
				}
			}else{
				formData={
					name:this.state.name
				}
			}
			await this.props.editProfile(formData);
			this.props.history.push('/myportfolio/about');
			this.notifySuccess();
		}catch(err){

		}
	}

	render(){
		const {headerImage,profilePic, name, showProfilePic, showHeaderImage, loading}=this.state;
		let portfolio=null;
		if(this.props.location.state){
			portfolio= this.props.location.state.portfolio;
		}
		if(loading){
			return <Loading/>
		}else{
			return (
				<form encType='multipart/form-data' onSubmit={this.handleSubmit}>
					<div className="row justify-content-center mt-5 pb-5">
						<div className="col-md-8 col-10">
							{portfolio ?(
								<h2>Lets make it easier for people to find and identify you</h2>
							):(
								<React.Fragment>
									<h1>Create Your Portfolio!</h1>
									<p>Lets make it easier for people to find and identify you</p>
								</React.Fragment>
							)}
							
							<div className="form-group">
								<label htmlFor="name">Name *</label>
							 	<input
							 		value={name} 
									onChange={this.handleChange}
									name="name"
									className="form-control mb-3"
									type="text"
									onFocus={!portfolio ? this.clearText : undefined}
								/>
								<label htmlFor="profile-pic">Profile Picture *</label>
								<div className="input-group">
									<div className="custom-file mb-3" >
										<input 
											type="file" 
											name="profilePic"
											className="custom-file-input" 
											id="profile-pic"
											onChange={this.handleFileChange}
										/>
										{profilePic?(<label className="custom-file-label" htmlFor="header-image">{profilePic.name}</label>):(
										<label className="custom-file-label" htmlFor="header-image">Choose file</label>)}
									</div>
								</div>
								{profilePic ?(
									<div className="justify-content-center row my-3">
										<img src={showProfilePic} className="rounded"style={{height:'200px', width:'200px'}} alt=""/>
									</div>
								):null}
								<label htmlFor="upload-header-image">Cover Photo</label>
								<div className="input-group mb-3" id="upload-header-image">
									<div className="custom-file">
										<input 
											type="file" 
											name="headerImage"
											className="custom-file-input" 
											id="header-image"
											onChange={this.handleFileChange}
										/>
										{headerImage?(<label className="custom-file-label" htmlFor="header-image">{headerImage.name}</label>):(
										<label className="custom-file-label" htmlFor="header-image">Choose file</label>)}
									</div>
								</div>
								{headerImage ?(
									<div className="justify-content-center row my-3">
										<div className="col-12" >
											<img src={showHeaderImage} className="img-fluid rounded" style={{height:'200px', width:'100%'}} alt=""/>
										</div>
									</div>
								):null}
			
								
								<button className="btn button form-control mt-3" type="submit" >Save Changes</button>
					
								
							</div>
						</div>
					</div>
				</form>		
			)
		}
	}
}

export default connect(null,{createProfile, editProfile, addErrorMessage})(ProfileForm);