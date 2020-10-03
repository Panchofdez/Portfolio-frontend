import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signout } from "../store/actions/auth";
import { connect } from "react-redux";
import Moment from "react-moment";
import { toast } from "react-toastify";
import {
  readNotification,
  getCurrentUser,
  clearNotifications,
} from "../store/actions/auth";
import { getMyPortfolio } from "../store/actions/portfolios";
import fixImage from "../services/imageOrientation";

class Navbar extends Component {
  componentDidMount() {
    if (Object.keys(this.props.currentUser).length !== 0) {
      this.fetchCurrentUser();
    }
  }
  fetchCurrentUser = async () => {
    try {
      await this.props.getCurrentUser();
    } catch (err) {
      console.log(err);
      return;
    }
  };
  notification = (message) => {
    toast(message);
  };
  notificationPress = async (n) => {
    try {
      console.log(n);
      await this.props.readNotification(n._id);
      if (n.comment) {
        this.props.history.push("/myportfolio/comments");
      } else {
        this.props.history.push(`/portfolios/${n.portfolio}`);
      }
    } catch (err) {
      return;
    }
  };
  render() {
    const {
      currentUser,
      isAuthenticated,
      signout,
      history,
      clearNotifications,
    } = this.props;
    let notifications = [];
    if (currentUser.notifications) {
      notifications = currentUser.notifications.map((n) => {
        let newImage = fixImage(n.profileImage);
        return (
          <div
            key={n._id}
            className="dropdown-item border-bottom card p-0"
            style={{ fontSize: "13px" }}
            onClick={() => this.notificationPress(n)}
          >
            <div className="row no-gutters p-0 notification-container">
              <div className="col-2" style={{ maxHeight: "60px" }}>
                <img
                  src={newImage}
                  alt=""
                  className="card-img"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <div className="col-10 card-body p-3 notification">
                <p className="card-text m-0">{n.text}</p>
                <p className="card-text m-0">
                  <small>
                    <Moment fromNow>{n.createdAt}</Moment>
                  </small>
                </p>
              </div>
            </div>
          </div>
        );
      });
    }
    let color = "";
    if (notifications.length > 0) {
      color = "red";
    }

    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-light bg-white">
          <div className="container ">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand ml-2">
                Portfolio
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              {!isAuthenticated ? (
                <ul className="navbar-nav justify-content-end ml-auto">
                  <li className="nav-item mx-3">
                    <Link to="/portfolios" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link to="/signup" className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link to="/signin" className="nav-link">
                      Sign in
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav justify-content-end ml-auto">
                  <li className="nav-item mx-3">
                    <Link to="/portfolios" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown mx-3">
                    <a
                      style={{ color }}
                      className="nav-link"
                      id="notifications"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-bell"></i> {notifications.length}
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-sm-right dropdown-menu-left py-0"
                      aria-labelledby="navbarDropdown"
                    >
                      {notifications}
                      {notifications.length > 0 ? (
                        <button
                          className="dropdown-item mb-0 border-bottom"
                          onClick={async () => {
                            try {
                              await clearNotifications();
                            } catch (err) {
                              return;
                            }
                          }}
                        >
                          Mark all as read
                        </button>
                      ) : (
                        <button className="dropdown-item mb-0 border-bottom">
                          No new notifications
                        </button>
                      )}
                      <button
                        className="dropdown-item mb-0"
                        onClick={() => history.push("/notifications")}
                      >
                        Notifications history
                      </button>
                    </div>
                  </li>
                  <li className="nav-item mx-3">
                    <Link className="nav-link" to="/myportfolio">
                      MyPortfolio
                    </Link>
                  </li>
                  <li className="nav-item dropdown ml-3">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {currentUser.name}
                    </a>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={() => signout()}
                      >
                        Log Out
                      </Link>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.currentUser.isAuthenticated,
    currentUser: state.currentUser.user,
    portolio: state.showPortfolio.portfolio,
  };
}

export default connect(mapStateToProps, {
  signout,
  readNotification,
  getCurrentUser,
  clearNotifications,
  getMyPortfolio,
})(Navbar);
