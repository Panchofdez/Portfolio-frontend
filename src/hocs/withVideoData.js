import React,{Component} from 'react';
import {connect} from 'react-redux';



export default function withVideoData(WrappedComponent){
	class AddData extends Component{
		render(){
			const arr= this.props.history.location.pathname.split("/");
			const id = arr[arr.length-1];
			const video = this.props.portfolio.videos.find((v)=>v._id===id);
			return <WrappedComponent {...this.props} video={video}/>
		}
	}
	function mapStateToProps(state){
		return {
			portfolio:state.showPortfolio.portfolio
		}
	
	}

	return connect(mapStateToProps)(AddData)
}