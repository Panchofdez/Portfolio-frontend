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
