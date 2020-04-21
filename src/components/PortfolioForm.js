import React from 'react';
import {useRouteMatch, Route, Switch} from 'react-router-dom';
import AboutForm from '../containers/AboutForm';
import TimelineForm from '../containers/TimelineForm';
import ProfileForm from '../containers/ProfileForm';
import WorkForm from './WorkForm';
import withPortfolioCheck from '../hocs/withPortfolioCheck';



const PortfolioForm =(props)=>{
	let {path} = useRouteMatch();
	console.log(path);
	return(
		<div className='container'>
			<Switch>				
				<Route exact path={`${path}/about`}>
					<AboutForm {...props}/>
				</Route>
				<Route exact path={`${path}/profile`} component={withPortfolioCheck(ProfileForm)}/>
				<Route exact path={`${path}/timeline`}>
					<TimelineForm {...props}/>
				</Route>
				<Route exact path={`${path}/work`}>
					<WorkForm {...props} path={path}/>
				</Route>
				<Route path={path} component={withPortfolioCheck(ProfileForm)}/>
				

			</Switch>	
			 
		</div>
	)
	
};



export default PortfolioForm;