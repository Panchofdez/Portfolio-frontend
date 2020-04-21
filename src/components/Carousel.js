import React from 'react';
import fixImage from '../services/imageOrientation';


const Carousel = ({collection})=>{
	let photos = collection.photos.map((photo, index)=>{
		let newImage = fixImage(photo.image);
		return (
			<div key={photo._id} className={index===0 ? "carousel-item active" : "carousel-item"}  >
				<img src={newImage} className="d-block w-100 img-fluid rounded-top carousel-photo"  alt="..."/>
			</div>
		)
	})

	let indicators = collection.photos.map((photo, index)=>{
		return (
			<li key={photo._id} data-target="#carouselExampleIndicators" data-slide-to={index} className={index===0?"active": ""}></li>
		)
	})
	return (

		<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
				{indicators}
			</ol>
			<div className="carousel-inner">
				{photos}
			</div>
			<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
		
	)
}



export default Carousel;