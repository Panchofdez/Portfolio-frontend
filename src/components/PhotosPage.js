import React from 'react';
import {withRouter} from 'react-router-dom'; 

const PhotosPage =(props)=>{
	const {photos,title,description, goBack}= props;
	const collectionPhotos = photos.map(photo=>(
			<div key={photo.imageId} className="my-3">
				<img src={photo.image} alt="" className="img-fluid"/>
			</div>
		))

	return (
		<div className="container mt-5">
			<button className="btn btn-outline-light mb-3" onClick={()=> goBack()}>Go Back</button>
			<div className="row justify-content-center mt-5">
				<div className="col-md-8">
					<h1>{title}</h1>
					<p>{description}</p>
					{collectionPhotos}
				</div>
			</div>
		</div>
	)

}



export default withRouter(PhotosPage);