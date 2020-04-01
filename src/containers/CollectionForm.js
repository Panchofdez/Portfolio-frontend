import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createCollection, editCollection} from '../store/actions/portfolios';
import {addErrorMessage} from '../store/actions/errors';
import { toast } from 'react-toastify';



class CollectionForm extends Component{
	constructor(props){
		super(props);
		this.state={
			title:this.props.collection? this.props.collection.title: "",
			description:this.props.collection? this.props.collection.description:"",
			id:1,
			photos:null,
			collections:[]
		}	
	};
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value});
	};
	onFileChange=(e)=>{
		this.setState({photos:e.target.files});
	};
	notifyUpload = ()=>{
        toast("Upload In Progress", { autoClose: 4000 });
    };
    notifySuccess=(message)=>{
    	toast.success(message);
    };
	handleSubmit=async (e)=>{
		e.preventDefault();
		if(!this.state.photos && !this.props.collection){
			this.props.addErrorMessage('You must add at least one image to your collection');
			return;
		}
		let data = new FormData();
		if(this.state.photos){
			for(var x = 0; x<this.state.photos.length; x++) {
	       		data.append('photos', this.state.photos[x])
	   		}
	   		this.notifyUpload();
		}
   		data.append('title', this.state.title);
	   	data.append('description', this.state.description);
   		try{
   			if(this.props.collection){
   				await this.props.editCollection(data, this.props.collection._id);
   				this.props.history.push('/myportfolio/work');
   				this.notifySuccess("Successfully Saved Changes");
   			}else{
   				await this.props.createCollection(data);
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
		const {title, description,photos,collections, id}=this.state;
		const collectionsAdded = collections.map((collection)=>(
			<div key={collection.id} className="alert alert-success">Added {collection.title}</div>
		))
		let photosArr =[];
		if(photos){
			for(let x =0;x<photos.length; x++){
				photosArr.push(photos[x].name)
			};
		}
		const uploadedPhotos = photosArr.map((photo)=><li key={photo} className="ml-3">{photo}</li>)
		return (
			<div className="row justify-content-center mt-5">
				<div className="col-md-8">
					{this.props.collection ? (
						<h2>Edit Your Collection</h2>
					):(
						<h2>Add Collections</h2>
					)}
					<form encType='multipart/form-data' onSubmit={this.handleSubmit} >
						<div className="form-group">
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
								rows="4" 
								value={description} 
								onChange={this.handleChange}
								name="description"
							/>
							{this.props.collection?(
								<label htmlFor="upload-image">Add More Photos</label>
							):(
								<React.Fragment>
									<label htmlFor="upload-image">Upload Photos</label>
									<p><small>You can add up to 5 photos at a time</small></p>
								</React.Fragment>
							)}
							
							<div className="input-group" id="upload-image">
								<div className="custom-file">
									<input 
										type="file" 
										name="photos"
										className="custom-file-input" 
										id="photos"
										multiple
										onChange={this.onFileChange}
									/>
									<label className="custom-file-label" htmlFor="header-image">Choose files</label>
								</div>
							</div>
							<ul className="p-0">
								Photos Uploaded:
								{uploadedPhotos}
							</ul>
							
						</div>
						{this.props.collection? (
							<button className="btn btn-outline-success my-3" type="submit">Save Changes</button>
						):(
							<button className="btn btn-outline-success my-3" type="submit">Add Collection</button>
						)}
						
					</form>
					{collectionsAdded}
				</div>
			</div>

		)
	}
}


export default connect(null,{createCollection, addErrorMessage, editCollection})(CollectionForm);