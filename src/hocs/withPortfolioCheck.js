import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getMyPortfolio} from '../store/actions/portfolios';
import {addErrorMessage} from '../store/actions/errors';



export default function withPortfolioCheck(WrappedComponent){
	class AddCheck extends Component{
		componentDidMount(){
			const checkPortfolioOwnership =async ()=>{
				try{
					await this.props.getMyPortfolio();
				}catch(err){
					console.log(err);
					return; 
				}
			}
			checkPortfolioOwnership();

		};
		render(){
			console.log(this.props.portfolio);
			if(this.props.portfolio){
				this.props.history.push('/myportfolio');

			}
			return <WrappedComponent {...this.props}/>
		}
	}
	function mapStateToProps(state){
		return {
			portfolio:state.showPortfolio.portfolio
		}
	
	}

	return connect(mapStateToProps, {getMyPortfolio, addErrorMessage})(AddCheck)
}