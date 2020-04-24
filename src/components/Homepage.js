import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = (props)=>{
	return (
		<React.Fragment>
			<div className="container flex-column landing text-center align-items-center">
				<div className="p-3 m-auto">
					
					<div className="row justify-content-center">
						<div className="col-md-12 my-md-5 my-3">
							<h2 className="title mt-5">A quick and easy way to showcase yourself and your work</h2>
							<Link className="btn btn-lg my-3 mx-2 signup-btn button" to="/signup" >Get Started</Link>
						</div>
					</div>
				</div>
				<div className="container-fluid" style={{minHeight:'250px', opacity:'0.85', backgroundColor:'#161716'}}>
					<div className="row container m-auto mb-md-0">
						<div className="col-md-4 my-md-5 my-4 border-right text-center">
							<i className="fas fa-camera mx-2 homepage-icons"></i>
							<h5 className="mt-3">Showcase your work through collections of photos and videos</h5>
						</div>
						<div className="col-md-4 my-md-5 my-4 text-center border-right">
							<i className="fas fa-history mx-2 homepage-icons"></i>
							<h5 className="mt-3">Update your career by adding events, achievements, education and past jobs to your career timeline</h5>
						</div>
						<div className="col-md-4 my-md-5 my-4 text-center">
							<i className="fas fa-hands-helping mx-2 homepage-icons"></i>
							<h5 className="mt-3">Give and receive recommendations and testimonials to and from other fellow professionals</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid" style={{minHeight:'250px'}}>
				<div className="row container justify-content-center align-items-center m-auto">
					<div className="col-md-10 col-12  my-5">
						<h5 className="px-4 mt-3" style={{lineHeight:2}}>
							<span className="mr-2" id="homepage-text">For creative professionals</span> that can't rely on a regular resume and don't have the time, money or resources to make their own website.
							We make it easy to create and share your own visual resume/portfolio
						</h5>	
					</div>
				</div>
			</div>
			
		</React.Fragment>
	)
}


export default HomePage;

