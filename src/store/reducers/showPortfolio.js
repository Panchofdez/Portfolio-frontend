const showPortfolio = (state={}, action)=>{
	switch(action.type){
		case "SHOW_PORTFOLIO":
			return {...state, portfolio:action.portfolio};
		case 'CLEAR_PORTFOLIO':
			return {...state,portfolio:null}
		default:
			return state;
	}
}

export default showPortfolio;