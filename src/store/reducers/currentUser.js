const user = {
	isAuthenticated:true,
	user:{
			name:"Pancho Fernandez",
			profileImage:"/profile-pic3.jpg",
			birthday:"Jan 3 1998",
			location:"Toronto,Canada",
			workField:"Photography",
			jobTitle:"Photographer",
			portfolios:[]
		}
}

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