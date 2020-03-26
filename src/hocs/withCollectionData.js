import React,{Component} from 'react';
import {connect} from 'react-redux';



export default function withCollectionData(WrappedComponent){
	class AddData extends Component{
		render(){
			const arr= this.props.history.location.pathname.split("/");
			const id = arr[arr.length-1];
			const collection = this.props.portfolio.collections.find((c)=>c._id==id);
			return <WrappedComponent {...this.props} collection={collection}/>
		}
	}
	function mapStateToProps(state){
		return {
			portfolio:state.showPortfolio.portfolio
		}
	
	}

	return connect(mapStateToProps)(AddData)
}