import React from 'react';
import {Link} from 'react-router-dom'


const PortfolioCard = ({name,type, _id, profileImage}) =>{
	return(
		<div className="col-lg-3 col-md-4 col-6 p-0 m-0" id="card-container">
			<div className="card h-100 mb-0" id="portfolio-card">
				<img src={profileImage} className="card-img-top h-50" alt="headerImage"/>
				<div className="card-body text-center" id='portfolio-card-body'>
					<h5 className="card-title mb-2">{name}</h5>
					<p className="card-text mb-2">{type}</p>		
				</div>
				<Link className="btn btn-outline-dark stretched-link m-3" id="portfolio-card-btn" to={`/portfolios/${_id}`}>View Portfolio</Link>

			</div>
		</div>
		

	)
}


export default PortfolioCard