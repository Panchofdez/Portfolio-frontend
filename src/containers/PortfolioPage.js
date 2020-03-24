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
		const {portfolio, history} = this.props;
		if(!portfolio){
			return (<Loading/>);
		}
		const {url} = this.props.match;
		return (
			<div>
				<PortfolioNav name={portfolio.name} />			
				<Switch>				
					<Route exact path={`${url}/about`}>
						<AboutPage 
							about={portfolio.about} 
							statement={portfolio.statement} 
							image={portfolio.headerImage}/>
					</Route>
					<Route exact path={`${url}/profile`}>
						<ProfilePage 
							location={portfolio.location}
							type={portfolio.type}
							birthday={portfolio.birthday}
							profileImage={portfolio.profileImage}
						/>
					</Route>
					<Route exact path={`${url}/timeline`}>
						<TimelinePage timeline={portfolio.timeline}/>
					</Route>
					<Route exact path={`${url}/work`}>
						<WorkPage collections={portfolio.collections} videos={portfolio.videos} />
					</Route>
					<Route exact path={`${url}/comments`}>
						<CommentsPage comments={portfolio.comments}/>
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