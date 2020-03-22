import React, {Component}  from 'react';


class VideosForm extends Component{
	constructor(props){
		super(props);
		this.state={
			videos:[],
			title:"",
			description:"",
			link:""
		}
	};
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value});
	};
	handleSave=(e)=>{
		e.preventDefault();
		let link = this.state.link.split('/').slice(-1)[0];
		if(link.length!==11){
			console.log('ERROR!!!');
		}
		let videos = this.state.videos.concat({link:link,title:this.state.title,description:this.state.description});
		this.setState({videos});
	};	
	render(){
		const {title, description, link} = this.state;
		return (
			<div className="row justify-content-center mt-5">
					<div className="col-md-8">
						<h1>Videos</h1>
						<p>Share your videos from youtube by pasting in your youtube video link</p>
						
						<form onSubmit={this.handleSave}>
								<div className="form-group">
									<label htmlFor="date">Youtube Link</label>
								 	<input
								 		value={link} 
										onChange={this.handleChange}
										name="link"
										className="form-control"
									/>
								 	<label htmlFor="title">Title</label> 
								 	<input
								 		value={title} 
										onChange={this.handleChange}
										name="title"
										className="form-control"
									/>
									
									<label htmlFor="text">Description</label>
									<textarea 
										className="form-control"  
										rows="3" 
										value={description} 
										onChange={this.handleChange}
										name="description"
									/>
									<button className="btn btn-outline-success my-3" type="submit" value="submit">Add Video</button>
									
								</div>
						</form>
						<div>
							<h2>Preview</h2>
						</div>
						<button className="btn btn-outline-success  form-control my-3" onClick={this.handleSubmit}>Submit</button>
					</div>
				</div>

		)
	}
}


export default VideosForm;