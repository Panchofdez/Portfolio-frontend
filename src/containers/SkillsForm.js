import React, { Component } from "react";
import { connect } from "react-redux";
import { addSkills } from "../store/actions/portfolios";
import { toast } from "react-toastify";

class SkillsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: "",
      skillsArr:
        this.props.location.state && this.props.location.state.portfolio.skills
          ? this.props.location.state.portfolio.skills
          : [],
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleAdd = (e) => {
    e.preventDefault();
    this.setState({
      skillsArr: [...this.state.skillsArr, this.state.skill],
      skill: "",
    });
  };
  handleRemove = (skillIndex) => {
    const newArr = this.state.skillsArr.filter(
      (s, index) => index !== skillIndex
    );
    this.setState({ skillsArr: newArr });
  };
  notifySuccess = (message) => {
    toast.success(message, { autoClose: 2000 });
  };
  render() {
    const skills = this.state.skillsArr.map((s, index) => {
      return (
        <button
          key={index}
          className="btn btn-outline-dark rounded-pill my-2 mx-1"
          onClick={() => this.handleRemove(index)}
        >
          <i className="fas fa-times mx-2"></i>
          {s}
        </button>
      );
    });
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8 col-12">
          <h2 className="my-3">Add a list of your skills and services</h2>
          <form onSubmit={this.handleAdd}>
            <div className="form-group">
              <label htmlFor="title">Skill/Service</label>
              <input
                value={this.state.skill}
                onChange={this.handleChange}
                name="skill"
                className="form-control"
              />
            </div>
            <button className="btn button my-3" type="submit">
              Add
            </button>
          </form>
          {skills.length > 0 && (
            <div className="my-3 d-flex flex-row flex-wrap">{skills}</div>
          )}
          <button
            className="btn button form-control my-3"
            onClick={async () => {
              try {
                console.log(this.state.skillsArr);
                const formData = {
                  skills: this.state.skillsArr,
                };

                await this.props.addSkills(formData);
                this.notifySuccess("Successfully saved changes");
                this.props.history.push("/myportfolio/about");
              } catch (err) {
                return;
              }
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { addSkills })(SkillsForm);
