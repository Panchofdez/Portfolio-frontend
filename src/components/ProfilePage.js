import React from 'react'; 

const ProfilePage = ({location,birthday, type, profileImage, url})=>{
	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-10 pl-5">
					<div className="row">
						<div className="col-md-6">
							<h2 className="my-3">Profile</h2>
							<p>Year of Birth: {birthday}</p>
							<p>Location: {location}</p>
							<p>Work: {type}</p>
						</div>
						<div className="col-md-6">
							<img src={profileImage} alt="" className="img-fluid"/>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h2>Followers</h2>
							</div>
						</div>
					</div>
				</div>	
			</div>
		</div>
	)
}

export default ProfilePage;