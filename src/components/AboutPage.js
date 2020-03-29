import React, {useEffect} from 'react';

const AboutPage = ({about, statement, image, url}) =>{
	useEffect(() => {
	  window.scrollTo(0, 0)
	}, []);
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
					<h1 className="">{statement}</h1>
				</div>	
				
			</div>	
			<div id="about" className="container-fluid row">
				<div className="container my-3 col-10 justify-content-center text-justify p-3">
					<h5 className="p-5 my-3">{about}</h5>	
				</div>		
			</div>
			
		</div>		
	)
}


export default AboutPage;