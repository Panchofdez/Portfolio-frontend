const p = {
	portfolio:{
			name:"Pancho Fernandez",
			headerImage:"/about-image.jpg",
			about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			statement:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",	
			timeline:[
				{
					_id:1,
					title:"Lorem ipsum dolor sit amet",
					date:"Jan 18 2018 - August 10 2020"	,
					text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				},
				{
					_id:2,
					title:"Lorem ipsum dolor sit amet",
					date:"Jan 18 2018 - August 10 2020"	,
					text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				},
				{
					_id:3,
					title:"Lorem ipsum dolor sit amet",
					date:"Jan 18 2018 - August 10 2020"	,
					text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				}
			],
			comments:[
				{	
					_id:1,
					name:"Pascal Siakam",
					text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
				},
				{
					_id:2,
					name:"Pascal Siakam",
					text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
				},
				{
					_id:3,
					name:"Pascal Siakam",
					text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
				},
			],
			work:{
				collections:[
					{
						title:"Project #1",
						description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
						photos:[
							{
								image:"/pattern1.jpeg"
							},
							{
								image:"/pattern2.jpeg"
							}
						]
					},
					{
						title:"Project #1",
						description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
						photos:[
							{
								image:"/pattern1.jpeg"
							},
							{
								image:"/pattern2.jpeg"
							}
						]
					}	
				],
				videos:[
					{
						link:'28_wv3bqfwk',
						title:'Lorem ipsum dolor sit amet',
						description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
					},
					{
						link:'Owm6e6KYhqY',
						title:'Lorem ipsum dolor sit amet',
						description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
					},
				]
			}

		},
		user:{
			name:"Pancho Fernandez",
			profileImage:"/profile-pic3.jpg",
			birthday:"Jan 3 1998",
			location:"Toronto,Canada",
			workField:"Photography",
			jobTitle:"Photographer"
		}

}
const showPortfolio = (state={}, action)=>{
	switch(action.type){
		case "SHOW_PORTFOLIO":
			return {...state, portfolio:action.portfolio, user: action.user};
		default:
			return state;
	}
}

export default showPortfolio;