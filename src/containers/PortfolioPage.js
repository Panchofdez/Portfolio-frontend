import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import AboutPage from '../components/AboutPage';
import CommentsPage from './CommentsPage';
import TimelinePage from './TimelinePage';
import ProfilePage from '../components/ProfilePage';
import WorkPage from '../components/WorkPage';
import RecommendationsPage from '../components/RecommendationsPage';
import PortfolioHeader from '../components/PortfolioHeader';
import Loading from '../components/Loading';
import AboutForm from './AboutForm';
import TimelineForm from './TimelineForm';
import WorkForm from '../components/WorkForm';
import CollectionForm from './CollectionForm';
import VideosForm from './VideosForm';
import ProfileForm from './ProfileForm';
import ContactInfoForm from './ContactInfoForm';
import withVideoData from '../hocs/withVideoData';
import withCollectionData from '../hocs/withCollectionData';
import withPostData from '../hocs/withPostData';
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
		if(this.props.history.location.pathname.split("/")[1]==='myportfolio'){
			this.fetchMyPortfolio();
		}else{
			this.fetchPortfolio();
		}
		
	}
	componentWillUnmount(){
		this.props.clearPortfolio();
	}
	// componentDidUpdate(prevProps , prevState){
		
	// 	if(prevProps.location.pathname !== this.props.location.pathname){
	// 		console.log('update');
	// 		if(this.props.location.pathname.split("/")[1]==='myportfolio'){
	// 			this.fetchMyPortfolio();
	// 		}else{
	// 			this.fetchPortfolio();
	// 		}
	// 	}
		
	// }
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
		const {portfolio, recommend, unRecommend, addErrorMessage, location} = this.props;
		const {url} = this.props.match;
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
					<div className="container p-0">
						<div 
							id="header-image"
							className="row justify-content-start align-items-end mx-0 rounded"
							style={{
								background: style,
								
							}}
						>			
							
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-md-3 p-0 pt-3 pr-3 pl-md-0 pl-3">
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
								<div className="tab-content" id="v-pills-tabContent">
							      <div className="tab-pane fade show active" id="about-page" role="tabpanel" aria-labelledby="v-pills-about-tab">
							      	<AboutPage 
										portfolio={portfolio}
										{...this.props}
									/>
							      </div>
							      <div className="tab-pane fade" id="work-page" role="tabpanel" aria-labelledby="v-pills-work-tab">
							      	<WorkPage collections={portfolio.collections} videos={portfolio.videos} {...this.props} />
							      </div>
							      <div className="tab-pane fade" id="timeline-page" role="tabpanel" aria-labelledby="v-pills-timeline-tab">
							      	<TimelinePage timeline={portfolio.timeline} {...this.props}/>
							      </div>
							      <div className="tab-pane fade" id="comments-page" role="tabpanel" aria-labelledby="v-pills-comments-tab">
							      	<CommentsPage comments={portfolio.comments} {...this.props}/>
							      </div>
							      <div className="tab-pane fade" id="recommendations-page" role="tabpanel" aria-labelledby="v-pills-recommendations-tab">
							      	<RecommendationsPage addErrorMessage={addErrorMessage} {...this.props}/>
							      </div>
							    </div>
							
								
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
// <Route path='/myportfolio/edit/videos/:id' component={withVideoData(VideosForm)}/>
// <Route path='/myportfolio/edit/collections/:id' component={withCollectionData(CollectionForm)}/>
// <Route path='/myportfolio/edit/timeline/:id' component={withPostData(TimelineForm)}/>


// </Switch>	