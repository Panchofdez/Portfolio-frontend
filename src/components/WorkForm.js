import React, {useEffect} from 'react';
import VideosForm from '../containers/VideosForm';
import CollectionForm from '../containers/CollectionForm';

const WorkForm =(props)=>{
	useEffect(() => {
	  window.scrollTo(0, 0)
	}, []);
	console.log(props.location.pathname);
	return (
		<div className="pb-5">
			<div className="row justify-content-center mt-5">
				<div className="col-md-8 col-10">
					<h2 className="my-3">Showcase your work or projects through collections of photos and/or videos</h2>
				</div>				
			</div>
			<CollectionForm {...props}/>
			<VideosForm {...props}/>
			<div className="row justify-content-center mt-5">
				<div className="col-md-8 col-10">
					<button className="btn button form-control" onClick={()=>props.history.push('/myportfolio')}>Save Changes</button>
				</div>
			</div>
		</div>
	)
	
}


export default WorkForm;