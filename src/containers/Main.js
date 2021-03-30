import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import AuthForm from "../components/AuthForm";
import Homepage from "../components/Homepage";
import PortfolioList from "./PortfolioList";
import PortfolioForm from "../components/PortfolioForm";
import PortfolioPage from "./PortfolioPage";
import NotificationsPage from "../containers/NotificationsPage";
import Footer from "../components/Footer";
import withAuth from "../hocs/withAuth";
import { clearErrorMessage } from "../store/actions/errors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const myPortfolio = withAuth(PortfolioPage);

class Main extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location && this.props.error) {
      this.props.clearErrorMessage();
    } else if (this.props.error) {
      this.notify();
    }
  }
  notify = () => {
    toast.error(this.props.error);
    this.props.clearErrorMessage();
  };
  render() {
    return (
      <div className="d-flex h-100 flex-column" style={{ minHeight: "100vh" }}>
        <Navbar {...this.props} />
        <Switch>
          <Route
            exact
            path="/signup"
            render={(props) => (
              <AuthForm type="signup" buttonText="Sign Up" {...props} />
            )}
          />
          <Route
            exact
            path="/signin"
            render={(props) => (
              <AuthForm type="signin" buttonText="Sign In" {...props} />
            )}
          />
          <Route exact path="/" render={(props) => <Homepage {...props} />} />
          <Route exact path="/portfolios" component={PortfolioList} />
          <Route path="/portfolios/:id" component={PortfolioPage} />
          <Route
            path="/myportfolio/create"
            component={withAuth(PortfolioForm)}
          />
          <Route path="/myportfolio/edit" component={withAuth(PortfolioForm)} />
          <Route path="/myportfolio" component={myPortfolio} />
          <Route
            exact
            path="/notifications"
            component={withAuth(NotificationsPage)}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.errors.error,
    currentUser: state.currentUser.user,
  };
}

export default withRouter(
  connect(mapStateToProps, { clearErrorMessage })(Main)
);
