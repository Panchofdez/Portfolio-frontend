import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import PortfolioNav from '../components/PortfolioNav';
import AboutPage from '../components/AboutPage';
import CommentsPage from './CommentsPage';
import TimelinePage from './TimelinePage';
import ProfilePage from '../components/ProfilePage';
import WorkPage from '../components/WorkPage';
import {getMyPortfolio, getPortfolio} from '../store/actions/portfolios';
import Loading from '../components/Loading';
import AboutForm from './AboutForm';
import TimelineForm from './TimelineForm';
import CollectionForm from './CollectionForm';
import VideosForm from './VideosForm';
import ProfileForm from './ProfileForm';
import withVideoData from '../hocs/withVideoData';
import withCollectionData from '../hocs/withCollectionData';
import withPostData from '../hocs/withPostData';

class PortfolioPage extends Component{
	componentDidMount(){
		if(this.props.history.location.pathname.split("/")[1]==='myportfolio'){
			this.fetchMyPortfolio();
		}else{
			this.fetchPortfolio();
		}
		
	}
	async fetchMyPortfolio(){
		try{
			await this.props.getMyPortfolio();
		}catch(err){
			return;
		}
	};
	async fetchPortfolio(){
		try{
			const id = this.props.history.location.pathname.split('/')[2];
			await this.props.getPortfolio(id);
		}catch(err){
			return;
		}
	}
	render(){
		const {portfolio} = this.props;
		if(!portfolio){
			return (<div className="justify-content-center align-items-center"><Loading/></div>);
		}
		const {url} = this.props.match;
		return (
			<div>
				<PortfolioNav name={portfolio.name} image={portfolio.profileImage} {...this.props}/>			
				<Switch>				
					<Route exact path={`${url}/about`}>
						<AboutPage 
							about={portfolio.about} 
							statement={portfolio.statement} 
							image={portfolio.headerImage}
							{...this.props}
						/>
					</Route>
					<Route exact path={`${url}/profile`}>
						<ProfilePage 
							location={portfolio.location}
							type={portfolio.type}
							birthday={portfolio.birthday}
							profileImage={portfolio.profileImage}
							url={url}
						/>
					</Route>
					<Route exact path={`${url}/timeline`}>
						<TimelinePage timeline={portfolio.timeline} {...this.props}/>
					</Route>
					<Route exact path={`${url}/work`}>
						<WorkPage collections={portfolio.collections} videos={portfolio.videos} {...this.props} />
					</Route>
					<Route exact path={`${url}/comments`}>
						<CommentsPage comments={portfolio.comments} {...this.props}/>
					</Route>
					<Route exact path='/myportfolio/edit/about'>
						<AboutForm {...this.props}/>
					</Route>
					<Route exact path='/myportfolio/edit/timeline'>
						<TimelineForm {...this.props}/>
					</Route>
					<Route exact path='/myportfolio/edit/collections'>
						<CollectionForm {...this.props}/>
					</Route>
					<Route exact path='/myportfolio/edit/videos'>
						<VideosForm {...this.props}/>
					</Route>
					<Route path='/myportfolio/edit/videos/:id' component={withVideoData(VideosForm)}/>
					<Route path='/myportfolio/edit/collections/:id' component={withCollectionData(CollectionForm)}/>
					<Route path='/myportfolio/edit/timeline/:id' component={withPostData(TimelineForm)}/>
					<Route exact path='/myportfolio/edit/profile'>
						<ProfileForm {...this.props}/>
					</Route>
					<Route path={`${url}`}>
						<AboutPage 
							about={portfolio.about} 
							statement={portfolio.statement} 
							image={portfolio.headerImage}/>
					</Route>

				</Switch>	
			</div>
		)	
	}
}
function mapStateToProps(state){
	return {
		portfolio:state.showPortfolio.portfolio

	}
}

export default withRouter(connect(mapStateToProps, {getMyPortfolio, getPortfolio})(PortfolioPage));