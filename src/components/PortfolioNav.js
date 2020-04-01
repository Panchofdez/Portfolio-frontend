import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import { toast } from 'react-toastify';



const PortfolioNav = ({name, image, location, id, recommend, unRecommend,setRecommendationState, recommendationCheck})=>{
	let match = useRouteMatch();
	const notifySuccess = (message)=>{
		toast.success(message);
	}
	const notifyWarning=(message)=>{
    	toast.warning(message);
    };
	return (
		<div className="nav justify-content-between container">

			<ul className="nav nav-tabs mt-3" id="portfolio-nav">
				
				<div>
					{name ? (
						<li className="nav-item text-center">
							<Link className="nav-link portfolio-name" to={`${match.url}/profile`}>
								{image && (<img src={image} alt="" className="rounded-circle mr-3 myportfolio-profile-pic"/>)}
								{name}
							</Link>
						</li>

					): (
						<li className="nav-item text-center">
							<Link className="nav-link" to={`${match.url}/profile`}>Profile</Link>
						</li>
					)}
				</div>
				<div style={{display:'flex', flexDirection:'row'}}>
					<li className="nav-item text-center">
						<Link className="nav-link" to={`${match.url}/about`}>About</Link>
					</li>
					<li className="nav-item text-center">
						<Link className="nav-link" to={`${match.url}/work`}>Work</Link>
					</li>
					<li className="nav-item text-center">
						<Link className="nav-link" to={`${match.url}/timeline`}>Timeline</Link>
					</li>
					
					<li className="nav-item text-center">
						<Link className="nav-link" to={`${match.url}/comments`}>Comments</Link>
					</li>
					<li className="nav-item text-center">
						<Link className="nav-link" to={`${match.url}/recommendations`}>Recommendations</Link>
					</li>
				</div>
				
			</ul>
			<ul className="nav mt-3">
			{location.pathname==='/myportfolio' && (
				<li>
					<Link className="btn btn-outline-warning ml-2" to={`${match.url}/edit/about`}><i className="fas fa-pen"></i></Link>
				</li>
			)} 
			{location.pathname==='/myportfolio/about' && (
				<li>
					<Link className="btn btn-outline-warning ml-2" to={`${match.url}/edit/about`}><i className="fas fa-pen"></i></Link>
				</li>
			)} 
			{location.pathname==='/myportfolio/work' && (
				<React.Fragment>
					<li>
						<Link className="btn btn-outline-success mx-2" to={`${match.url}/edit/collections`}><i className="fas fa-plus"></i> Collections</Link>
					</li>
					<li>
						<Link className="btn btn-outline-success" to={`${match.url}/edit/videos`}><i className="fas fa-plus"></i> Videos</Link>
					</li>
				</React.Fragment>
			)}
			{location.pathname==='/myportfolio/timeline' && (
				<li>
					<Link className="btn btn-outline-success ml-2" to={`${match.url}/edit/timeline`}><i className="fas fa-plus"></i> Post</Link>
				</li>
			)}
			{location.pathname==='/myportfolio/profile' && (
				<li>
					<Link className="btn btn-outline-warning ml-2" to={`${match.url}/edit/profile`}><i className="fas fa-pen"></i></Link>
				</li>
			)}
			{match.path==='/portfolios/:id' && recommendationCheck && (
				<li>
					<button 
						className="btn btn-outline-success ml-2" 
						onClick={async()=>{		
							try{
								await unRecommend(id);
								setRecommendationState();
								notifyWarning(`You have stopped recommending ${name}`);

							}catch(err){
								console.log(err);
								return;
							}			
							
						}}
					>
						Recommending
					</button>
				</li>
			)}
			{match.path==='/portfolios/:id' && !recommendationCheck  &&(
				<li>
					<button 
						className="btn btn-outline-success ml-2" 
						onClick={async()=>{		
							try{
								await recommend(id);
								setRecommendationState();
								notifySuccess(`You are now recommending ${name}!`);
							}catch(err){
								console.log(err);
								return;
							}										
						}}
					>
						Recommend
					</button>
				</li>
			)}

			{match.path==='/myportfolio' &&(
				<li>
					<a className="btn btn-outline-light ml-2" data-toggle="modal" data-target="#shareModal">Share</a>
				</li>
			)}

				
			</ul>
			<div className="modal fade" id="shareModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="shareModalLabel">Use this link to share your portfolio!</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>{`localhost:3000/portfolios/${id}`}</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</div>


	)
}


export default PortfolioNav;