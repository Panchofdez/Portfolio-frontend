import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createCollection, editCollection} from '../store/actions/portfolios';
import {addErrorMessage} from '../store/actions/errors';
import { toast } from 'react-toastify';
import axios from 'axios';
import {setTokenHeader} from '../services/apiCall';


class CollectionForm extends Component{
	constructor(props){
		super(props);
		this.state={
			title:this.props.collection? this.props.collection.title: "",
			description:this.props.collection? this.props.collection.description:"",
			id:1,
			photo:null,
			collections:[]
		}	
	};
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value});
	};
	onFileChange=(e)=>{
		this.setState({photo:e.target.files[0]});
	};
	notifyUpload = ()=>{
        toast("Upload In Progress", { autoClose: 2000 });
    };
    notifySuccess=(message)=>{
    	toast.success(message, { autoClose: 2000 });
    };
	handleSubmit=async (e)=>{
		e.preventDefault();
		if(!this.state.photo && !this.props.collection){
			this.props.addErrorMessage('You must add one image to your collection');
			return;
		}
		let formData={};
		if(this.state.photo){
			setTokenHeader();
    		const data = new FormData();
	    	data.append('file', this.state.photo);
	    	data.append('upload_preset', 'panchofdez')
	    	const res = await axios.post('https://api.cloudinary.com/v1_1/fdez/image/upload', data);
	    	const token = localStorage.jwtToken;
	    	setTokenHeader(token)
	    	this.notifyUpload();
	  		formData = {
	   			title:this.state.title,
	   			description:this.state.description,
	   			image:res.data.secure_url,
	   			imageId:res.data.public_id
	   		}
	   		
		}else{
			formData = {
	   			title:this.state.title,
	   			description:this.state.description
	   		}
		}

   		try{
   			if(this.props.collection){
   				await this.props.editCollection(formData, this.props.collection._id);
   				this.props.history.push('/myportfolio/work');
   				this.notifySuccess("Successfully Saved Changes");
   			}else{
   				await this.props.createCollection(formData);
	   			const newArr = this.state.collections.concat({title:this.state.title, id:this.state.id});
	   			this.setState({
	   				title:"",
	   				description:"",
	   				photos:null,
	   				collections:newArr,
	   				id:this.state.id +1
	   			});
	   			this.notifySuccess("Successfully Added Collection")
   			}  			
   		}catch(err){
   			return;
   		}
   		
	}
	render(){
		const {title, description,photo,collections}=this.state;
		const collectionsAdded = collections.map((collection)=>(
			<div key={collection.id} className="alert alert-success">{collection.title}</div>
		))
		return (
			<div className="row justify-content-center mt-4">
				<div className="col-md-8 col-10">
					{this.props.collection ? (
						<h2 >Edit Your Collection</h2>
					):(
						<h2>Add Collections</h2>
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
									):(<label className="custom-file-label" htmlFor="header-image">Choose files</label>)}
									
								</div>
							</div>
							
						</div>
						{this.props.collection? (
							<button className="btn btn-outline-success my-3" type="submit">Save Changes</button>
						):(
							<button className="btn btn-outline-success my-3" type="submit">Add Collection</button>
						)}

					</form>
					{!this.props.collection && <h4>Successfully Added:</h4> }
					
					{collectionsAdded}
					
				</div>
			</div>

		)
	}
}


export default connect(null,{createCollection, addErrorMessage, editCollection})(CollectionForm);