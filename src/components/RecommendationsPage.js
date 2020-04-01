import React, {Component} from 'react';
import axios from 'axios';


class RecommendationsPage extends Component{
	_isMounted=false;
	constructor(props){
		super(props);
		this.state={
			recommendations:[],
			recommending:[]
		}
	}
	componentDidMount(){
		this._isMounted = true;
		this.fetchRecommendations();
	}
	componentWillUnmount(){
		this._isMounted=false
	}
	fetchRecommendations = async()=>{
		try{
			const url=`${this.props.match.url}/recommendations`
			const response = await axios.get(url);
			const {recommendations, recommending} =response.data;
			if(this._isMounted===true){
				this.setState({recommendations:[...recommendations], recommending:[...recommending]});
			}
			
		}catch(err){
			this.props.addErrorMessage(err);
			return;
		}
	}
	render(){
		const recommendationCards = this.state.recommendations.map((u)=>{	
			return(
				<div key={u._id} className="card col-sm-6 p-0 endorse-cards">
					<div className="row no-gutters">
						<div className="col-sm-3 col-2">
							<img src={u.profileImage} className="card-img user-card-img" alt=""/>
						</div>
						<div className="col-sm-9 col-10">
							<div className="card-body">
								<button 
									className="btn btn-outline-dark btn-inline float-right mx-2 stretched-link"
									onClick={()=>this.props.history.push(`/portfolios/${u.portfolio}`)}
								>
									<small>View Portfolio</small>
								</button>
								<h5 className="card-title endorse-name mt-1">{u.name}</h5>
							</div>
						</div>
					</div>					
				</div>
			)
		})
		const recommendingCards = this.state.recommending.map((u)=>{	
			return(
				<div key={u._id} className="card col-sm-6 p-0 endorse-cards">
					<div className="row no-gutters">
						<div className="col-sm-3 col-2">
							<img src={u.profileImage} className="card-img user-card-img" alt=""/>
						</div>
						<div className="col-sm-9 col-10">
							<div className="card-body">
								<button 
									className="btn btn-outline-dark btn-inline float-right mx-2 stretched-link"
									onClick={()=>this.props.history.push(`/portfolios/${u.portfolio}`)}
								>
									<small>View Portfolio</small>
								</button>
								<h5 className="card-title endorse-name mt-1">{u.name}</h5>
							</div>
						</div>
					</div>					
				</div>
			)
		})
		return(
			
			<div className="container mt-5">
				<div className="row justify-content-center">
					<div className="col-md-10">
						<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
							<li className="nav-item">
								<a 
									className="nav-link active pill-link" 
									id="pills-home-tab" 
									data-toggle="pill" 
									href="#pills-home" 
									role="tab" 
									aria-controls="pills-home" 
									aria-selected="true"
								>
									Recommended By
								</a>
							</li>
							<li className="nav-item">
								<a 
									className="nav-link pill-link" 
									id="pills-profile-tab" 
									data-toggle="pill" 
									href="#pills-profile" 
									role="tab" 
									aria-controls="pills-profile" 
									aria-selected="false"
								>
									Recommending
								</a>
							</li>
						</ul>
						<div className="tab-content" id="pills-tabContent">
							<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
								<div className="card border border-white bg-transparent  p-0">
									<div className="card-body px-3 py-0">
										<div className="row p-3">
											{recommendationCards}
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
								<div className="card border border-white bg-transparent  p-0">
									<div className="card-body px-3 py-0">
										<div className="row  p-3">
											{recommendingCards}
										</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>

			</div>

			
		)
	}
}





export default RecommendationsPage;