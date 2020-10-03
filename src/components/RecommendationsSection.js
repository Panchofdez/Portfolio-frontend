import React from "react";
import fixImage from "../services/imageOrientation";

const RecommendationsSection = ({ portfolio }) => {
  //checks if array is empty because you can;t use a spread operator with null values
  //then makes a copy of the state because state needs to be immutable
  const recommendations = portfolio.recommendations
    ? [...portfolio.recommendations]
    : [];
  const recommending = portfolio.recommending
    ? [...portfolio.recommending]
    : [];

  if (portfolio) {
    return (
      <>
        <div className="my-5">
          {recommendations.length > 0 && (
            <h6 className="my-3" style={{ fontWeight: "bold" }}>
              <a href="#" data-toggle="modal" data-target="#recommendations">
                Recommended By
              </a>
            </h6>
          )}

          <ul className="list-unstyled">
            {recommendations.length > 0 &&
              recommendations.splice(0, 5).map((u, i) => {
                let fixedImage = fixImage(u.profileImage);
                return (
                  <li key={i} className="media mb-2">
                    <img
                      src={fixedImage}
                      className="mr-3 img-fluid rounded-circle"
                      alt=""
                      style={{ height: 50, width: 50 }}
                    />
                    <div className="media-body">
                      <h6 className="mt-0 my-1">
                        <a href={`/portfolios/${u.portfolio}`}>{u.name}</a>
                      </h6>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="my-5">
          {recommending.length > 0 && (
            <h6 className="my-3" style={{ fontWeight: "bold" }}>
              <a href="#" data-toggle="modal" data-target="#recommending">
                Recommending
              </a>
            </h6>
          )}

          <ul className="list-unstyled">
            {recommending.length > 0 &&
              recommending.splice(0, 5).map((u, i) => {
                let fixedImage = fixImage(u.profileImage);

                return (
                  <li key={i} className="media mb-2">
                    <img
                      src={fixedImage}
                      alt=""
                      className="mr-3 img-fluid rounded-circle"
                      style={{ height: 50, width: 50 }}
                    />
                    <div className="media-body">
                      <h6 className="mt-0 my-1">
                        <a href={`/portfolios/${u.portfolio}`}>{u.name}</a>
                      </h6>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="modal fade" id="recommendations" tabIndex="-1">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Recommended By</h5>
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ul className="list-unstyled">
                  {portfolio.recommendations.length > 0 &&
                    portfolio.recommendations.map((u, i) => {
                      let newImage = fixImage(u.profileImage);
                      return (
                        <li key={i} className="media mb-2">
                          <img
                            src={newImage}
                            className="mr-3 img-fluid rounded-circle"
                            alt=""
                            style={{ height: 50, width: 50 }}
                          />
                          <div className="media-body">
                            <h6 className="mt-0 my-1">
                              <a href={`/portfolios/${u.portfolio}`}>
                                {u.name}
                              </a>
                            </h6>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="recommending" tabIndex="-1">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Recommending</h5>
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ul className="list-unstyled">
                  {portfolio.recommending.length > 0 &&
                    portfolio.recommending.map((u, i) => {
                      let fixedImage = fixImage(u.profileImage);
                      return (
                        <li className="media mb-2" key={i}>
                          <img
                            src={fixedImage}
                            className="mr-3 img-fluid rounded-circle"
                            alt=""
                            style={{ height: 50, width: 50 }}
                          />
                          <div className="media-body">
                            <h6 className="mt-0 my-1">
                              <a href={`/portfolios/${u.portfolio}`}>
                                {u.name}
                              </a>
                            </h6>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default RecommendationsSection;
