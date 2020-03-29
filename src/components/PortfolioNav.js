import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom'



const PortfolioNav = ({name, image, location, id})=>{
	let match = useRouteMatch();
	return (
		<div className="nav justify-content-between container">

			<ul className="nav nav-tabs mt-3" id="portfolio-nav">
				{name ? (
					<li className="nav-item text-center">
						<Link className="nav-link portfolio-name" to={`${match.url}/profile`}>
							{image && (<img src={image} alt="" className="rounded-circle mr-3" id="myportfolio-profile-pic"/>)}
							{name}
						</Link>
					</li>

				): (
					<li className="nav-item text-center">
						<Link className="nav-link" to={`${match.url}/profile`}>Profile</Link>
					</li>
				)}
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
				
			</ul>
			<ul className="nav mt-3">
			{location.pathname==='/myportfolio' && (
				<li>
					<Link className="btn btn-outline-warning" to={`${match.url}/edit/about`}><i className="fas fa-pen"></i></Link>
				</li>
			)} 
			{location.pathname==='/myportfolio/about' && (
				<li>
					<Link className="btn btn-outline-warning" to={`${match.url}/edit/about`}><i className="fas fa-pen"></i></Link>
				</li>
			)} 
			{location.pathname==='/myportfolio/work' && (
				<React.Fragment>
					<li>
						<Link className="btn btn-outline-success mx-2" to={`${match.url}/edit/collections`}><i className="fas fa-plus"></i> Collection</Link>
					</li>
					<li>
						<Link className="btn btn-outline-success" to={`${match.url}/edit/videos`}><i className="fas fa-plus"></i> Video</Link>
					</li>
				</React.Fragment>
			)}
			{location.pathname==='/myportfolio/timeline' && (
				<li>
					<Link className="btn btn-outline-success" to={`${match.url}/edit/timeline`}><i className="fas fa-plus"></i> Post</Link>
				</li>
			)}
			{location.pathname==='/myportfolio/profile' && (
				<li>
					<Link className="btn btn-outline-warning" to={`${match.url}/edit/profile`}><i className="fas fa-pen"></i></Link>
				</li>
			)}
			{match.path==='/portfolios/:id' ?(
				<li>
					<a className="btn btn-outline-light ml-2">Follow</a>
				</li>
			):(
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