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
import SkillsForm from '../containers/SkillsForm';



const PortfolioForm =(props)=>{
	let {path} = useRouteMatch();
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
				<Route exact path={`${path}/skills`}>
					<SkillsForm {...props}/>
				</Route>
				<Route exact path={`${path}/contact`}>
					<ContactInfoForm {...props}/>
				</Route>
				<Route path={`${path}/videos/:id`}>
					<VideosForm {...props}/>
				</Route>
				<Route path={`${path}/collections/:id`}>
					<CollectionForm {...props}/>
				</Route>
				<Route path={`${path}/timeline/:id`}>
					<TimelineForm {...props}/>
				</Route>

				<Route path={path} component={withPortfolioCheck(ProfileForm)}/>
				

			</Switch>	
			 
		</div>
	)
	
};



export default PortfolioForm;