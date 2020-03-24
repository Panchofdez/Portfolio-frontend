import React , {Component} from 'react';
import PhotosPage from './PhotosPage';
import VideosPage from './VideosPage';

class WorkPage extends Component{
	constructor(props){
		super(props);
		this.state={
			photos:[],
			title:"",
			description:""
		}
		this.handlePress=this.handlePress.bind(this);
		this.backToWork=this.backToWork.bind(this);
	}
	handlePress(photos, title, description){
		this.setState({photos,title, description});
	}
	backToWork(){
		this.setState({photos:[],title:"", description:""});
	}
	render(){
		const collections = this.props.collections.map(collection =>{
			return (
				<div key={collection._id} className="col-md-6 album">
					<img 
						className="img-fluid my-3" 
						src={collection.photos[0].image} 
						onClick={()=>this.handlePress(collection.photos,collection.title, collection.description)} 
						alt=""
					/>
					<h5 className='text-center mb-3'>{collection.title}</h5>
				</div>
			)
		})
		if(this.state.photos.length===0){
			return(
				<div className="container my-5">
					<h1 className="text-center">Work</h1>
					<div className="row">
						{collections}
					</div>
					<VideosPage videos={this.props.videos}/>
				</div>
			)
		}else{
			return(
				<PhotosPage 
					photos={this.state.photos}
					title={this.state.title}
					description={this.state.description} 
					goBack={this.backToWork}
				/>
			)
		}
	}
} 

export default WorkPage;