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

export const clearPortfolio = () =>{
	return{
		type:'CLEAR_PORTFOLIO'
	}
}

export const searchPortfolios =(query)=>{
	return async dispatch =>{
		try{
			const response =await axios.get(`/portfolios?search=${query}`);
			dispatch(loadPortfolios(response.data))
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);
		}
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


export const getPortfolio = (id)=>{
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

export const recommend = (id)=>{
	return async dispatch=>{
		try{
			const response = await axios.post(`/portfolios/${id}/recommend`);
			dispatch(showPortfolio(response.data));
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);
		}
	}
}

export const unRecommend = (id)=>{
	return async dispatch=>{
		try{
			const response = await axios.post(`/portfolios/${id}/unrecommend`);
			dispatch(showPortfolio(response.data));
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);
		}
	}
}

export const createComment = (text, id)=>{
	return async dispatch=>{
		try{
			const response = await axios.post(`/portfolios/${id}/comments`, text);
			console.log(response);
			dispatch(showPortfolio(response.data));
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);
		}
	}
}

export const deleteComment = (id, comment_id)=>{
	return async dispatch=>{
		try{
			const response = await axios.delete(`/portfolios/${id}/comments/${comment_id}`);
			dispatch(showPortfolio(response.data));
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);
		}
	}
}

export const createProfilePage = (formData)=>{
	return async dispatch =>{
		try{
			 const response = await axios.post('/myportfolio/profile', formData);
			 dispatch(showPortfolio(response.data));
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);
		}
	}
}

export const editProfilePage = (formData)=>{
	return async dispatch =>{
		try{
			 const response = await axios.put('/myportfolio/profile', formData);
			 dispatch(showPortfolio(response.data));
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

export const editAboutPage = (formData)=>{
	return async dispatch =>{
		try{
			const response = await axios.put('/myportfolio/about', formData);
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

export const editCollection = (collection, id)=>{
	return async dispatch=>{
		try{
			const response = await axios.put(`/myportfolio/collections/${id}`, collection);
			dispatch(showPortfolio(response.data));
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);
		}
	}
}

export const deleteCollection = (id)=>{
	return async dispatch=>{
		try{
			const response = await axios.delete(`/myportfolio/collections/${id}`);
			dispatch(showPortfolio(response.data));
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);
		}
	}
}

export const deleteCollectionPhoto =(id, photo_id)=>{
	return async dispatch=>{
		try{
			const response = await axios.delete(`/myportfolio/collections/${id}/photos/${photo_id}`);
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

export const editVideo = (video, id)=>{
	return async dispatch=>{
		try{
			const response = await axios.put(`/myportfolio/videos/${id}`, video);
			dispatch(showPortfolio(response.data));
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);
		}
	}
}

export const deleteVideo=(id)=>{
	return async dispatch=>{
		try{
			const response = await axios.delete(`/myportfolio/videos/${id}`);
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

export const editTimelinePost = (post, id)=>{
	return async dispatch=>{
		try{
			const response = await axios.put(`/myportfolio/timeline/${id}`, post);
			dispatch(showPortfolio(response.data));
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);
		}
	}
}

export const deleteTimelinePost = (id)=>{
	return async dispatch=>{
		try{
			const response = await axios.delete(`/myportfolio/timeline/${id}`);
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

