import React from "react";
import { connect } from "react-redux";
import VideosPage from "./VideosPage";
import Carousel from "./Carousel";
import { Link, useRouteMatch } from "react-router-dom";
import {
  deleteCollection,
  deleteCollectionPhoto,
  deleteVideo,
} from "../store/actions/portfolios";
import { addErrorMessage } from "../store/actions/errors";
import { toast } from "react-toastify";

const WorkPage = (props) => {
  const notifyDelete = (msg) => {
    toast.warning(msg, { autoClose: 2000 });
  };
  let match = useRouteMatch();
  const {
    collections,
    videos,
    deleteCollection,
    deleteCollectionPhoto,
    addErrorMessage,
    deleteVideo,
    history,
  } = props;
  const collectionsArr = collections.map((collection) => {
    return (
      <div key={collection._id} className="row mt-4 px-0 mx-1 elevated">
        <Carousel
          collection={collection}
          deleteCollectionPhoto={deleteCollectionPhoto}
          addErrorMessage={addErrorMessage}
          history={history}
        />
        <div
          className="p-5 col-12 rounded-bottom"
          style={{ backgroundColor: "#fdfdfd", color: "#161716" }}
        >
          <h4>{collection.title}</h4>
          <p>{collection.description}</p>
          {match.url === "/myportfolio/work" && (
            <div className="float-right mt-3">
              <Link
                className="btn button-outline btn-sm mr-3"
                to={{
                  pathname: `/myportfolio/edit/collections/${collection._id}`,
                  state: { collection },
                }}
              >
                <i className="fas fa-pen"></i>
              </Link>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={async () => {
                  try {
                    await deleteCollection(collection._id);
                    notifyDelete("Deleted Collection");
                  } catch (err) {
                    return;
                  }
                }}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  });
  return (
    <div className="p-0 p-sm-3">
      <div className="d-flex flex-row justify-content-between">
        <h2 className="mt-3">Work</h2>
        {match.path === "/myportfolio/work" && (
          <div>
            <Link
              className="btn button-outline mt-3"
              to="/myportfolio/edit/work"
            >
              <i className="fas fa-pen"></i>
            </Link>
          </div>
        )}
      </div>

      {collectionsArr}
      <VideosPage
        videos={videos}
        url={match.url}
        deleteVideo={deleteVideo}
        {...props}
      />
    </div>
  );
};

export default connect(null, {
  deleteCollection,
  deleteCollectionPhoto,
  deleteVideo,
  addErrorMessage,
})(WorkPage);
