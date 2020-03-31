import React, {useEffect} from 'react'; 
import {Link} from 'react-router-dom'

const ProfilePage = (props)=>{
	const {portfolio, url} = props;
	useEffect(() => {
	  window.scrollTo(0, 0)
	}, []);

	const supporters = portfolio.supporters.map((s)=>(		
		<Link
			to={s.portfolio? `/portfolios/${s.portfolio}` : `/portfolios/${portfolio._id}/profile`} 
			className="btn btn-outline-light btn-lg m-2" 
			key={s._id}
		>
		{s.profileImage &&	(<img src={s.profileImage} className="rounded-circle myportfolio-profile-pic" alt=""/>)}  {s.name}
		</Link>
	))
	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-10 pl-5">
					<div className="row">
						<div className="col-4">
							<h5 className="my-3">{portfolio.type}</h5>
							<h5 className="my-3">Born in {portfolio.birthday}</h5>
							<h5 className="my-3">{portfolio.location}</h5>						
							<h5 className="my-3">{portfolio.email}</h5>
							<h5 className="my-3">{portfolio.phone}</h5>
							{portfolio.facebook && <a href={portfolio.facebook} className="fa fa-facebook"></a>}
							{portfolio.instagram && <a href={portfolio.instagram} className="fa fa-instagram"></a>}
						</div>
						<div className="col-8">
							<img src={portfolio.profileImage} alt="" className="img-fluid rounded"/>
						</div>
					</div>
					
					{portfolio.supporters.length>0 && (
						<div className="row">
							<div className="col-md-4 mt-5">
								<h2>Endorsed By</h2>
							</div>
						
							<div className="col-md-8 mt-5 border-left">
								{supporters}
							</div>
						</div>
					)}
						
					

				</div>	
			</div>
		</div>
	)
}

export default ProfilePage;