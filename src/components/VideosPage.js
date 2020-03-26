import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CollectionForm from '../containers/CollectionForm';
import {deleteVideo} from '../store/actions/portfolios';


const VideosPage = ({videos, deleteVideo, history, match})=>{
	const videosArr =videos.map(video=>{		
		return (
			<div key={video._id} className="row container-fluid justify-content-center my-4">
				<div className="col-md-8 justify-content-center">
					<div className="iframe-container">
					<iframe key={video._id} width="560" height="315" src={`https://www.youtube.com/embed/${video.link}?rel=0`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
				</div>
				<div className="col-md-4 text-center align-self-center">
					<h3>{video.title}</h3>
					<p>{video.description}</p>
					{match.url==='/myportfolio' && (
						<React.Fragment>
							<Link className="btn btn-outline-warning mr-3" to={`/myportfolio/edit/videos/${video._id}`}>Edit</Link>
							<button 
								className="btn btn-outline-danger" 
								onClick={async()=>{
									try{
										await deleteVideo(video._id);
										history.push('/myportfolio/work');
									}catch(err){
										return;
									}
									
								}}
							>
								Delete
							</button>
						</React.Fragment>
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