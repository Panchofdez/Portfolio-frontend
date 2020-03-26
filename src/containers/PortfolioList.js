import React, {Component} from 'react';
import PortfolioCard from '../components/PortfolioCard';
import {connect} from 'react-redux';
import {fetchPortfolios} from '../store/actions/portfolios';
import Loading from '../components/Loading';


class PortfolioList extends Component{
	componentDidMount(){
		this.getPortfolios();
	}
	async getPortfolios(){
		try{
			await this.props.fetchPortfolios();
		}catch(err){
			console.log(err);
			return;
		}
	}
	render(){
		const {portfolios} = this.props;
		if(!portfolios){
			return (<Loading/>);
		}
		const portfoliosList = portfolios.map(p=>(
			<PortfolioCard {...p} key={p._id} history={this.props.history}/>
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
					<ul className="row m-0 p-0">
						{portfoliosList}
					</ul>
				</div>
	
			</div>
		);

	}
}

function mapStateToProps(state){
	return {
		portfolios:state.portfolios
	}
}

export default connect(mapStateToProps,{fetchPortfolios})(PortfolioList);