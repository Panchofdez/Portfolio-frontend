import React,{Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import AuthForm from '../components/AuthForm';
import Homepage from '../components/Homepage'; 
import PortfolioList from './PortfolioList';
import PortfolioForm from '../components/PortfolioForm';
import PortfolioPage from './PortfolioPage'
import ProfilePage from '../components/ProfilePage';
import withAuth from '../hocs/withAuth';
import {clearErrorMessage} from '../store/actions/errors';


class Main extends Component{
    componentDidUpdate(prevProps) {
      if (prevProps.location !== this.props.location && this.props.error){
        this.props.clearErrorMessage();
      }
    }
    render(){
        const {error} = this.props;
        return(
            <>
                <Navbar/>
                {error && (
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="alert alert-danger my-3">
                                {error}
                            </div>
                        </div>
                    </div>
                )}
                <Switch>
                    <Route exact path="/signup" render={(props)=><AuthForm type="signup" buttonText="Sign Up" {...props}/>}/>
                    <Route exact path="/signin" render={(props)=><AuthForm type="signin" buttonText="Sign In" {...props}/>}/>
                    <Route exact path="/" render={(props)=><Homepage {...props}/>}/>
                    <Route exact path="/portfolios" component={withAuth(PortfolioList)}/>
                    <Route path="/portfolios/:id" component={withAuth(PortfolioPage)}/>
                    <Route path="/myportfolio/create" component={withAuth(PortfolioForm)}/>
                    <Route path="/myportfolio" component={withAuth(PortfolioPage)}/>
                    <Route path="/myaccount" component={withAuth(ProfilePage)}/>

                </Switch>
            </>
        )
    }
 
}

function mapStateToProps(state){
    return{
        error:state.errors.error
    }
    
}

export default withRouter(connect(mapStateToProps, {clearErrorMessage})(Main));