import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createTimelinePost, editTimelinePost} from '../store/actions/portfolios';
import { toast } from 'react-toastify';

class TimelineForm extends Component{
	constructor(props){
		super(props);
		this.state={
			timeline:[],
			title:this.props.post ? this.props.post.title : "",
			date: this.props.post ? this.props.post.date : "",
			text: this.props.post ? this.props.post.text : ""
		}
	}
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value});
	};
	notifySuccess=(message)=>{
    	toast.success(message, {autoClose:2000});   	
    };
	handleSave=async(e)=>{
		e.preventDefault();
		try{
			if(this.props.post){
				await this.props.editTimelinePost({
					post:{
						title:this.state.title,
						date:this.state.date,
						text:this.state.text
					}
				}, this.props.post._id);
				this.props.history.push('/myportfolio/timeline');
				this.notifySuccess("Successfully Saved Changes");
			}else{
				await this.props.createTimelinePost({
					post:{
						title:this.state.title,
						date:this.state.date,
						text:this.state.text
					}

				});
				let timelineArr= this.state.timeline.concat({title:this.state.title,date:this.state.date,text:this.state.text});
				this.setState({timeline:timelineArr, title:"", date:"", text:""});
				this.notifySuccess('Successfully Added Post To Timeline');
			}	
			
		}catch(err){
			return;
		}		
	};

	render(){
		const timelinePosts = this.state.timeline.map(post=>{
			return (
				<div key={post.title} className="card mb-2">
					<div className="card-body">
						<h5 className="card-title">{post.title}</h5>
						<h6 className="card-subtitle">{post.date}</h6>
						<p className="card-text">{post.text}</p> 
					</div>
				</div>
			)
		})

		const {title, date, text} = this.state;
		const {url}= this.props.match;
		return(
			
			<div className="row justify-content-center mt-5">
				<div className="col-md-8">
					{!this.props.portfolio && <p className="float-right">Step 4 of 4</p>}
					<h1>Timeline</h1>
					<p>Add achievements, events and past jobs to your career timeline</p>					
					<form onSubmit={this.handleSave}>
							<div className="form-group">
							 	<label htmlFor="title">Title</label> 
							 	<input
							 		value={title} 
									onChange={this.handleChange}
									name="title"
									className="form-control"
								/>
								
								<label htmlFor="date">Date</label>
							 	<input
							 		value={date} 
									onChange={this.handleChange}
									name="date"
									className="form-control"
								/>
								
								<label htmlFor="text">Description</label>
								<textarea 
									className="form-control"  
									rows="3" 
									value={text} 
									onChange={this.handleChange}
									name="text"
								/>
								{this.props.post? (
									<button 
									className="btn btn-outline-success my-3" 
										type="submit" 
									>
									Save Post
									</button>
								):(
									<button 
										className="btn btn-outline-success my-3" 
										type="submit" 
									>
									Add Post To Timeline
									</button>
								)}							
							</div>
					</form>
					{!this.props.post && (
						<React.Fragment>
							<div>
								<h2>Successfully Added:</h2>
								{timelinePosts}
							</div>
							<button className="btn btn-success  form-control my-3" onClick={()=>{
								if(this.props.match.url.split('/')[2]==='create'){
									this.props.history.push('/myportfolio');									
								}else{
									this.props.history.push('/myportfolio/timeline');	
								}
								
							}}>Finish</button>
						</React.Fragment>
					)}					
				</div>
			</div>

		)
	}
}

function mapStateToProps(state){
	return{
		portfolio:state.showPortfolio.portfolio
	}
}
export default connect(mapStateToProps,{createTimelinePost, editTimelinePost})(TimelineForm);