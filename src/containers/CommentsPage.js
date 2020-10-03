import React, { Component } from "react";
import { connect } from "react-redux";
import { createComment, deleteComment } from "../store/actions/portfolios";
import { addErrorMessage } from "../store/actions/errors";
import { toast } from "react-toastify";
import Moment from "react-moment";
import fixImage from "../services/imageOrientation";

class CommentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Give your testimonial or referral here",
    };
  }
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  notifySuccess = () => {
    toast.success("Successfully posted comment", { autoClose: 2000 });
  };
  notifyDelete = (msg) => {
    toast.warning(msg, { autoClose: 2000 });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    if (!this.state.text) {
      this.props.addErrorMessage("Comments can't be blank");
      return;
    }
    try {
      await this.props.createComment(this.state, this.props.portfolio._id);
      this.setState({ text: "Give your testimonial or referral here..." });
      this.notifySuccess();
    } catch (err) {
      return;
    }
  };
  render() {
    const comments = this.props.portfolio.comments.map((comment) => {
      let newImage = fixImage(comment.author.profileImage);
      return (
        <div
          key={comment._id}
          className="media rounded p-3 mb-3 elevated"
          style={{ backgroundColor: "white", color: "#161716" }}
        >
          <img
            src={newImage}
            className="align-self-start mr-3 img-fluid rounded-circle"
            id="comment-profile-pic"
            alt="..."
          />
          <div className="media-body">
            <h5 className="mt-0">{comment.author.name}</h5>
            <p>
              <small className="text-muted">
                <Moment fromNow>{comment.createdAt}</Moment>
              </small>
            </p>
            <p>{comment.text}</p>
            {this.props.currentUser === comment.author.id && (
              <button
                className="btn btn-outline-danger float-right"
                onClick={async () => {
                  try {
                    await this.props.deleteComment(
                      this.props.portfolio._id,
                      comment._id
                    );
                    this.notifyDelete("Deleted comment");
                  } catch (err) {
                    console.log(err);
                    return;
                  }
                }}
              >
                <i className="fas fa-trash"></i>
              </button>
            )}
          </div>
        </div>
      );
    });
    return (
      <div className="p-3">
        <h2 className="mt-3 mb-4">Comments</h2>

        <div className="card border border-white bg-transparent p-0">
          <div className="card-body p-0">
            <div>
              <form onSubmit={this.handleSubmit}>
                <textarea
                  className="form-control my-3 p-3 elevated"
                  value={this.state.text}
                  onChange={this.handleChange}
                  rows="3"
                />
                <button className="btn button-outline mb-3" type="submit">
                  <i className="fas fa-plus"></i> Post
                </button>
              </form>
            </div>
            <div className="row justify-content-center p-3" id="comments">
              {comments}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    portfolio: state.showPortfolio.portfolio,
    currentUser: state.currentUser.user.userId,
  };
}

export default connect(mapStateToProps, {
  createComment,
  deleteComment,
  addErrorMessage,
})(CommentsPage);

// <div key={comment._id} className="card col-md-12 p-0 mb-3">
// 					<div className="row no-gutters">
// 						<div className="col-3">
// 							<img src={newImage} className="card-img img-fluid" alt="" id="comment-profile-pic"/>
// 						</div>
// 						<div className="col-9">
// 							<div className="card-body">
// 							{this.props.currentUser===comment.author.id && (
// 								<button
// 									className="btn btn-outline-danger float-right"
// 									onClick={async()=>{
// 										try{
// 											await this.props.deleteComment(this.props.portfolio._id, comment._id);
// 											this.notifyDelete("Deleted comment")
// 										}catch(err){
// 											console.log(err);
// 											return;
// 										}
// 									}}
// 								>
// 									<i className="fas fa-trash"></i>
// 								</button>

// 							)}

// 								<h5 className="card-title">{comment.author.name}</h5>
// 								<p className="card-text">
// 									<small className="text-muted">
// 										<Moment format="DD/MM/YYYY">
//                 							{comment.createdAt}
//             							</Moment>
//             						</small>
//             					</p>
// 								<p className="card-text">{comment.text}</p>

// 							</div>
// 						</div>
// 					</div>

// 				</div>
