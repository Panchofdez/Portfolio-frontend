
const currentUser = (state={isAuthenticated:false,user:{}}, action)=>{
	switch(action.type){
		case "SET_CURRENT_USER":
			return {
				isAuthenticated:Object.keys(action.user).length>0,
				user:action.user
			}
		default:
			return state;
	}
}


export default currentUser;