const showPortfolio = (state={}, action)=>{
	switch(action.type){
		case "SHOW_PORTFOLIO":
			return {...state, portfolio:action.portfolio};
		default:
			return state;
	}
}

export default showPortfolio;