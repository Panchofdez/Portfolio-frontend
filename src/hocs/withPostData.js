import React,{Component} from 'react';
import {connect} from 'react-redux';



export default function withPostData(WrappedComponent){
	class AddData extends Component{
		render(){
			const arr= this.props.history.location.pathname.split("/");
			const id = arr[arr.length-1];
			const post = this.props.portfolio.timeline.find((p)=>p._id==id);
			return <WrappedComponent {...this.props} post={post}/>
		}
	}
	function mapStateToProps(state){
		return {
			portfolio:state.showPortfolio.portfolio
		}
	
	}

	return connect(mapStateToProps)(AddData)
}