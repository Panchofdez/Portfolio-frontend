import React, { useEffect } from "react";
import VideosForm from "../containers/VideosForm";
import CollectionForm from "../containers/CollectionForm";

const WorkForm = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-5">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8 col-12">
          <h2 className="my-3">
            Showcase your work or projects through collections of photos and
            videos
          </h2>
          <ul className="nav nav-pills mt-5" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active pill-link p-2 "
                id="pills-collections-tab"
                data-toggle="pill"
                href="#pills-collections"
                role="tab"
                aria-controls="pills-collections"
                aria-selected="true"
              >
                Add Collections
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link pill-link p-2"
                id="pills-videos-tab"
                data-toggle="pill"
                href="#pills-videos"
                role="tab"
                aria-controls="pills-videos"
                aria-selected="false"
              >
                Add Videos
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-collections"
          role="tabpanel"
          aria-labelledby="pills-collections-tab"
        >
          <CollectionForm {...props} />
        </div>
        <div
          className="tab-pane fade"
          id="pills-videos"
          role="tabpanel"
          aria-labelledby="pills-videos-tab"
        >
          <VideosForm {...props} />
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-md-8 col-12">
          <button
            className="btn button form-control"
            onClick={() => props.history.push("/myportfolio/work")}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkForm;
