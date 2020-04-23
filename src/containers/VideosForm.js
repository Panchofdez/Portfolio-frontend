import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {createVideo, editVideo} from '../store/actions/portfolios';
import {addErrorMessage} from '../store/actions/errors';
import { toast } from 'react-toastify';

class VideosForm extends Component{
	constructor(props){
		super(props);
		this.state={
			videos:[],
			title: this.props.location.state ? this.props.location.state.video.title : "",
			description:this.props.location.state?this.props.location.state.video.description : "",
			link:this.props.location.state? this.props.location.state.video.link : ""
		}
	};
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value});
	};
    notifySuccess=(message)=>{
    	toast.success(message, {autoClose:2000});   	
    };
	handleSave=async (e)=>{
		e.preventDefault();
		if(this.state.link === ""){
			this.props.addErrorMessage("Youtube link is required");
			return;
		}
		let link = this.state.link.split('/').slice(-1)[0];
		if(link.length!==11){
			this.props.addErrorMessage("Invalid Youtube Link");
			return;
		}
		try{
			if(this.props.location.state){
				await this.props.editVideo({
					title:this.state.title,
					description:this.state.description,
					link:link
				}, this.props.location.state.video._id);
				this.props.history.push("/myportfolio/work");
				this.notifySuccess("Successfully Saved Changes");
			}else{
				await this.props.createVideo({
					video:{
						title:this.state.title,
						description:this.state.description,
						link:link
					}
				});
				let videos = this.state.videos.concat(this.state.title);
				this.setState({videos, title:"", description:"", link:""});
				this.notifySuccess("Successfully Added Video")
			}
		}catch(err){

		}
		
	};	
	render(){
		const {title, description, link,videos} = this.state;
		const videosAdded = videos.map((video)=>{
			return <div key={video} className="alert alert-success">Successfully added {video}</div>
		})
		let video = null;
		if(this.props.location.state){
			video = this.props.location.state.video;
		}
		return (
			<div className="row justify-content-center mt-5">
				<div className="col-md-8 col-10">
					{this.props.video ? (
						<h3>Edit Your Video</h3>
					): (
						<React.Fragment>
							<h3>Videos</h3>
							<p>Share your videos from youtube by copying and pasting your youtube video link</p>
						</React.Fragment>
					)}
					
					
					<form onSubmit={this.handleSave}>
							<div className="form-group mb-0">
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
								{video? (
									<button className="btn button my-3" type="submit" >Save Changes</button>
								):(
									<button className="btn button my-3" type="submit" >Add Video</button>
								)}
								
								
							</div>
					</form>			
					{videosAdded}
				</div>
			</div>

		)
	}
}


export default connect(null,{addErrorMessage, createVideo, editVideo})(VideosForm);