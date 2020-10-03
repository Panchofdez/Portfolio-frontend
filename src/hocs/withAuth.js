import React, { Component } from "react";
import { connect } from "react-redux";

export default function withAuth(WrappedComponent) {
  class Authenticate extends Component {
    componentDidMount() {
      if (this.props.isAuthenticated === false) {
        this.props.history.push("/");
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return {
      isAuthenticated: state.currentUser.isAuthenticated,
    };
  }

  return connect(mapStateToProps)(Authenticate);
}
