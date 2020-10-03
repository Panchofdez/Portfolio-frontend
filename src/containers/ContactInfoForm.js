import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { editContactInfo } from "../store/actions/portfolios";

class ContactInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.location.state.portfolio.email
        ? this.props.location.state.portfolio.email
        : "Your email",
      phone: this.props.location.state.portfolio.phone
        ? this.props.location.state.portfolio.phone
        : "Your phone number",
      facebook: this.props.location.state.portfolio.facebook
        ? this.props.location.state.portfolio.facebook
        : "Your Facebook username",
      instagram: this.props.location.state.portfolio.instagram
        ? this.props.location.state.portfolio.instagram
        : "Your Instagram username",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  notifySuccess = () => {
    toast.success("Successfully saved changes", { autoClose: 2000 });
  };
  clearText = (e) => {
    this.setState({ [e.target.name]: "" });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const info = { ...this.state };
    console.log(info);
    try {
      await this.props.editContactInfo(info);
      this.notifySuccess();
      this.props.history.push("/myportfolio/about");
    } catch (err) {
      console.log(err);
      return;
    }
  };
  render() {
    const { email, phone, facebook, instagram } = this.state;
    let portfolio = null;
    if (this.props.location.state) {
      portfolio = this.props.location.state.portfolio;
    }
    return (
      <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
        <div className="row justify-content-center mt-5 pb-5">
          <div className="col-md-8 col-12">
            <h2 className="my-3">Contact Information</h2>
            <label htmlFor="type">Email</label>
            <input
              className="form-control mb-3"
              id="email"
              value={email}
              onChange={this.handleChange}
              name="email"
              type="text"
              onFocus={!portfolio.email ? this.clearText : undefined}
            />
            <label htmlFor="type">Phone Number</label>
            <input
              className="form-control mb-3"
              id="phone"
              value={phone}
              onChange={this.handleChange}
              name="phone"
              type="text"
              onFocus={!portfolio.phone ? this.clearText : undefined}
            />
            <label htmlFor="type">Facebook</label>
            <input
              className="form-control mb-3"
              id="facebook"
              value={facebook}
              onChange={this.handleChange}
              name="facebook"
              type="text"
              onFocus={!portfolio.facebook ? this.clearText : undefined}
            />
            <label htmlFor="type">Instagram</label>
            <input
              className="form-control mb-3"
              id="instagram"
              value={instagram}
              onChange={this.handleChange}
              name="instagram"
              type="text"
              onFocus={!portfolio.instagram ? this.clearText : undefined}
            />
            <button className="btn button form-control mt-3" type="submit">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(null, { editContactInfo })(ContactInfoForm);
