import React, {useEffect} from 'react'; 

const ProfilePage = ({location,birthday, type, profileImage, url, email, phone, instagram, facebook})=>{
	useEffect(() => {
	  window.scrollTo(0, 0)
	}, []);
	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-10 pl-5">
					<div className="row">
						<div className="col-md-4">
							<h5 className="my-3">{type}</h5>
							<h5 className="my-3">Born in {birthday}</h5>
							<h5 className="my-3">{location}</h5>						
							<h5 className="my-3">{email}</h5>
							<h5 className="my-3">{phone}</h5>
							{facebook && <a href={facebook} class="fa fa-facebook"></a>}
							{instagram && <a href={instagram} class="fa fa-instagram"></a>}
						</div>
						<div className="col-md-8">
							<img src={profileImage} alt="" className="img-fluid rounded"/>
						</div>

					</div>
				</div>	
			</div>
		</div>
	)
}

export default ProfilePage;