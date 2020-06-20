import React, {Component} from 'react';
import PortfolioCard from '../components/PortfolioCard';
import {connect} from 'react-redux';
import {fetchPortfolios,searchPortfolios} from '../store/actions/portfolios';
import Loading from '../components/Loading';


class PortfolioList extends Component{
	constructor(props){
		super(props);
		this.state={
			search:"",
			category:null
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
	};
	filterPortfolios = (portfoliosArr, searchTerm)=>{
		const term = searchTerm.trim().toLowerCase();
		if(term ===""){
			return portfoliosArr
		}else{
			return portfoliosArr.filter((portfolio)=>portfolio.name.toLowerCase().indexOf(term) !== -1 || portfolio.type.toLowerCase().indexOf(term)!== -1 || portfolio.location.toLowerCase().indexOf(term)!== -1)
		}
	};
	filterByCategory = (portfoliosArr, categoryArr)=>{
		return portfoliosArr.filter((portfolio)=>{
			for(let term of categoryArr){
				if(portfolio.type.toLowerCase().indexOf(term.toLowerCase())!== -1){
					return true;
				}

			}
			return false
		})
	}
	render(){
		let {portfolios} = this.props;
		if(!portfolios){
			return (<Loading/>);
		}
		console.log(this.state.category);
		if(this.state.category){
			console.log('Arrived');
			portfolios = this.filterByCategory(portfolios, this.state.category);
		}
		console.log(portfolios);
		const portfoliosList = this.filterPortfolios(portfolios, this.state.search).map(p=>(
			<PortfolioCard {...p} key={p._id} history={this.props.history}/>
		));
		return(
			<div className="pb-5">
				<div className="container">
				
					<div className="row mt-4 justify-content-center">
						<div className="col-lg-8  col-md-9 flex-column">
							<input 
								type="text" 
								name="search"
								value={this.state.search} 
								onChange={this.handleChange} 
								className="form-control mb-4" 
								aria-label="searchBar" 
								placeholder="Search"
							/>
							{portfolios.length===0 ? (
								<div className="text-center" id="no-matches">
									<h5 className="mt-5">Sorry no matches were found, please try again</h5>					
								</div>
							):(
								<div>
									{portfoliosList}
								</div>
							)}
						</div>
						<div className="col-lg-4 col-md-3">
							<div className="card " style={{color:'black'}} >
								<div className="card-header" style={{fontWeight:'bold'}}>
									Popular Categories
								</div>
								<ul className="nav nav-pills flex-column" id="categories" role="tablist">
									<li className="nav-item border-bottom" onClick={()=>{
											this.setState({category:null})
										}}
									>
										<a className="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="All" aria-selected="true">All</a>
									</li>
									<li className="nav-item border-bottom" onClick={()=>{
											this.setState({category:['architect', 'home']})
										}}
									>
										<a className="nav-link" id="architecture-tab" data-toggle="tab" href="#architecture" role="tab" aria-controls="Architecture" aria-selected="true">Architecture</a>
									</li>
									<li className="nav-item border-bottom" onClick={()=>{
											this.setState({category:['art']})
										}}
									>
										<a className="nav-link " id="art-tab" data-toggle="tab" href="#art" role="tab" aria-controls="Art" aria-selected="true">Art</a>
									</li>		
									<li className="nav-item border-bottom" onClick={()=>{
											this.setState({category:['business', 'manager', 'accountant', 'analyst', 'consultant']})
										}}
									>
										<a className="nav-link" id="business-tab" data-toggle="tab" href="#business" role="tab" aria-controls="Business" aria-selected="true">Business</a>
									</li>
									<li className="nav-item border-bottom" onClick={()=>{
											this.setState({category:['dance']})
										}}
									>
										<a className="nav-link" id="dance-tab" data-toggle="tab" href="#dance" role="tab" aria-controls="Dance" aria-selected="true">Dance</a>
									</li>
									<li className="nav-item border-bottom" onClick={()=>{
											this.setState({category:['design']})
										}}
									>
										<a className="nav-link" id="design-tab" data-toggle="tab" href="#design" role="tab" aria-controls="Design" aria-selected="true">Design</a>
									</li>
									<li className="nav-item border-bottom" onClick={()=>{
											this.setState({category:['engineer']})
										}}
									>
										<a className="nav-link" id="engineering-tab" data-toggle="tab" href="#engineering" role="tab" aria-controls="Engineering" aria-selected="true">Engineering</a>
									</li>
									<li className="nav-item border-bottom" onClick={()=>{
											this.setState({category:['fashion', 'model']})
										}}
									>
										<a className="nav-link" id="fashion-tab" data-toggle="tab" href="#fashion" role="tab" aria-controls="Fashion" aria-selected="true">Fashion</a>
									</li>
									<li className="nav-item border-bottom" onClick={()=>{
											this.setState({category:['photo']})
										}}
									>
										<a className="nav-link" id="photography-tab" data-toggle="tab" href="#photography" role="tab" aria-controls="Photography" aria-selected="true">Photography</a>
									</li>
									<li className="nav-item border-bottom" onClick={()=>{
											this.setState({category:['software', 'develop', 'program']})
										}}
									>
										<a className="nav-link" id="software-tab" data-toggle="tab" href="#software" role="tab" aria-controls="Software" aria-selected="true">Software/Programming</a>
									</li>
									<li className="nav-item border-bottom" onClick={()=>{
											this.setState({category:['sport', 'athlete', 'coach', 'player']})
										}}
									>
										<a className="nav-link" id="sport-tab" data-toggle="tab" href="#sport" role="tab" aria-controls="Sport" aria-selected="true">Sports</a>
									</li>
									<li className="nav-item border-bottom" onClick={()=>{
											this.setState({category:['edit', 'write']})
										}}
									>
										<a className="nav-link" id="writing-tab" data-toggle="tab" href="#writing" role="tab" aria-controls="Writing" aria-selected="true">Writing/Editing</a>
									</li>
								</ul>

							</div>
						</div>
					</div>
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


// <div id="home-header" className="container-fluid">
// 					<div className="row justify-content-center">
// 						<div className="col-md-8 text-center mt-5">
// 							<h1 style={{color:'#00ad8e', fontWeight:'bold'}}> Discover our community</h1>
// 							<form onSubmit={this.handleSearch}>
// 								<div className="input-group my-5">
// 									<input 
// 										type="text" 
// 										name="search"
// 										value={this.state.search} 
// 										onChange={this.handleChange} 
// 										className="form-control" 
// 										aria-label="searchBar" />
// 									<div className="input-group-append">
// 										<button className="input-group-text btn btn-outline-dark" id="search-btn" type="submit">Search</button>
// 									</div>
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>