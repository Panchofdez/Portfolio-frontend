import React from 'react';
import {Link} from 'react-router-dom'


const PortfolioCard = (props) =>{
	const {name,headerImage,type, _id} = props;
	return(
		<div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0" id="card-container">
			<div className="card h-100 mb-0" id="portfolio-card">
				<img src={headerImage} className="card-img-top h-50" alt="profile-pic"/>
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{type}</p>
					<Link className="btn btn-outline-dark stretched-link" to={`/portfolios/${_id}`}>View Portfolio</Link>
				</div>

			</div>
		</div>
		

	)
}


export default PortfolioCard