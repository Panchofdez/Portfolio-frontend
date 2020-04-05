import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = (props)=>{
	return (
		<React.Fragment>
			<div className="container landing text-center align-items-center">
				<div className="p-3 m-auto">
					<h2 className="title mt-5">A quick and easy way to showcase yourself and your work</h2>
					<div className="row justify-content-center">
						<div className="col-md-6 mt-5 mb-3">
							<h5 className="px-4">
								For creative professionals that can't rely on a regular resume and don't have the time, money or resources to make their own website.
								We make it easy to create and share your own visual resume/portfolio
							</h5>			
							<Link className="btn btn-success btn-lg my-3 mx-2 signup-btn" to="/signup" >Get Started</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid" style={{minHeight:'250px'}}>
				<div className="row container m-auto">
					<div className="col-md-4 mt-5 border-right text-center">
						<i className="fas fa-camera mx-2"></i>
						<h5 className="mt-3">Showcase your work through collections of photos and videos</h5>
					</div>
					<div className="col-md-4 mt-5 text-center border-right">
						<i class="fas fa-history mx-2"></i>
						<h5 className="mt-3">Update your career by adding events , achievements and past jobs to your career timeline</h5>
					</div>
					<div className="col-md-4 mt-5 text-center">
						<i class="fas fa-hands-helping mx-2"></i>
						<h5 className="mt-3">Give and receive recommendations and testimonials to and from other fellow professionals</h5>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}


export default HomePage;