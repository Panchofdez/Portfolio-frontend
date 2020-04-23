import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, useRouteMatch} from 'react-router-dom';
import {deleteTimelinePost} from '../store/actions/portfolios';
import {toast} from 'react-toastify';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimelinePage = (props)=>{
	useEffect(() => {
	  window.scrollTo(0, 0)
	}, []);
	let match = useRouteMatch();
	const notifyDelete=(msg)=>{
    	toast.warning(msg, {autoClose:2000});
    }
	const timelinePosts = props.timeline.map(post=>{
		return (
			<VerticalTimelineElement
				key={post._id}
			    className="vertical-timeline-element--work"
			    date={post.date}
			    contentStyle={{color: '#161716',borderTop: '5px solid  #00ad8e'}}
			    iconStyle={{ background: '#00ad8e', color: '#fff', width:'25px', height:'25px', left:'6px'}}
			    
			  >
			    <h3 className="vertical-timeline-element-title">{post.title}</h3>
			    <p>
			     {post.text}
			    </p>
			    {match.url==='/myportfolio/timeline' && (
					<div className="float-right">
						<Link 
							className="btn button-outline btn-sm mr-3" 
							to={{
								pathname:`/myportfolio/edit/timeline/${post._id}`,
								state:{post}
							}}
						>
							<i className="fas fa-pen"></i>
						</Link>
						<button 
							className="btn btn-outline-danger btn-sm" 
							onClick={async()=>{
								try{
									await props.deleteTimelinePost(post._id);
									notifyDelete('Deleted From Timeline');
								}catch(err){
									return;
								}
								
							}}
						>
							<i className="fas fa-trash"></i>
						</button>
					</div>
				)}
			  </VerticalTimelineElement>
		)
	})
	
	return(
		<div>
			<div className="p-3">
				<div className="d-flex flex-row justify-content-between">
					<h2 className="mt-3">Timeline</h2>
					{match.path ==='/myportfolio/timeline' && (
						<div>
							<Link className="btn button mt-3" to="/myportfolio/edit/timeline"><i className="fas fa-pen"></i></Link>
						</div>
					)}
				</div>
			</div>
			{timelinePosts.length>0 &&(
				<VerticalTimeline layout="1-column">
					{timelinePosts}
				</VerticalTimeline>

			)}
			
		</div>
			
	)
}

export default connect(null,{deleteTimelinePost})(TimelinePage);

