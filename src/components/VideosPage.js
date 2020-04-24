import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteVideo} from '../store/actions/portfolios';
import {toast} from 'react-toastify';



const VideosPage = ({videos, deleteVideo, history, url})=>{
	const notifyDelete=(msg)=>{
    	toast.warning(msg, {autoClose:2000});
    }
    console.log(url)
	const videosArr =videos.map(video=>{		
		return (
			<div key={video._id} className="row mt-4">	
				<div className="iframe-container">
					<iframe className="rounded" title={video._id} width="560" height="315" src={`https://www.youtube.com/embed/${video.link}?rel=0`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
			
				<div className="p-5 col-12 rounded-bottom mb-5 "  style={{backgroundColor:'#fff', color:'#161716'}}>
					<h3>{video.title}</h3>
					<p>{video.description}</p>
					{url==='/myportfolio/work' && (
						<div className="float-right mt-3">
							<Link 
								className="btn button-outline btn-sm mr-3" 
								to={{
									pathname:`/myportfolio/edit/videos/${video._id}`,
									state:{video}
								}}
							>
								<i className="fas fa-pen"></i>
							</Link>
							<button 
								className="btn btn-outline-danger btn-sm" 
								onClick={async()=>{
									try{
										await deleteVideo(video._id);
										notifyDelete('Deleted Video');
										history.push('/myportfolio/work');
									}catch(err){
										return;
									}
									
								}}
							>
								<i className="fas fa-trash"></i>
							</button>
						</div>
					)}
					
				</div>
			</div>
		)
	})
	return (
		<div className="container my-5">
			{videosArr}
		</div>

	)
}



export default connect(null,{deleteVideo})(VideosPage);