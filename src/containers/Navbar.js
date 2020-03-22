import React from 'react';
import {Link} from 'react-router-dom';
import {signout} from '../store/actions/auth';
import {connect} from 'react-redux'

const Navbar =(props)=>{
	const {currentUser, isAuthenticated,signout} = props;
	return(
		<nav className="navbar navbar-expand navbar-light bg-white">
			<div className="container ">
				<div className="navbar-header">
					<Link to="/" className="navbar-brand ml-2">Portfolio</Link>
				</div>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">					
					{!isAuthenticated ? (
						<ul className="navbar-nav justify-content-end ml-auto">
							<li className="nav-item">
								<Link to="/signup" className="nav-link">Sign Up</Link>
							</li>
							<li className="nav-item">
								<Link to="/signin" className="nav-link">Sign in</Link>
							</li>
						</ul>
					): (
						<ul className="navbar-nav justify-content-end ml-auto">
							<li className="nav-item">
								<Link to="/portfolios" className="nav-link">Home</Link>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									{currentUser.name}
								</a>

								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link className="dropdown-item" to="/myaccount">Account</Link>
								
									<Link className="dropdown-item" to="/myportfolio/create">Create Portfolio</Link>
								
									<Link className="dropdown-item" to="/myportfolio">My Portfolio</Link>
							
									
									<Link className='dropdown-item' to="/" onClick={()=>signout()}>Log Out</Link>
								</div>
							</li>
						</ul>

					)}
				</div>
			</div>
			
		</nav>
	)
}

function mapStateToProps(state){
  return {
    isAuthenticated: state.currentUser.isAuthenticated,
    currentUser:state.currentUser.user,

  }
}



export default connect(mapStateToProps, {signout})(Navbar);