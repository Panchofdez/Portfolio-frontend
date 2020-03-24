import React from 'react';
import {useRouteMatch, Route, Switch} from 'react-router-dom';
import AboutForm from '../containers/AboutForm';
import TimelineForm from '../containers/TimelineForm';
import ProfileForm from '../components/ProfileForm';
import WorkForm from './WorkForm';
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



export default PortfolioForm;