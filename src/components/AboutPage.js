import React, {useEffect} from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

const AboutPage = ({portfolio, history}) =>{
	useEffect(() => {
	  window.scrollTo(0, 0)
	}, []);
	const {about, location, type, birthday, skills, email, phone, facebook, instagram} = portfolio;
	const skillsArr =  skills.map((s,index)=>{
		return(
			<button key={index} className="btn btn-outline-light rounded-pill my-2 mx-1" >{s}</button>
		)
	})
	let match = useRouteMatch();
	return (
		<React.Fragment>
			<div className="p-3 border-bottom">
				{match.path ==='/myportfolio' && (
					<div className="d-flex flex-row justify-content-between">
						<h2 className="mt-3 mb-4">About</h2>
						<div>
							<Link className="btn button mt-3" to="/myportfolio/edit/about"><i className="fas fa-pen"></i></Link>
						</div>
					</div>

				)}			
				{about ? <p className="my-3"><i className="fas fa-briefcase mr-3 about-icons"></i>{type}</p>: null}	
				{location ? <p className="my-3"><i className="fas fa-map-marker-alt mr-3 about-icons"></i>{location}</p>: null}
				{birthday ? <p className="my-3"><i className="fas fa-birthday-cake mr-3 about-icons"></i>{birthday}</p> : null}	
				{about ? <p className="my-3">{about}</p> :null}
			</div>	
			<div className="p-3 border-bottom">
				{match.path ==='/myportfolio' && (
					<div className="d-flex flex-row justify-content-between">
						<h2 className="mt-3 mb-4">Skills/Services</h2>
						<div>
							<Link className="btn button mt-3" to="/myportfolio/edit/skills"><i className="fas fa-pen"></i></Link>
						</div>
					</div>
				)}
				{skillsArr.length>0 && (
					<div className="d-flex flex-row flex-wrap my-3">
						{skillsArr}
					</div>

				)}
				
			</div>
			<div className="p-3 border-bottom">
				{match.path ==='/myportfolio' && (
					<div className="d-flex flex-row justify-content-between">
						<h2 className="mt-3 mb-4">Contact</h2>
						<div>
							<Link className="btn button mt-3" to="/myportfolio/edit/contact">
								<i className="fas fa-pen"></i>
							</Link>
						</div>
					</div>
				)}
				{email ? <p className="my-4"><i className="fas fa-envelope mr-4 ml-2 about-icons"></i>{email}</p>: null}
				{phone ? <p className="my-4"><i className="fas fa-phone-alt mr-4 ml-2 about-icons"></i>{phone}</p>: null}
				{facebook ? <p className="my-2"><a href={facebook} className="fa fa-facebook mr-3"></a>{facebook}</p>: null}
				{instagram ? <p className="my-2"><a href={instagram} className="fa fa-instagram mr-3"></a>{instagram}</p>: null}
			</div>		
		</React.Fragment>
	)
}


export default AboutPage;