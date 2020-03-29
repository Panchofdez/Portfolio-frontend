import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'; 
import {deleteCollection,deleteCollectionPhoto} from '../store/actions/portfolios';
import {addErrorMessage} from '../store/actions/errors';


const PhotosPage =(props)=>{
	const {photos,title,description,id, goBack, deleteCollectionPhoto, deleteCollection, addErrorMessage, match}= props;
	const collectionPhotos = photos.map(photo=>(
			<div key={photo.imageId} className="row justify-content-center my-3">
				<div className="justify-content-center container col-md-10 col-12 photo-container" >
					<img src={photo.image} alt="" className="img-fluid photo"/> 
				</div>
				<div className="col-md-10">
					{match.url==='/myportfolio' && (
						<button 
							className="btn btn-outline-danger float-right my-3 delete-photo" 
							onClick={async()=>{
								if(photos.length===1){
									addErrorMessage("Your collection must have at least one photo");
									return;
								}
								try{
									await deleteCollectionPhoto(id,photo.imageId);
									goBack();
								}catch(err){
									return;
								}	
							}}>
							<i className="fas fa-trash"></i>
						</button>

					)}
				</div>
			</div>
		))

	return (
		<div className="container mt-5">
			<div className="row justify-content-center mt-5">
				<div className="col-10 text-justify">
					<button className="btn btn-outline-light mb-3" onClick={()=> goBack()}>Go Back</button>
					{match.url==='/myportfolio' && (
						<React.Fragment>
							<Link className="btn btn-outline-warning float-right" to={`/myportfolio/edit/collections/${id}`}><i className="fas fa-pen"></i></Link>
							<button 
								className="btn btn-outline-danger float-right mx-2" 
								onClick={async()=>{
									try{
										await deleteCollection(id);
										goBack();
									}catch(err){
										return;
									}	
								}}>
								<i className="fas fa-trash"></i>
							</button>
						</React.Fragment>
					)}
					
					<h1 className="my-3">{title}</h1>
					<p className="mb-5 mt-3">{description}</p>
					{collectionPhotos}
				</div>
			</div>
		</div>
	)

}



export default connect(null,{deleteCollection, deleteCollectionPhoto, addErrorMessage})(PhotosPage);