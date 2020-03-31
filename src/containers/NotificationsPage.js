import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addErrorMessage} from '../store/actions/errors';
import axios from 'axios';
import Moment from 'react-moment';

class NotificationsPage extends Component{
	constructor(props){
		super(props);
		this.state={
			notifications:[]
		}
	}
	componentDidMount(){
		this.fetchNotifications();
	}
	fetchNotifications=async()=>{
		try{
			const response = await axios.get('/notifications');
			console.log(response.data);
			this.setState({notifications:response.data})
		}catch(err){
			this.props.addErrorMessage(err);
			return;
		}
	};
	deleteNotification= async(id)=>{
		try{
			const response = await axios.delete(`/notifications/${id}`);
			console.log(response.data);
			this.setState({notifications:response.data});
		}catch(err){
			this.props.addErrorMessage(err);
			return;
		}
	}
	render(){
		const notifications = this.state.notifications.map((n)=>(
			<div key={n._id} className="card col-md-12 p-0 mb-3">
				<div className="row no-gutters">
					<div className="col-2">
						<img src={n.profileImage} className="card-img img-fluid" alt=""/>
					</div>
					<div className="col-10">
						<div className="card-body">
							<button 
								className="btn btn-outline-danger float-right"
								onClick={()=>this.deleteNotification(n._id)}
							>
								<i className="fas fa-trash"></i>
							</button>
							<button 
								className="btn btn-outline-dark float-right mx-2"
								onClick={()=>this.props.history.push(`/portfolios/${n.portfolio}`)}
							>
								View Portfolio
							</button>
							<h5 className="card-title">{n.text}</h5>
							<p className="card-text">
								<small className="text-muted">
									<Moment fromNow>
            							{n.createdAt}
        							</Moment>
        						</small>
        					</p>
							
						</div>
					</div>
				</div>
					
			</div>
		));
		return (
			<div className="container mt-5">
				<div className="row justify-content-center">
					<div className="col-md-10">
						<h2 className="my-3">Notifications</h2>
						<div className="card border border-white bg-transparent p-0">
							<div className="card-body p-3">
								<div className="row justify-content-center p-3">
									{notifications}
								</div>
							</div>
						</div>
					</div>
				</div>		
			</div>
		);
	}
}


export default connect(null, {addErrorMessage})(NotificationsPage);