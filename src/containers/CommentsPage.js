import React, {Component} from 'react';

class CommentsPage extends Component{
	constructor(props){
		super(props);
		this.state={
			value:"Give your testimonial here..."
		};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleChange(e){
		this.setState({value:e.target.value});
	};
	handleSubmit(e){
		e.preventDefault();
		console.log(this.state);
		this.setState({value:"Give your testimonial or referral here..."})
	};
	render(){
		const comments = this.props.comments.map(comment=>{
			return (
				
				<div key={comment._id} className="card col-md-12 mb-2">
					<div className="card-body">
						<p className="card-title">
							{comment.name}
						</p>
						<p className="card-text">{comment.text}</p>					
					</div>
				</div>
				
			)
		})
		return(
			<div className="container mt-5">
				<div className="row justify-content-center">
					<div className="col-md-10">
						<h2>Comments</h2>

						<div className="card border border-white bg-transparent p-0">
							<div className="card-body p-3">
								<div>
									<form onSubmit={this.handleSubmit}>
										<textarea 
											className="form-control my-3 p-0" 
											value={this.state.value} 
											onChange={this.handleChange}
											rows="3"
										/>
										<button className="btn btn-outline-success mb-3">Submit</button>
									</form>
								</div>
								<div className="row justify-content-center p-3">
									{comments}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
	


export default CommentsPage;