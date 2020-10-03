import React, { Component } from "react";
import { connect } from "react-redux";
import { addErrorMessage } from "../store/actions/errors";
import { apiCall } from "../services/apiCall";
import Moment from "react-moment";
import fixImage from "../services/imageOrientation";

class NotificationsPage extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
  }
  componentDidMount() {
    this._isMounted = true;
    this.fetchNotifications();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  fetchNotifications = async () => {
    try {
      const response = await apiCall.get("/api/notifications");
      if (this._isMounted === true) {
        this.setState({ notifications: response.data });
      }
    } catch (err) {
      this.props.addErrorMessage(err);
      return;
    }
  };
  deleteNotification = async (id) => {
    try {
      const response = await apiCall.delete(`/api/notifications/${id}`);
      if (this._isMounted === true) {
        this.setState({ notifications: response.data });
      }
    } catch (err) {
      this.props.addErrorMessage(err);
      return;
    }
  };
  render() {
    let notifications = null;
    if (this.state.notifications.length > 0) {
      notifications = this.state.notifications.map((n) => {
        let newImage = fixImage(n.profileImage);
        console.log(n);
        return (
          <div key={n._id} className="card col-md-12 p-0 mb-3 elevated">
            <div className="row no-gutters" style={{ height: "125px" }}>
              <div className="col-2" style={{ maxHeight: "125px" }}>
                <img
                  src={newImage}
                  className="card-img img-fluid"
                  style={{ height: "100%", width: "100%" }}
                  alt=""
                />
              </div>
              <div className="col-10">
                <div className="card-body">
                  <button
                    className="btn btn-outline-danger float-right"
                    onClick={() => this.deleteNotification(n._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                  <button
                    className="btn btn-outline-dark float-right mx-2"
                    onClick={() =>
                      this.props.history.push(`/portfolios/${n.portfolio}`)
                    }
                  >
                    View Portfolio
                  </button>
                  <h5 className="card-title">{n.text}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      <Moment fromNow>{n.createdAt}</Moment>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="container mt-5 pb-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="my-3">Your Notifications</h2>
            <div className="card border border-white bg-transparent p-0">
              <div className="card-body p-3">
                <div className="row justify-content-center p-3">
                  {notifications ? notifications.reverse() : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addErrorMessage })(NotificationsPage);
