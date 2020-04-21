import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'; 
import {deleteCollection,deleteCollectionPhoto} from '../store/actions/portfolios';
import {addErrorMessage} from '../store/actions/errors';
import {toast} from 'react-toastify';
import fixImage from '../services/imageOrientation';


const PhotosPage =(props)=>{
	const notifyDelete=(msg)=>{
    	toast.warning(msg, {autoClose:2000});
    }
	const {photos,title,description,id, goBack, deleteCollectionPhoto, deleteCollection, addErrorMessage, match}= props;
	const collectionPhotos = photos.map(photo=>{
		let newImage = fixImage(photo.image);
		console.log(newImage);
		return(
			<div key={photo.imageId} className="row justify-content-center my-3">
				<div className="justify-content-center container col-md-10 col-12 photo-container" >
					<img src={newImage} alt="" className="img-fluid photo"/> 
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
									await deleteCollectionPhoto(id,photo.imageId.split('/')[1]);
									notifyDelete('Deleted photo from your collection');
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

		)})

	return (
		<div className="container mt-5">
			<div className="row justify-content-center mt-5">
				<div className="col-10">
					<button className="btn btn-outline-light mb-3 ml-2 float-right" onClick={()=> goBack()}>Go Back</button>
					{match.url==='/myportfolio' && (
						<div className="float-right">
							<Link className="btn btn-outline-warning" to={`/myportfolio/edit/collections/${id}`}><i className="fas fa-pen"></i></Link>
							<button 
								className="btn btn-outline-danger mx-2" 
								onClick={async()=>{
									try{
										await deleteCollection(id);
										notifyDelete('Deleted entire collection')
										goBack();
									}catch(err){
										return;
									}	
								}}>
								<i className="fas fa-trash"></i>
							</button>
						</div>
					)}
					<div className="float-left">
						<h2 className="my-3">{title}</h2>
						<p className="mb-5 mt-3">{description}</p>
					</div>			
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-10">
					{collectionPhotos}
				</div>
			</div>
		</div>
	)

}



export default connect(null,{deleteCollection, deleteCollectionPhoto, addErrorMessage})(PhotosPage);