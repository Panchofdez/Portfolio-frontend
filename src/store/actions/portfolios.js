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
			const response =await axios.get(`/api/portfolios?search=${query}`);
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
			const response =await axios.get('/api/portfolios');
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
			const response = await axios.get(`/api/portfolios/${id}`);
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
			const response = await axios.post(`/api/portfolios/${id}/recommend`);
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
			const response = await axios.post(`/api/portfolios/${id}/unrecommend`);
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
			const response = await axios.post(`/api/portfolios/${id}/comments`, text);
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
			 const response = await axios.post('/api/myportfolio/profile', formData);
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
			 const response = await axios.put('/api/myportfolio/profile', formData);
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
			const response = await axios.post('/api/myportfolio/about', formData);
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
			const response = await axios.put('/api/myportfolio/about', formData);
			console.log(response.data)
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
			console.log(collection);
			const response = await axios.post('/api/myportfolio/collections', collection);
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
			console.log(collection);
			const response = await axios.put(`/api/myportfolio/collections/${id}`, collection);
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
			const response = await axios.delete(`/api/myportfolio/collections/${id}`);
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
			const response = await axios.delete(`/api/myportfolio/collections/${id}/photos/${photo_id}`);
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
			const response = await axios.post('/api/myportfolio/videos', video);
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
			const response = await axios.put(`/api/myportfolio/videos/${id}`, video);
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
			const response = await axios.delete(`/api/myportfolio/videos/${id}`);
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
			const response = await axios.post('/api/myportfolio/timeline', post);
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
			const response = await axios.put(`/api/myportfolio/timeline/${id}`, post);
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
			const response = await axios.delete(`/api/myportfolio/timeline/${id}`);
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
			const response = await axios.get('/api/myportfolio');
			dispatch(showPortfolio(response.data))
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);
		}
	}
}


export const editContactInfo = (info)=>{
	return async dispatch=>{
		try{
			const response = await axios.put('/api/myportfolio/contactinfo', info);
			dispatch(showPortfolio(response.data));
		}catch(err){
			dispatch(addError(err.response.data.error));
			throw Error(err);
		}
	}
}

