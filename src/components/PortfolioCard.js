import React from 'react';



const PortfolioCard = (props) =>{
	return(
		<div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0" id="card-container">
			<div className="card h-100 mb-0" id="portfolio-card">
				<img src={props.img} className="card-img-top h-50" alt="profile-pic"/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text}</p>
					<a className="btn btn-outline-dark stretched-link" href="/portfolios/show" onClick={()=>console.log(props)}>View Portfolio</a>
				</div>

			</div>
		</div>
		

	)
}


export default PortfolioCard