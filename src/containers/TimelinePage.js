import React from 'react';
import {connect} from 'react-redux';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import {Link} from 'react-router-dom';
import {deleteTimelinePost} from '../store/actions/portfolios';


const TimelinePage = (props)=>{
	const timelinePosts = props.timeline.map(post=>{
		return (
			<TimelineItem
			    key={post._id}
			    dateText={post.date}
			    style={{ color: '#5cb85c'}}
			    dateInnerStyle={{ background: '#5cb85c' }}
			  >
			    <h3 style={{color:'#fff'}} className="mb-3">{post.title}</h3>
			    <p style={{color:'#fff'}}>
			      {post.text}
			    </p>
			    {props.match.url==='/myportfolio' && (
					<React.Fragment>
						<Link className="btn btn-outline-warning mr-2" to={`/myportfolio/edit/timeline/${post._id}`}>Edit</Link>
						<button 
							className="btn btn-outline-danger" 
							onClick={async()=>{
								try{
									await props.deleteTimelinePost(post._id);
									props.history.push('/myportfolio/timeline');
								}catch(err){
									return;
								}	
							}}>
							Delete
						</button>
					</React.Fragment>
				)}
					
			</TimelineItem>
		)
	})
	return(
		<div className="container">
			<div className="row justify-content-center mt-5">
				<div className="col-md-10">
					<Timeline animate lineColor={'#fff'}>
						{timelinePosts}
  					</Timeline>
				</div>
			</div>
		</div>
	)
}

export default connect(null,{deleteTimelinePost})(TimelinePage);



