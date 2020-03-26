import React from 'react';
import VideosForm from '../containers/VideosForm';
import CollectionForm from '../containers/CollectionForm';

const WorkForm =(props)=>{
	return (
		<div>
			<div className="row justify-content-center mt-5">
				<div className="col-md-8">
					<p className="float-right ">Step 3 of 4</p>
					<h1 className="my-3">Your Work Page</h1>
					<h5 className="my-3">This is where you can showcase your work or projects through collections of photos or videos</h5>
				</div>
			</div>
			<CollectionForm {...props}/>
			<VideosForm {...props}/>
			<div className="row justify-content-center mt-5">
				<div className="col-md-8">
					<button className="btn btn-success form-control" onClick={()=>props.history.push('/myportfolio/create/timeline')}>Next</button>
				</div>
			</div>
		</div>
	)
	
}


export default WorkForm;