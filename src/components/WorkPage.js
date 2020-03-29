import React , {Component} from 'react';
import PhotosPage from './PhotosPage';
import VideosPage from './VideosPage';

class WorkPage extends Component{
	constructor(props){
		super(props);
		this.state={
			photos:[],
			title:"",
			description:"",
			id:""
		}
		this.handlePress=this.handlePress.bind(this);
		this.backToWork=this.backToWork.bind(this);
	}
	componentDidMount() {
	  window.scrollTo(0, 0)
	}
	handlePress(photos, title, description, id){
		this.setState({photos,title, description, id});
	}
	backToWork(){
		this.setState({photos:[],title:"", description:""});
	}
	render(){
		const collections = this.props.collections.map(collection =>{
			return (
				<div key={collection._id} className="col-lg-6 col-12  justify-content-center album">
					<img 
						className="img-fluid my-3 rounded collection" 
						src={collection.photos[0].image} 
						onClick={()=>this.handlePress(collection.photos,collection.title, collection.description, collection._id)} 
						alt=""
					/>
					<h4 className='text-center mb-3 px-5'>{collection.title}</h4>
				</div>
			)
		})
		if(this.state.photos.length===0){
			return(
				<div className="container my-3 px-0">
					<div className="row justify-content-center mb-5">
						{collections}
					</div>				
					<VideosPage videos={this.props.videos} {...this.props}/>
				</div>
			)
		}else{
			return(
				<PhotosPage 
					photos={this.state.photos}
					title={this.state.title}
					description={this.state.description} 
					id={this.state.id}
					goBack={this.backToWork}
					{...this.props}

				/>
			)
		}
	}
} 

export default WorkPage;