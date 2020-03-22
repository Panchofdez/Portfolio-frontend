import React from 'react';


const TimelinePage = (props)=>{
	const timelinePosts = props.timeline.map(post=>{
		return (
			<div key={post._id} className="card col-md-12 mb-2">
				<div className="card-body">
					<h5 className="card-title">{post.title}</h5>
					<h6 className="card-subtitle">{post.date}</h6>
					<p className="card-text">{post.text}</p> 
				</div>
			</div>
		)
	})
	return(
		<div className="container">
			<div className="row justify-content-center mt-5">
				<div className="col-md-10">
					<h2>Timeline</h2>
					<div className="card mt-5 p-3 border border-white bg-transparent">						
						<div className="card-body">
							<div className="row justify-content-center">
								{timelinePosts}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TimelinePage;