import React, {useEffect} from 'react'; 


const ProfilePage = (props)=>{
	const {portfolio} = props;
	useEffect(() => {
	  window.scrollTo(0, 0)
	}, []);
	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-12 col-10">
					<div className="row">
						<div className="col-md-7">
							<img src={portfolio.profileImage} alt="" className="img-fluid rounded"/>
						</div>
						<div className="col-md-5 justify-content-center">
							
							<div className="text-center mx-auto border p-3 h-100">
								<h5 className="my-3">{portfolio.type}</h5>
								{portfolio.birthday && <h5 className="my-3">Born in {portfolio.birthday}</h5>}
								<h5 className="my-3">{portfolio.location}</h5>						
								<h5 className="my-3">{portfolio.email}</h5>
								<h5 className="my-3">{portfolio.phone}</h5>
								{portfolio.facebook && <a href={portfolio.facebook} className="fa fa-facebook"></a>}
								{portfolio.instagram && <a href={portfolio.instagram} className="fa fa-instagram"></a>}
							</div>
						</div>
						
					</div>
					
						
					

				</div>	
			</div>
		</div>
	)
}

export default ProfilePage;