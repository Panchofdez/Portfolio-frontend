import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createCollection, editCollection} from '../store/actions/portfolios';
import {addErrorMessage} from '../store/actions/errors';
import { toast } from 'react-toastify';
import cloudinaryUpload from '../services/cloudinary';



class CollectionForm extends Component{
	constructor(props){
		super(props);
		this.state={
			title:this.props.location.state?this.props.location.state.collection.title: "",
			description:this.props.location.state? this.props.location.state.collection.description:"",
			id:1,
			photo:null,
			showPhoto:null,
			collections:[],
			loading:false
		}	
	};
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value});
	};
	onFileChange=(e)=>{
		this.setState({photo:e.target.files[0]});
		this.setState({showPhoto:URL.createObjectURL(e.target.files[0])});
	};
    notifySuccess=(message)=>{
    	toast.success(message, { autoClose: 2000 });
    };
	handleSubmit=async (e)=>{
		e.preventDefault();
		if(!this.state.photo && !this.props.location.state){
			this.props.addErrorMessage('You must add an image to your collection');
			return;
		}
		this.setState({loading:true});
		let formData={};
		if(this.state.photo){
			const response = await cloudinaryUpload(this.state.photo);
	  		formData = {
	   			title:this.state.title,
	   			description:this.state.description,
	   			image:response.secure_url,
	   			imageId:response.public_id
	   		}
	   		
		}else{
			formData = {
	   			title:this.state.title,
	   			description:this.state.description
	   		}
		}

   		try{
   			if(this.props.location.state){
   				await this.props.editCollection(formData, this.props.location.state.collection._id);
   				this.props.history.push('/myportfolio/work');
   				this.notifySuccess("Successfully Saved Changes");
   			}else{
   				await this.props.createCollection(formData);
	   			const newArr = this.state.collections.concat({title:this.state.title, id:this.state.id});
	   			this.setState({
	   				title:"",
	   				description:"",
	   				photo:null,
	   				collections:newArr,
	   				id:this.state.id +1,
	   				showPhoto:null,
	   				loading:false
	   			});
	   			this.notifySuccess("Successfully Added Collection");
	   			
   			}  	
   		}catch(err){
   			return;
   		}
   		
	}
	render(){
		const {title, description,photo,collections, showPhoto, loading}=this.state;
		const collectionsAdded = collections.map((collection)=>(
			<div key={collection.id} className="alert alert-success">Successfully added: {collection.title}</div>
		))
		let collection = null;
		if(this.props.location.state){
			collection=this.props.location.state.collection
		}
		if(loading){
			return(
				<div className="justify-content-center align-items-center mt-5 pt-5">
					<div className="loading-icon"></div>
				</div>

			)
		}else{


			return (
				<div className="row justify-content-center mt-5">
					<div className="col-md-8 col-10">
						{this.props.collection ? (
							<h3 >Edit Your Collection</h3>
						):(
							<h3>Collections</h3>
						)}

						<form encType='multipart/form-data' onSubmit={this.handleSubmit} >
							<div className="form-group mb-0">
							 	<label htmlFor="name">Title</label>
							 	<input
							 		value={title} 
									onChange={this.handleChange}
									name="title"
									className="form-control mb-3"
								/>
								<label htmlFor="statement">Description</label>
								<textarea 

									className="form-control mb-3" 
									id="collection-description" 
									rows="3" 
									value={description} 
									onChange={this.handleChange}
									name="description"
								/>
								{this.props.collection?(
									<label htmlFor="upload-image">Add Another Photo</label>
								):(
									<React.Fragment>
										<label htmlFor="upload-image">Add a photo to your collection</label>
										<p><small>You can always add more later</small></p>
									</React.Fragment>
								)}
								
								<div className="input-group" id="upload-image">
									<div className="custom-file">
										<input 
											type="file" 
											name="photo"
											className="custom-file-input" 
											id="photos"
											onChange={this.onFileChange}
										/>
										{photo ? (<label className="custom-file-label" htmlFor="header-image">{photo.name}</label>
										):(<label className="custom-file-label" htmlFor="header-image">Choose file</label>)}
										
									</div>
								</div>
								{showPhoto ?(
									<div className="justify-content-center row my-3">
										<div className="col-12" >
											<img src={showPhoto} className="img-fluid rounded carousel-photo" style={{width:'100%'}} />
										</div>
									</div>
								):null}
								
							</div>
							{collection? (
								<button className="btn button my-3" type="submit">Save Changes</button>
							):(
								<button className="btn button my-3" type="submit">Add Collection</button>
							)}

						</form>
						{collectionsAdded}
						
					</div>
				</div>

			)
		}	
	}
}


export default connect(null,{createCollection, addErrorMessage, editCollection})(CollectionForm);