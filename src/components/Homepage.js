import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = (props)=>{
	return (
		<div className="container landing text-center">
			<div className="p-3 mb-5 pt-5">
				<h1 className="my-4">Portfolio</h1>
				<h3 className="my-4">A visual resume/portfolio for creative professionals</h3>
				<h3 className="my-4">A quick and easy way to showcase yourself and your work</h3>
				<h3 className="my-4">Join our community</h3>
				<button className="btn btn-outline-success btn-lg my-4 mx-2">Learn More</button>
				<Link className="btn btn-outline-success btn-lg my-4 mx-2" to="/signup" >Sign Up</Link>
			</div>

		</div>
	)
}


export default HomePage;