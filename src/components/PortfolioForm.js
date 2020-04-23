import React from 'react';
import {useRouteMatch, Route, Switch} from 'react-router-dom';
import AboutForm from '../containers/AboutForm';
import TimelineForm from '../containers/TimelineForm';
import ProfileForm from '../containers/ProfileForm';
import WorkForm from './WorkForm';
import withPortfolioCheck from '../hocs/withPortfolioCheck';
import CollectionForm from '../containers/CollectionForm';
import VideosForm from '../containers/VideosForm';
import ContactInfoForm from '../containers/ContactInfoForm';



const PortfolioForm =(props)=>{
	let {path} = useRouteMatch();
	console.log(path);
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
					<WorkForm {...props} path={path}/>
				</Route>
				<Route path='/myportfolio/edit/videos/:id'>
					<VideosForm {...props}/>
				</Route>
				<Route path='/myportfolio/edit/collections/:id'>
					<CollectionForm {...props}/>
				</Route>
				<Route path='/myportfolio/edit/timeline/:id'>
					<TimelineForm {...props}/>
				</Route>
				<Route path={path} component={withPortfolioCheck(ProfileForm)}/>
				

			</Switch>	
			 
		</div>
	)
	
};



export default PortfolioForm;