import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {authenticateUser} from '../store/actions/auth';
import {toast } from 'react-toastify';



class AuthForm extends Component{
	constructor(props){
		super(props);
		this.state={
			email:"",
			password:"",
			name:""
		}

	};
	handleChange = e =>{
		this.setState({[e.target.name]:e.target.value});
	};
	notify = ()=>{
        toast.info(`Welcome ${this.state.name}! When you are ready, head over to MyPortfolio to create your portfolio`);
    }
	handleSubmit = async(e)=>{
		e.preventDefault();
		try{

			await this.props.authenticateUser(this.props.type,this.state);
			if(this.props.match.url ==='/signup'){
				this.notify();	
			}	
			this.props.history.push('/portfolios');

		}catch(err){
			return;
		}
		
		
	};
	render(){

		const {email,password,name} = this.state;
		const {type, buttonText} = this.props;
		console.log(this.props.match.url);
		
		return(
			<div className="row justify-content-center w-100 m-0 auth-container">
				<div className="col-md-4 mt-5">
					<form onSubmit={this.handleSubmit}>
						{this.props.type==="signup" &&( 
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<input
									id="name"
									autoComplete="off"
									value={name}
									onChange={this.handleChange}
									type="text"
									name="name"
									className="form-control"					
								/>
							</div>
						)}
						
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								id="email"
								autoComplete="off"
								value={email}
								onChange={this.handleChange}
								type="text"
								name="email"
								className="form-control"					
							/>
						</div>

						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								id="password"
								autoComplete="off"
								value={password}
								onChange={this.handleChange}
								type="password"
								name="password"
								className="form-control"
							/>
						</div>
						<div className="form-group form-check">
							<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
							<label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
						</div>
						<button type="submit" className="btn btn-outline-success btn-block my-3" >{buttonText}</button>
					</form>
					{type==="signup" && (
						<Link to="/signin" className="nav-link">Already have an account? Sign in instead</Link>
					)}
					{type==="signin" && (
						<Link to="/signup" className="nav-link">Don't have an account? Sign up!</Link>
					)}
				</div>
			</div>

		
		)
	}
}
function mapStateToProps(state){
  return {
    	isAuthenticated: state.currentUser.isAuthenticated,
    	currentUser:state.currentUser.user,
   
  	}
 }

export default connect(mapStateToProps,{authenticateUser})(AuthForm);