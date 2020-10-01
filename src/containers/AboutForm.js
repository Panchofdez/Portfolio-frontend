import React, { Component } from "react";
import { connect } from "react-redux";
import { editAbout } from "../store/actions/portfolios";
import { toast } from "react-toastify";

class AboutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: this.props.location.state.portfolio.about
        ? this.props.location.state.portfolio.about
        : "Your Bio",
      location: this.props.location.state.portfolio.location
        ? this.props.location.state.portfolio.location
        : "City,Country",
      birthday: this.props.location.state.portfolio.birthday
        ? this.props.location.state.portfolio.birthday
        : "Your Birthday",
      type: this.props.location.state.portfolio.type
        ? this.props.location.state.portfolio.type
        : "What do you do?",
      loading: false,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onFileChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };
  clearText = (e) => {
    this.setState({ [e.target.name]: "" });
  };
  notifySuccess = () => {
    toast.success("Successfully saved changes", { autoClose: 3000 });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        type: this.state.type,
        about: this.state.about,
        location: this.state.location,
        birthday: this.state.birthday,
      };
      console.log(formData);
      await this.props.editAbout(formData);
      this.props.history.push("/myportfolio/about");
      this.notifySuccess();
    } catch (err) {
      return;
    }
  };
  render() {
    const { about, type, location, birthday } = this.state;
    let portfolio = null;
    if (this.props.location.state) {
      portfolio = this.props.location.state.portfolio;
    }
    return (
      <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
        <div className="row justify-content-center mt-5 pb-5">
          <div className="col-md-8 col-10">
            <h2 className="my-3">Tell us about who you are and what you do</h2>

            <div className="form-group">
              <label htmlFor="type">Profession/Occupation *</label>
              <input
                className="form-control mb-3"
                id="type"
                value={type}
                onChange={this.handleChange}
                name="type"
                type="text"
                onFocus={!portfolio.type ? this.clearText : undefined}
              />
              <label htmlFor="location">Location *</label>
              <input
                value={location}
                onChange={this.handleChange}
                name="location"
                className="form-control mb-3"
                type="text"
                id="location"
                onFocus={!portfolio.location ? this.clearText : undefined}
              />

              <label htmlFor="statement">Birthday (optional)</label>
              <input
                className="form-control mb-3"
                id="birthday"
                value={birthday}
                onChange={this.handleChange}
                name="birthday"
                type="text"
                onFocus={!portfolio.birthday ? this.clearText : undefined}
              />
              <label htmlFor="about">Bio</label>
              <textarea
                className="form-control mb-3"
                id="about"
                rows="5"
                value={about}
                onChange={this.handleChange}
                name="about"
                onFocus={!portfolio.about ? this.clearText : undefined}
              />
              <button className="btn button form-control mt-3" type="submit">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(null, { editAbout })(AboutForm);
