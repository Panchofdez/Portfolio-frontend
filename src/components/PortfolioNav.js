import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom'



const PortfolioNav = ({name, image})=>{
	let match = useRouteMatch();
	let commentsPage=false;
	if(match.url==="/portfolios/show" || match.url==="/myportfolio" ){
		commentsPage = true;
	}
	
	return (
		<div className="nav justify-content-between container">

			<ul className="nav nav-tabs mt-3" id="portfolio-nav">
				{name && (
					<li className="nav-item text-center">
						<Link className="nav-link" to={`${match.url}/profile`}>
							<img src={image} alt="" className="rounded-circle mr-3" height={25} width={25}/>
							{name}
						</Link>
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
				{commentsPage && (
					<li className="nav-item text-center">
						<Link className="nav-link" to={`${match.url}/comments`}>Comments</Link>
					</li>
				)}
			</ul>
			<ul className="nav mt-3">
			{match.url==="/portfolios/show" && (
				<li>
					<a className="btn btn-outline-light">Connect</a>
				</li>
			)}
			{match.url==="/myportfolio/create" && (
				<li>
					<a className="btn btn-outline-light">Finish</a>
				</li>
			)}
			{match.url==="/myportfolio" && (
				<li>
					<a className="btn btn-outline-light">Edit</a>
				</li>
			)}
				
			</ul>
		</div>


	)
}


export default PortfolioNav;