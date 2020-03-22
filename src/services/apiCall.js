import axios from 'axios';


export function setTokenHeader(token){
	if(token){
		axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
	}else{
		delete axios.defaults.headers.common['authorization']
	}
}



