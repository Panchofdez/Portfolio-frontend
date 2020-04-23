import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import fixImage from '../services/imageOrientation';
import {toast} from 'react-toastify';


const Carousel = ({collection, deleteCollectionPhoto, addErrorMessage, history})=>{
	let match = useRouteMatch();
	const notifyDelete=(msg)=>{
    	toast.warning(msg, {autoClose:2000});
    }
	let photos = collection.photos.map((photo, index)=>{
		let newImage = fixImage(photo.image);
		return (
			<div key={photo._id} className={index===0 ? "carousel-item active" : "carousel-item"}  >
				<img src={newImage} className="d-block w-100 img-fluid rounded-top carousel-photo"  alt="..."/>
				{match.path ==='/myportfolio/work' && (
					<div className="carousel-caption d-block">
			        	<button 
			        		className="bg-transparent" 
			        		style={{borderWidth:'0px', color:'red'}} 
			        		onClick={async()=>{
			        			try{
			        				if(collection.photos.length<=1){
			        					addErrorMessage('A collection must have at least one photo');
			        					return;
			        				}
			        				await deleteCollectionPhoto(collection._id, photo.imageId.split('/')[1]);
			        				notifyDelete('Deleted photo from collection');
			        				history.push('/myportfolio/work');
			        			}catch(err){
			        				console.log(err);
			        				return;
			        			}

			        		}}
			        	>
			        		Delete Photo
			        	</button>
			    	</div>
			    )}
			</div>
		)
	})

	let indicators = collection.photos.map((photo, index)=>{
		return (
			<li key={photo._id} data-target={`#carousel-${collection._id}`} data-slide-to={index} className={index===0?"active": ""}></li>
		)
	})
	return (

		<div id={`carousel-${collection._id}`} className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
				{indicators}
			</ol>
			<div className="carousel-inner">
				{photos}
			</div>
			<a className="carousel-control-prev" href={`#carousel-${collection._id}`} role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href={`#carousel-${collection._id}`} role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
		
	)
}



export default Carousel;