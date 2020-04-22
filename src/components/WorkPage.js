import React, {useEffect} from 'react';
import PhotosPage from './PhotosPage';
import VideosPage from './VideosPage';
import Carousel from './Carousel';
import {Link, useRouteMatch} from 'react-router-dom';


const  WorkPage = (props)=>{
	useEffect(()=>{
	  window.scrollTo(0, 0)
	},[]);
	let match = useRouteMatch();
	const {collections, videos} = props;
	const collectionsArr = collections.map(collection =>{
		return (
			<div  key={collection._id}>
				<Carousel collection={collection}/>
				<div className="p-5 rounded-bottom mb-5" style={{backgroundColor:'#fff', color:'#161716'}}>
					<h4>{collection.title}</h4>
					<p>{collection.description}</p>
				</div>
			</div>
		)
	})
	return(

		<div className="p-3">
			{match.path ==='/myportfolio' && (
				<div className="d-flex flex-row justify-content-between">
					<h2 className="mt-3 mb-4">Work</h2>
					<div>
						<Link className="btn button mt-3" to="/myportfolio/edit/work"><i className="fas fa-pen"></i></Link>
					</div>
				</div>
			)}
			{collectionsArr}
			<VideosPage videos={videos} {...props}/>
		</div>

			
	)
} 

export default WorkPage;