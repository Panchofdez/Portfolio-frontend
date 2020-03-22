import React, {Component} from 'react';
import PortfolioCard from '../components/PortfolioCard';
import {connect} from 'react-redux';
import {fetchMessages} from '../store/actions/portfolios';


const portfolios = [
	{
		title:"Pancho Fernandez",
		text:"Photographer",
		img:"/profile-pic.jpg",
		_id:1
	},
	{
		title:"Pancho Fernandez",
		text:"Photographer",
		img:"/profile-pic2.jpg",
		_id:2
	},
	{
		title:"Pancho Fernandez",
		text:"Photographer",
		img:"/profile-pic4.jpg",
		_id:3
	},
	{
		title:"Pancho Fernandez",
		text:"Photographer",
		img:"/profile-pic2.jpg",
		_id:4,
	},
	{
		title:"Pancho Fernandez",
		text:"Photographer",
		img:"/profile-pic3.jpg",
		_id:5
	},
	{	
		title:"Pancho Fernandez",
		text:"Photographer",
		img:"/profile-pic2.jpg",
		_id:6
	},
	{
		title:"Pancho Fernandez",
		text:"Photographer",
		img:"/profile-pic4.jpg",
		_id:7
	},
	{
		title:"Pancho Fernandez",
		text:"Photographer",
		img:"/profile-pic2.jpg",
		_id:8
	}
	

]

class PortfolioList extends Component{
	render(){
		const portfoliosList = portfolios.map(p=>(
			<PortfolioCard {...p} key={p._id}/>
		));
		return(
			<div>
				<div id="home-header" className="container">
					<div className="row justify-content-center">
						<div className="col-md-8 text-center mt-5">
							<h1> Discover our community</h1>
							<div className="input-group my-3">
								<input type="text" className="form-control" placeholder="Search by name..." aria-label="searchBar" />
								<div className="input-group-append">
									<button className="input-group-text btn btn-outline-dark" id="search-btn">Search</button>
								</div>
							</div>
							<button className="btn btn-outline-light my-3">Advanced Search</button>
						</div>
					</div>
				</div>
				<div className="container mt-3">
					<ul className="row m-0">
						{portfoliosList}
					</ul>
				</div>
	
			</div>
		);

	}
}

export default PortfolioList;