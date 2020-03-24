import React from 'react';
import VideosForm from '../containers/VideosForm';
import CollectionForm from '../containers/CollectionForm';

const WorkForm =(props)=>{
	return (
		<div className="row justify-content-center mt-5">
			<div className="col-md-8">
				<CollectionForm/>
				<VideosForm/>
				<button className="btn btn-success" onClick={()=>props.history.push('/myportfolio/create/timeline')}>Finish</button>
			</div>
		</div>
	)
	
}


export default WorkForm;