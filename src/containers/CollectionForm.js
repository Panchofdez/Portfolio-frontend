import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createCollection} from '../store/actions/portfolios';


class WorkForm extends Component{
	constructor(props){
		super(props);
		this.state={
			title:"",
			description:"",
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
	handleSubmit=async (e)=>{
		e.preventDefault();
		let data = new FormData();
   		for(var x = 0; x<this.state.photos.length; x++) {
       		data.append('photos', this.state.photos[x])
   		}
   		data.append('title', this.state.title);
   		data.append('description', this.state.description);
   		try{
   			await this.props.createCollection(data);
   			const newArr = this.state.collections.concat({title:this.state.title});
   			this.setState({
   				title:"",
   				description:"",
   				photos:null,
   				collections:newArr
   			});
   			
   		}catch(err){
   			return;
   		}
   		
	}
	render(){
		const {title, description,collections}=this.state;
		const collectionsAdded = collections.map((collection)=>(
			<div className="alert alert-success">Successfully added {collection.title}</div>
		))
		return (
			<div>
				<h1>Collections</h1>
				<p>Showcase your work/project through collections of photos</p>
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
							rows="2" 
							value={description} 
							onChange={this.handleChange}
							name="description"
						/>
						<label htmlFor="upload-image">Upload Photos</label>
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
					</div>
					<button className="btn btn-outline-success my-3" type="submit">Add Collection</button>
				</form>
				{collectionsAdded}
			
		</div>

		)
	}
}


export default connect(null,{createCollection})(WorkForm);