import React from 'react';

const AboutPage = ({about, statement, image}) =>{
	return (
		<div>
			<div 
				className="container-fluid row justify-content-center align-items-center p-5 my-3 mx-0"
				style={{
					background:`url(${image}) center center / cover no-repeat`,
					minHeight:'600px'
				}}
			>
				<div className="col-md-10 text-center ">
					<h2 className="">{statement}</h2>
				</div>	
				
			</div>	
			<div id="about" className="container-fluid row justify-content-center text-center p-3 my-3 ">
				<div className="container my-3 col-md-10">
					<p className="p-5 my-3">{about}</p>	
				</div>		
			</div>
		</div>		
	)
}


export default AboutPage;