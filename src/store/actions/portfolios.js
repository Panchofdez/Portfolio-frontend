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
			throw Error(err);
		}
	}		
}


export const fetchPortfolio = (id)=>{
	return async dispatch =>{
		try{
			const response = await axios.get(`/portfolios/${id}`);
			dispatch(showPortfolio(response.data))
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);
		}
	}
}


export const createAboutPage = (formData) =>{
	return async dispatch =>{
		try{
			const response = await axios.post('/myportfolio/about', formData);
			dispatch(showPortfolio(response.data));
		}catch(err){
			dispatch(addError(err.response.data.error))
			throw Error(err);
		}
	
	}
}


export const createCollection = (collection)=>{
	return async dispatch=>{
		try{
			const response = await axios.post('/myportfolio/collections', collection);
			dispatch(showPortfolio(response.data));
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);
		}
	}
}


export const createVideo = (video)=>{
	return async dispatch=>{
		try{
			const response = await axios.post('/myportfolio/videos', video);
			dispatch(showPortfolio(response.data));
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);

		}
	}
}

export const createTimelinePost = (post)=>{
	return async dispatch=>{
		try{
			const response = await axios.post('/myportfolio/timeline', post);
			dispatch(showPortfolio(response.data));
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);
		}
	}
}

export const getMyPortfolio = () =>{
	return async dispatch =>{
		try{
			const response = await axios.get('/myportfolio');
			dispatch(showPortfolio(response.data))
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);
		}
	}
}