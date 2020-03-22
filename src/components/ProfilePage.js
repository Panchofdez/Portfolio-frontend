import React from 'react'; 

const ProfilePage = ({user})=>{
	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-10 pl-5">
					<div className="row">
						<div className="col-md-6">
							<h2 className="my-3">Profile</h2>
							<p>Name: {user.name}</p>
							<p>Birthday: {user.birthday}</p>
							<p>Location: {user.location}</p>
							<p>Field Of Work: {user.workField}</p>
							<p>Job Title: {user.jobTitle}</p>
						</div>
						<div className="col-md-6">
							<img src={user.profileImage} alt="" className="img-fluid"/>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	)
}

export default ProfilePage;