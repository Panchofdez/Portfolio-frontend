import React from 'react';
import {connect} from 'react-redux';
import {useRouteMatch, Route, Switch} from 'react-router-dom';
import AboutForm from '../components/AboutForm';
import TimelineForm from '../components/TimelineForm';
import ProfileForm from '../components/ProfileForm';
import WorkForm from '../components/WorkForm';
import PortfolioNav from '../components/PortfolioNav';

const PortfolioForm =(props)=>{
	let {path} = useRouteMatch();
	return(
		<div className='container'>
			<PortfolioNav/>
			<Switch>				
				<Route exact path={`${path}/about`}>
					<AboutForm {...props}/>
				</Route>
				<Route exact path={`${path}/profile`}>
					<ProfileForm {...props}/>
				</Route>
				<Route exact path={`${path}/timeline`}>
					<TimelineForm {...props}/>
				</Route>
				<Route exact path={`${path}/work`}>
					<WorkForm {...props}/>
				</Route>
				<Route path={path}>
					<AboutForm {...props}/>
				</Route>

			</Switch>	
			 
		</div>
	)
}



export default connect()(PortfolioForm);