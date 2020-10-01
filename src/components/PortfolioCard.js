import React from "react";
import { Link } from "react-router-dom";
import fixImage from "../services/imageOrientation";

const PortfolioCard = ({
  name,
  type,
  _id,
  profileImage,
  location,
  about,
  recommendations,
  comments,
}) => {
  const newImage = fixImage(profileImage);
  const formatBio = (string) => {
    const ellipsis = string.length > 130 ? "..." : "";
    return string.substring(0, 130) + ellipsis;
  };
  return (
    <div className="card  mb-3 portfolio-card elevated">
      <div className="row no-gutters">
        <div className="col-4">
          <img
            src={newImage}
            className="card-img img-fluid portfolio-card-img"
            alt="..."
            style={{
              overflow: "hidden",
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          />
        </div>
        <div className="col-8">
          <div className="card-body d-flex flex-column h-100 pb-0 pt-3">
            <div className="flex-grow-1">
              <h5 className="card-title mb-2" style={{ fontWeight: "bold" }}>
                {name}
              </h5>
              <p
                className="card-text mb-1 portfolio-card-text"
                style={{ fontWeight: "bold" }}
              >
                {type}
              </p>
              <p className="card-text mb-2 portfolio-card-text">
                {about ? formatBio(about) : ""}
              </p>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <Link
                to={`/portfolios/${_id}`}
                className="stretched-link "
                href="#"
                style={{ color: "#00ad8e" }}
              >
                View Portfolio
              </Link>
              <div>
                <span className="mr-4">
                  <i
                    className="fa fa-thumbs-up"
                    style={{ color: "#00ad8e" }}
                  ></i>
                  {recommendations.length}
                </span>
                <span>
                  <i
                    className="fas fa-comment-alt mr-3"
                    style={{ color: "#00ad8e" }}
                  ></i>
                  {comments.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

// <div className=" p-0 m-0" id="card-container">
// 	<div className="card h-100 mb-0" id="portfolio-card">
// 		<img src={newImage} className="card-img-top h-50 img-fluid" id="card-image" alt="headerImage"/>
// 		<div className="card-body text-center" id='portfolio-card-body'>
// 			<h5 className="card-title mb-2">{name}</h5>
// 			<p className="card-text mb-2">{type}</p>
// 		</div>
// 		<Link className="btn btn-outline-dark stretched-link m-3" id="portfolio-card-btn" to={`/portfolios/${_id}`}>View Portfolio</Link>

// 	</div>
// </div>
