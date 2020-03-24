import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createTimelinePost, getMyPortfolio} from '../store/actions/portfolios';

class TimelineForm extends Component{
	constructor(props){
		super(props);
		this.state={
			timeline:[],
			title:"",
			date:"",
			text:""


		}
	}
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value});
	};
	handleSave=async(e)=>{
		e.preventDefault();
		try{
			await this.props.createTimelinePost({
				post:{
					title:this.state.title,
					date:this.state.date,
					text:this.state.text
				}

			})
			let timelineArr= this.state.timeline.concat({title:this.state.title,date:this.state.date,text:this.state.text});
			this.setState({timeline:timelineArr, title:"", date:"", text:""});
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
		return(
			
			<div className="row justify-content-center mt-5">
				<div className="col-md-8">
					<h1>Timeline</h1>
					<p>Add achievements and events to your career timeline</p>
					
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
								<button 
									className="btn btn-outline-success my-3" 
									type="submit" 
								>
								Add Post To Timeline
								</button>
								
							</div>
					</form>
					<div>
						<h2>Preview</h2>
						{timelinePosts}
					</div>
					<button className="btn btn-outline-success  form-control my-3" onClick={()=>{
						this.props.history.push('/myportfolio')
					}}>Save Timeline</button>
				</div>
			</div>

		)
	}
}


export default connect(null,{createTimelinePost,getMyPortfolio})(TimelineForm);