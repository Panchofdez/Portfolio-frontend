import React from 'react';
import {Link, useRouteMatch, useLocation} from 'react-router-dom';



const PortfolioNav = ()=>{
	let match = useRouteMatch();
	let location = useLocation();
	return (
		
		<div className="nav flex-column nav-pills mt-md-3 mt-0" id="v-pills-tab">
			<Link 
				className={location.pathname ===`${match.url}/about`|| location.pathname === match.url ? "nav-link active": "nav-link"} 
				id="v-pills-about-tab" 
				to={`${match.url}/about`} 
			>About
			</Link>
			<Link 
				className={location.pathname ===`${match.url}/work`? "nav-link active": "nav-link"}
				id="v-pills-work-tab"  
				to={`${match.url}/work`} 
			>Work
			</Link>
			<Link 
				className={location.pathname ===`${match.url}/timeline`? "nav-link active": "nav-link"}
				id="v-pills-timeline-tab" 
				to={`${match.url}/timeline`}
			>Timeline
			</Link>
			<Link 
				className={location.pathname ===`${match.url}/comments`? "nav-link active": "nav-link"}
				id="v-pills-comments-tab" 
				to={`${match.url}/comments`} 
			>Comments
			</Link>
			<Link 
				className={location.pathname ===`${match.url}/recommendations`? "nav-link active": "nav-link"}
				id="v-pills-recommendations-tab"
				to={`${match.url}/recommendations`}
			>Recommendations
			</Link>
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