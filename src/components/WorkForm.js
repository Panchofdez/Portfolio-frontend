import React, {Component} from 'react';
import VideosForm from '../components/VideosForm';

class WorkForm extends Component{
	constructor(props){
		super(props);
		this.state={
			title:"",
			description:"",
			file:null
		}
	};
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value});
	};
	onFileChange=(e)=>{
		this.setState({file:e.target.files[0]});
	};
	onFileUpload=(e)=>{
		console.log(this.state.file);
	};
	handleSubmit=(e)=>{
		e.preventDefault();
		console.log(this.state);
	}
	render(){
		const {title, description, file}=this.state;
		return (
			<div>
				
				<div className="row justify-content-center">
					<div className="col-md-8">
						<h1>Collections</h1>
						<p>Showcase your work/project through collections of photos</p>
						<form>
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
											name="file"
											className="custom-file-input" 
											id="photos"
											onChange={this.onFileChange}
										/>
										{file?(<label className="custom-file-label" htmlFor="header-image">{file.name}</label>):(
										<label className="custom-file-label" htmlFor="header-image">Choose file</label>)}
									</div>
									<div className="input-group-append">
										<button className="btn btn-primary mb-3" type="button" onClick={this.onFileUpload}>Upload</button>
									</div>
								</div>
							</div>
						</form>
						<button className="btn btn-outline-success my-3" type="submit" value="submit" onClick={this.handleSubmit}>Add Collection</button>
					</div>
				</div>
		
				<VideosForm/>
			</div>
		)
	}
}


export default WorkForm;