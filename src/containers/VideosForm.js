import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {createVideo} from '../store/actions/portfolios';
import {addErrorMessage} from '../store/actions/errors';


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
	handleSave=async (e)=>{
		e.preventDefault();
		let link = this.state.link.split('/').slice(-1)[0];
		if(link.length!==11){
			this.props.addErrorMessage("Invalid Youtube Link");
			return;
		}
		await this.props.createVideo({
			video:{
				title:this.state.title,
				description:this.state.description,
				link:this.state.link
			}
		});
		let videos = this.state.videos.concat(this.state.title);
		this.setState({videos});
	};	
	render(){
		const {title, description, link,videos} = this.state;
		const videosAdded = videos.map((video)=>{
			return <div key={video} className="alert alert-success">Successfully added {video}</div>
		})
		return (
			<div>
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
							<button className="btn btn-outline-success my-3" type="submit" >Add Video</button>
							
						</div>
				</form>						
				{videosAdded}
				
			</div>

		)
	}
}


export default connect(null,{addErrorMessage, createVideo})(VideosForm);