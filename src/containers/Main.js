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
import NotificationsPage from '../containers/NotificationsPage';
import withAuth from '../hocs/withAuth';
import {clearErrorMessage} from '../store/actions/errors';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

class Main extends Component{
    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location && this.props.error){
            this.props.clearErrorMessage();
        }else if(this.props.error){
            this.notify();
        }
        
    };
    notify = ()=>{
        toast.error(this.props.error);
        this.props.clearErrorMessage();
    }
    render(){
        return(
            <React.Fragment>
                <Navbar {...this.props}/>
                <Switch>
                    <Route exact path="/signup" render={(props)=><AuthForm type="signup" buttonText="Sign Up" {...props}/>}/>
                    <Route exact path="/signin" render={(props)=><AuthForm type="signin" buttonText="Sign In" {...props}/>}/>
                    <Route exact path="/" render={(props)=><Homepage {...props}/>}/>
                    <Route exact path="/portfolios" component={withAuth(PortfolioList)}/>
                    <Route path="/portfolios/:id" component={PortfolioPage}/>
                    <Route path="/myportfolio/create" component={withAuth(PortfolioForm)}/>
                    <Route path="/myportfolio" component={withAuth(PortfolioPage)}/>
                    <Route path="/myaccount" component={withAuth(ProfilePage)}/>
                    <Route exact path="/notifications" component={withAuth(NotificationsPage)}/>
                </Switch>
            </React.Fragment>
        )
    }
 
}

function mapStateToProps(state){
    return{
        error:state.errors.error,
        currentUser:state.currentUser.user
    }
    
}

export default withRouter(connect(mapStateToProps, {clearErrorMessage})(Main));