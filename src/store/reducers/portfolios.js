

const portfolios = (state=[], action)=>{
	switch(action.type){
		case 'LOAD_PORTFOLIOS':
			return [...action.portfolios];
		case 'DELETE_PORTFOLIO':
			return state.filter((p)=>p.id!==action.id)
		default:
			return state;
	}
}


export default portfolios;