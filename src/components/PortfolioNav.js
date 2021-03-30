import React from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";

const PortfolioNav = () => {
  let match = useRouteMatch();
  let location = useLocation();
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark p-0"
      style={{ background: "#161716", zIndex: 3 }}
    >
      <div className="container-md">
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#portfolioNav"
          aria-controls="portfolioNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="portfolioNav">
          <ul className="navbar-nav ml-auto" style={{ flex: 1 }}>
            <li className="nav-item" style={{ flex: 1 }}>
              <Link
                className={
                  location.pathname === `${match.url}/about` ||
                  location.pathname === match.url
                    ? "nav-link active"
                    : "nav-link"
                }
                to={`${match.url}/about`}
              >
                About
              </Link>
            </li>
            <li className="nav-item" style={{ flex: 1 }}>
              <Link
                className={
                  location.pathname === `${match.url}/work`
                    ? "nav-link active"
                    : "nav-link"
                }
                to={`${match.url}/work`}
              >
                Work
              </Link>
            </li>
            <li className="nav-item" style={{ flex: 1 }}>
              <Link
                className={
                  location.pathname === `${match.url}/timeline`
                    ? "nav-link active"
                    : "nav-link"
                }
                to={`${match.url}/timeline`}
              >
                Timeline
              </Link>
            </li>
            <li className="nav-item" style={{ flex: 1 }}>
              <Link
                className={
                  location.pathname === `${match.url}/comments`
                    ? "nav-link active"
                    : "nav-link"
                }
                to={`${match.url}/comments`}
              >
                Comments
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PortfolioNav;
