import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import AboutPage from '../components/AboutPage';
import CommentsPage from './CommentsPage';
import TimelinePage from './TimelinePage';
import WorkPage from '../components/WorkPage';
import RecommendationsPage from '../components/RecommendationsPage';
import PortfolioHeader from '../components/PortfolioHeader';
import Loading from '../components/Loading';
import{addErrorMessage} from '../store/actions/errors';
import PortfolioNav from '../components/PortfolioNav';
import {getMyPortfolio, getPortfolio, clearPortfolio, recommend, unRecommend} from '../store/actions/portfolios';
import fixImage from '../services/imageOrientation';



class PortfolioPage extends Component{
	constructor(props){
		super(props);
		this.state={
			recommending:false
		}
	}
	componentDidMount(){
		console.log('mounted')
		if(this.props.history.location.pathname.split("/")[1]==='myportfolio'){
			this.fetchMyPortfolio();
		}else{
			this.fetchPortfolio();
		}
		
	}
	componentWillUnmount(){
		this.props.clearPortfolio();
	}
	fetchMyPortfolio= async()=>{
		try{
			await this.props.getMyPortfolio();
			if(!this.props.portfolio){
				this.props.history.push('/myportfolio/create');
			}
		}catch(err){
			return;
		}
	};
	fetchPortfolio= async()=>{
		try{
			const id = this.props.location.pathname.split('/')[2];
			await this.props.getPortfolio(id);
			this.checkRecommendation();
		}catch(err){
			return;
		}
	};
	checkRecommendation = ()=>{
		const isRecommending = this.props.portfolio.recommendations.find((id)=>id===this.props.user.userId);
		if(isRecommending){
			this.setState({recommending:true})
		}else{
			return;
		}
	};	
	setRecommendationState = ()=>{
		this.setState({recommending:!this.state.recommending});
	}
	render(){
		const {portfolio, recommend, unRecommend, addErrorMessage, match, location} = this.props;
		let style ="";
		let profilePic="";
		if(portfolio){
			const newImage=fixImage(portfolio.headerImage);
			style=`url(${newImage}) center center / cover no-repeat`;
			profilePic =fixImage(portfolio.profileImage);
		}
		if(!portfolio){
			return (<Loading/>);
		}else{
			return (
				<div className="pb-5">
					<div className="container">
						<div 
							className="row justify-content-start align-items-end mx-0 rounded-bottom header-image"
							style={{
								background: style,
								
							}}
						>			
							
						</div>
					</div>
					<div className="container">
						<div className="row mx-sm-0 mx-0">
							<div className="col-md-3 p-0 pt-3 pr-0 pr-md-3 pl-0">
								<div className="row d-flex">
									<div id="profile-pic" className="col-md-12 col-4">
										<img src={profilePic} alt="" className="rounded" style={{overflow:'hidden', height:'100%', width : '100%'}}/>
									</div>
									<div className="col-md-12 col-8">
										<PortfolioNav/>
									</div>
									
								</div>
								
							</div>
							<div className="col-md-9 mt-3 p-0 pl-md-3 pl-0"> 
								<PortfolioHeader
									portfolio={portfolio}
									recommending={this.state.recommending}
									setRecommendationState={this.setRecommendationState}
									recommend={recommend}
									unRecommend={unRecommend}
									location={location}
								/>
							    <Switch>				
									<Route exact path={`${match.path}/about`}>
										<AboutPage 
											portfolio={portfolio}
											{...this.props}
										/>
									</Route>
									<Route exact path={`${match.url}/work`}>
										<WorkPage collections={portfolio.collections} videos={portfolio.videos} {...this.props} />
									</Route>
									<Route exact path={`${match.url}/timeline`}>
										<TimelinePage timeline={portfolio.timeline} {...this.props}/>
									</Route>
									<Route exact path={`${match.url}/comments`}>
										<CommentsPage comments={portfolio.comments} {...this.props}/>
									</Route>
									<Route exact path={`${match.url}/recommendations`}>
										<RecommendationsPage addErrorMessage={addErrorMessage} id={portfolio._id} {...this.props}/>
									</Route>
									<Route path={match.url}>
										<Redirect to={`${match.url}/about`}/>
									</Route>
								</Switch>	
								
							</div>
						</div>
					</div>
				</div>
			)	
		}
	}
};
function mapStateToProps(state){
	return {
		portfolio:state.showPortfolio.portfolio,
		user:state.currentUser.user
	}
}

export default withRouter(connect(mapStateToProps, {getMyPortfolio, getPortfolio, clearPortfolio, recommend, unRecommend, addErrorMessage})(PortfolioPage));




// <Switch>	
// <Route exact path='/myportfolio/edit/profile'>
// 	<ProfileForm {...this.props} portfolio={portfolio}/>
// </Route>
// <Route exact path='/myportfolio/edit/contactinfo'>
// 	<ContactInfoForm portfolio={portfolio} {...this.props}/>
// </Route>
// <Route exact path='/myportfolio/edit/about'>
// 	<AboutForm 
// 		{...this.props} 
// 		portfolio={portfolio}
// 	/>
// </Route>
// <Route exact path='/myportfolio/edit/timeline'>
// 	<TimelineForm {...this.props}/>
// </Route>
// <Route exact path='/myportfolio/edit/work'>
// 	<WorkForm {...this.props}/>
// </Route>



// </Switch>	