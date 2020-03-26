import React from 'react';
import {Link} from 'react-router-dom'


const PortfolioCard = ({name,headerImage,type, _id, profileImage}) =>{
	return(
		<div className="col-lg-3 col-md-4 col-6 p-0 m-0" id="card-container">
			<div className="card h-100 mb-0" id="portfolio-card">
				<img src={headerImage} className="card-img-top h-50" alt="headerImage"/>
				<div className="card-body">
					<div className="row">
						<div className="col-8 float-left">
							<h5 className="card-title">{name}</h5>
							<p className="card-text">{type}</p>		
						</div>
						<div className="col-4 ">
								<img src={profileImage} alt="" className="rounded-circle float-right profile-pic"/>
						</div>
					</div>
				</div>
				<Link className="btn btn-outline-dark stretched-link m-2" to={`/portfolios/${_id}`}>View Portfolio</Link>

			</div>
		</div>
		

	)
}


export default PortfolioCard