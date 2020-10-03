import React from "react";
import { connect } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { deleteTimelinePost } from "../store/actions/portfolios";
import { toast } from "react-toastify";

const TimelinePage = (props) => {
  let match = useRouteMatch();
  const notifyDelete = (msg) => {
    toast.warning(msg, { autoClose: 2000 });
  };
  const timelinePosts = props.timeline.map((post, i) => {
    return (
      <div
        key={i}
        className="timeline-card"
        style={{
          borderLeft: "5px solid #161716",
          paddingLeft: 50,
          paddingBottom: 50,
        }}
      >
        <div className="card p-3 elevated">
          <h3 className="">{post.title}</h3>
          <p style={{ fontStyle: "italic" }}>{post.date}</p>
          <p>{post.text}</p>
          {match.url === "/myportfolio/timeline" && (
            <div className="float-right mt-3">
              <Link
                className="btn button-outline btn-sm mr-3"
                to={{
                  pathname: `/myportfolio/edit/timeline/${post._id}`,
                  state: { post },
                }}
              >
                <i className="fas fa-pen"></i>
              </Link>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={async () => {
                  try {
                    await props.deleteTimelinePost(post._id);
                    notifyDelete("Deleted From Timeline");
                  } catch (err) {
                    return;
                  }
                }}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          )}
          <div
            style={{
              width: "25px",
              height: "25px",
              position: "absolute",
              top: -1,
              left: -66,
              backgroundColor: "#161716",
              borderRadius: 25,
            }}
          ></div>
        </div>
      </div>
    );
  });

  return (
    <div className="pl-3 pl-md-0">
      <div className="p-3">
        <div className="d-flex flex-row justify-content-between">
          <h2 className="mt-3">Timeline</h2>
          {match.path === "/myportfolio/timeline" && (
            <div>
              <Link
                className="btn button-outline mt-3"
                to="/myportfolio/edit/timeline"
              >
                <i className="fas fa-pen"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
      {timelinePosts.length > 0 && timelinePosts}
    </div>
  );
};

export default connect(null, { deleteTimelinePost })(TimelinePage);
