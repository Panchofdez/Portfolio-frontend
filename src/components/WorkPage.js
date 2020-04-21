import React , {Component} from 'react';
import PhotosPage from './PhotosPage';
import VideosPage from './VideosPage';
import Carousel from './Carousel';
import {Link} from 'react-router-dom';


class WorkPage extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount() {
	  window.scrollTo(0, 0)
	}
	render(){
		const collections = this.props.collections.map(collection =>{
			return (
				<div  key={collection._id}>
					<Carousel collection={collection}/>
					<div className="p-5 rounded-bottom mb-5" style={{backgroundColor:'#fff', color:'#161716'}}>
						<h4>{collection.title}</h4>
						<p>{collection.description}</p>
					</div>
				</div>
			)
		})

		return(

			<div className="p-3">
				<div className="d-flex flex-row justify-content-between">
					<h2 className="mt-3 mb-4">Work</h2>
					<div>
						<Link className="btn button mt-3" to="/myportfolio/edit/work"><i className="fas fa-pen"></i></Link>
					</div>
				</div>
				{collections}
				<VideosPage videos={this.props.videos} {...this.props}/>
			</div>

				
		)
	}
} 

export default WorkPage;