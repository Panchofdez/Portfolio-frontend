import React, {Component} from 'react';
import PortfolioCard from '../components/PortfolioCard';
import {connect} from 'react-redux';
import {fetchPortfolios,searchPortfolios} from '../store/actions/portfolios';
import Loading from '../components/Loading';


class PortfolioList extends Component{
	constructor(props){
		super(props);
		this.state={
			search:"Find A Portfolio"
		}
	}
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
	};
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value});
	};
	handleSearch=async(e)=>{
		e.preventDefault();
		try{
			await this.props.searchPortfolios(this.state.search);
			this.setState({search:"Find A Portfolio"});
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
			<div className="pb-5">
				<div id="home-header" className="container-fluid">
					<div className="row justify-content-center">
						<div className="col-md-8 text-center mt-5">
							<h1> Discover our community</h1>
							<form onSubmit={this.handleSearch}>
								<div className="input-group my-5">
									<input 
										type="text" 
										name="search"
										value={this.state.search} 
										onChange={this.handleChange} 
										className="form-control" 
										aria-label="searchBar" />
									<div className="input-group-append">
										<button className="input-group-text btn btn-outline-dark" id="search-btn" type="submit">Search</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="container">
				{portfolios.length===0? (
					<div className="text-center" id="no-matches">
						<h5 className="mt-5">Sorry no matches were found, please try again</h5>					
					</div>
				):(
					<ul className="row m-0 p-0">
						{portfoliosList}
					</ul>

				)}
					
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

export default connect(mapStateToProps,{searchPortfolios,fetchPortfolios})(PortfolioList);