import React from "react";

const PortfolioHeader = ({ portfolio }) => {
  return (
    <div>
      <div className="d-sm-flex justify-content-between align-items-center  pt-3 pl-3 mt-3">
        <h1
          className="mr-2 portfolioName"
          style={{ color: "white", fontWeight: "bold" }}
        >
          {portfolio.name}
        </h1>
      </div>
    </div>
  );
};

export default PortfolioHeader;

{
  /* <div className="pl-3">
        {portfolio.recommendations.length > 0 && (
          <span className="mr-4" style={{ color: "white" }}>
            <i className="fa fa-thumbs-up" style={{ color: "#00ad8e" }}></i>
            {portfolio.recommendations.length}{" "}
            {portfolio.recommendations.length > 1
              ? "Recommendations"
              : "Recommendation"}
          </span>
        )}
        {portfolio.comments.length > 0 && (
          <span style={{ color: "white" }}>
            <i
              className="fas fa-comment-alt mr-3"
              style={{ color: "#00ad8e" }}
            ></i>
            {portfolio.comments.length}{" "}
            {portfolio.recommendations.length > 1 ? "Comments" : "Comment"}
          </span>
        )}
      </div> */
}
