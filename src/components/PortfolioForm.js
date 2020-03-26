import React from 'react';
import {useRouteMatch, Route, Switch} from 'react-router-dom';
import AboutForm from '../containers/AboutForm';
import TimelineForm from '../containers/TimelineForm';
import ProfileForm from '../containers/ProfileForm';
import WorkForm from './WorkForm';


const PortfolioForm =(props)=>{
	let {path} = useRouteMatch();
	console.log("Path " + path);
	return(
		<div className='container'>
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
					<ProfileForm {...props}/>
				</Route>

			</Switch>	
			 
		</div>
	)
}



export default PortfolioForm;