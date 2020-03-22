import {addError} from './errors';
import axios from 'axios';

const loadPortfolios = (portfolios) =>{
	return {
		type:'LOAD_PORTFOLIOS',
		portfolios
	}
}


const showPortfolio = (portfolio) =>{
	return {
		type:'SHOW_PORTFOLIO',
		portfolio
	}
}


export const fetchPortfolios = ()=>{
	return async dispatch =>{
		try{
			const response =await axios.get('/portfolios');
			dispatch(loadPortfolios(response.data))
		}catch(err){
			dispatch(addError(err.response.data.error));
		}
	}		
}


export const getPortfolio = (id)=>{
	return async dispatch =>{
		try{
			const response = await axios.get(`/portfolios/${id}`);
			dispatch(showPortfolio(response.data))
		}catch(err){
			dispatch(addError(err.response.data.error));
		}
	}
}


export const createAboutPage = (formData) =>{
	return async dispatch =>{
		try{
			const response = await axios.post('/myportfolio/about', formData);
			console.log(response.data);
			dispatch(showPortfolio(response.data));
		}catch(err){
			dispatch(addError(err.response.data.error))
			throw Error(err);
		}
		
	
	}
}

export const getMyPortfolio = () =>{
	return async dispatch =>{
		try{
			const response = await axios.get('/myprofile');
			dispatch(showPortfolio(response.data))
		}catch(err){
			dispatch(addError(err.response.data.error));
		}
	}
}