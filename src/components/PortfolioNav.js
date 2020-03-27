import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom'



const PortfolioNav = ({name, image, location})=>{
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
					<Link className="btn btn-outline-success" to={`${match.url}/edit/about`}>Edit</Link>
				</li>
			)} 
			{location.pathname==='/myportfolio/about' && (
				<li>
					<Link className="btn btn-outline-success" to={`${match.url}/edit/about`}>Edit</Link>
				</li>
			)} 
			{location.pathname==='/myportfolio/work' && (
				<React.Fragment>
					<li>
						<Link className="btn btn-outline-success mx-2" to={`${match.url}/edit/collections`}>Add Collection</Link>
					</li>
					<li>
						<Link className="btn btn-outline-success" to={`${match.url}/edit/videos`}>Add Video</Link>
					</li>
				</React.Fragment>
			)}
			{location.pathname==='/myportfolio/timeline' && (
				<li>
					<Link className="btn btn-outline-success" to={`${match.url}/edit/timeline`}>Add Post To Timeline</Link>
				</li>
			)}
			{location.pathname==='/myportfolio/profile' && (
				<li>
					<Link className="btn btn-outline-success" to={`${match.url}/edit/profile`}>Edit</Link>
				</li>
			)}
			{match.url==='/portfolios'&& (
				<li>
					<a className="btn btn-outline-success">Connect</a>
				</li>
			)}

				
			</ul>
		</div>


	)
}


export default PortfolioNav;