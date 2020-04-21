import React from 'react';



const PortfolioNav = ()=>{
	return (
		
		<div className="nav flex-column nav-pills mt-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
			<a className="nav-link active" id="v-pills-about-tab" data-toggle="pill" href="#about-page" role="tab" aria-controls="v-pills-about" aria-selected="true">About</a>
			<a className="nav-link" id="v-pills-work-tab" data-toggle="pill" href="#work-page" role="tab" aria-controls="v-pills-work" aria-selected="false">Work</a>
			<a className="nav-link" id="v-pills-timeline-tab" data-toggle="pill" href="#timeline-page" role="tab" aria-controls="v-pills-timeline" aria-selected="false">Timeline</a>
			<a className="nav-link" id="v-pills-comments-tab" data-toggle="pill" href="#comments-page" role="tab" aria-controls="v-pills-comments" aria-selected="false">Comments</a>
			<a className="nav-link" id="v-pills-recommendations-tab" data-toggle="pill" href="#recommendations-page" role="tab" aria-controls="v-pills-recommendations" aria-selected="true">Recommendations</a>
		</div>



	)
}


export default PortfolioNav;


// <div className="nav justify-content-between p-0">

// 			<ul className="nav nav-tabs mt-3" id="portfolio-nav" style={{flex:1}}>
				
			
// 					<li className="nav-item text-center">
// 						<Link className="nav-link" to={`${match.url}/about`}>About</Link>
// 					</li>
// 					<li className="nav-item text-center">
// 						<Link className="nav-link" to={`${match.url}/work`}>Work</Link>
// 					</li>
// 					<li className="nav-item text-center">
// 						<Link className="nav-link" to={`${match.url}/timeline`}>Timeline</Link>
// 					</li>
					
// 					<li className="nav-item text-center">
// 						<Link className="nav-link" to={`${match.url}/comments`}>Comments</Link>
// 					</li>
// 					<li className="nav-item text-center">
// 						<Link className="nav-link" to={`${match.url}/recommendations`}>Recommendations</Link>
// 					</li>
		
				
// 			{location.pathname==='/myportfolio' && (
// 				<li>
// 					<Link className="btn btn-outline-warning ml-2" to={`${match.url}/edit/about`}><i className="fas fa-pen"></i></Link>
// 				</li>
// 			)} 
// 			{location.pathname==='/myportfolio/about' && (
// 				<li>
// 					<Link className="btn btn-outline-warning ml-2" to={`${match.url}/edit/about`}><i className="fas fa-pen"></i></Link>
// 				</li>
// 			)} 
// 			{location.pathname==='/myportfolio/work' && (
// 				<li>
// 					<Link className="btn btn-outline-warning ml-2" to={`${match.url}/edit/work`}><i className="fas fa-pen"></i></Link>
// 				</li>
	
// 			)}
// 			{location.pathname==='/myportfolio/timeline' && (
// 				<li>
// 					<Link className="btn btn-outline-warning ml-2" to={`${match.url}/edit/timeline`}><i className="fas fa-pen"></i></Link>
// 				</li>
// 			)}
// 			{location.pathname==='/myportfolio/profile' && (
// 				<React.Fragment>
// 					<li>
// 						<Link className="btn btn-outline-warning ml-2" to={`${match.url}/edit/profile`}><i className="fas fa-pen"></i></Link>
// 					</li>
// 					<li>
// 						<Link className="btn btn-outline-success ml-2" to="/myportfolio/edit/contactinfo" ><i className="fas fa-plus"></i> Contact Info</Link>
// 					</li>
// 				</React.Fragment>
// 			)}
// 			</ul>
// 		</div>