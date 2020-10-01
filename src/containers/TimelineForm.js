import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createTimelinePost,
  editTimelinePost,
} from "../store/actions/portfolios";
import { toast } from "react-toastify";

class TimelineForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: [],
      title: this.props.location.state
        ? this.props.location.state.post.title
        : "",
      date: this.props.location.state
        ? this.props.location.state.post.date
        : "",
      text: this.props.location.state
        ? this.props.location.state.post.text
        : "",
      id: 1,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  notifySuccess = (message) => {
    toast.success(message, { autoClose: 2000 });
  };
  handleSave = async (e) => {
    e.preventDefault();
    try {
      if (this.props.location.state) {
        await this.props.editTimelinePost(
          {
            post: {
              title: this.state.title,
              date: this.state.date,
              text: this.state.text,
            },
          },
          this.props.location.state.post._id
        );
        this.props.history.push("/myportfolio/timeline");
        this.notifySuccess("Successfully Saved Changes");
      } else {
        await this.props.createTimelinePost({
          post: {
            title: this.state.title,
            date: this.state.date,
            text: this.state.text,
          },
        });
        let timelineArr = this.state.timeline.concat({
          title: this.state.title,
          date: this.state.date,
          text: this.state.text,
          id: this.state.id,
        });
        this.setState({
          timeline: timelineArr,
          title: "",
          date: "",
          text: "",
          id: this.state.id + 1,
        });
        this.notifySuccess("Successfully Added Post To Timeline");
      }
    } catch (err) {
      return;
    }
  };

  render() {
    const timelinePosts = this.state.timeline.map((post) => {
      return (
        <div key={post.id} className="alert alert-success card mb-2">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <h6 className="card-subtitle">{post.date}</h6>
            <p className="card-text">{post.text}</p>
          </div>
        </div>
      );
    });

    const { title, date, text } = this.state;
    let post = null;
    if (this.props.location.state) {
      post = this.props.location.state.post;
    }
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8 col-10">
          <h2 className="my-3">
            Add achievements, events, education and past jobs to your career
            timeline
          </h2>
          <form onSubmit={this.handleSave}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                value={title}
                onChange={this.handleChange}
                name="title"
                className="form-control mb-3"
              />

              <label htmlFor="date">Date</label>
              <input
                value={date}
                onChange={this.handleChange}
                name="date"
                className="form-control mb-3"
              />

              <label htmlFor="text">Description</label>
              <textarea
                className="form-control mb-3"
                rows="3"
                value={text}
                onChange={this.handleChange}
                name="text"
              />
              {post ? (
                <button className="btn button my-3" type="submit">
                  Save Post
                </button>
              ) : (
                <button className="btn button my-3" type="submit">
                  Add Post To Timeline
                </button>
              )}
            </div>
          </form>
          {!post && (
            <React.Fragment>
              <div>{timelinePosts}</div>
              <button
                className="btn button  form-control my-3"
                onClick={() => {
                  this.props.history.push("/myportfolio/timeline");
                }}
              >
                Save Changes
              </button>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    portfolio: state.showPortfolio.portfolio,
  };
}
export default connect(mapStateToProps, {
  createTimelinePost,
  editTimelinePost,
})(TimelineForm);
