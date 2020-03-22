import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import PortfolioNav from '../components/PortfolioNav';
import AboutPage from '../components/AboutPage';
import CommentsPage from './CommentsPage';
import TimelinePage from './TimelinePage';
import ProfilePage from '../components/ProfilePage';
import WorkPage from '../components/WorkPage';
import VideosPage from '../components/VideosPage';

const PortfolioPage = (props) =>{
	const {portfolio, user} = props;
	let { path} = useRouteMatch();
	return (
		<div>
			<PortfolioNav name={portfolio.name} image={user.profileImage}/>
			
			<Switch>				
				<Route exact path={`${path}/about`}>
					<AboutPage about={portfolio.about} statement={portfolio.statement} image={portfolio.headerImage}/>
				</Route>
				<Route exact path={`${path}/profile`}>
					<ProfilePage user={user}/>
				</Route>
				<Route exact path={`${path}/timeline`}>
					<TimelinePage timeline={portfolio.timeline}/>
				</Route>
				<Route exact path={`${path}/work`}>
					<WorkPage work={portfolio.work} />
				</Route>
				<Route exact path={`${path}/comments`}>
					<CommentsPage comments={portfolio.comments}/>
				</Route>
				<Route path={path}>
					<AboutPage about={portfolio.about} statement={portfolio.statement} image={portfolio.headerImage}/>
				</Route>

			</Switch>	
		</div>
	)	
}
function mapStateToProps(state){
	return {
		portfolio:state.showPortfolio.portfolio,
		user:state.showPortfolio.user

	}
}

export default connect(mapStateToProps)(PortfolioPage);