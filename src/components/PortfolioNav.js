import React from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";

const PortfolioNav = () => {
  let match = useRouteMatch();
  let location = useLocation();
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark p-0"
      style={{ background: "black" }}
    >
      <div className="container">
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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

/* <div className="nav flex-column nav-pills mt-md-3 mt-0" id="v-pills-tab">
	<Link 
		
		id="v-pills-about-tab" 
		to={`${match.url}/about`} 
	>About
	</Link>
	<Link 
		
		id="v-pills-work-tab"  
		to={`${match.url}/work`} 
	>Work
	</Link>
	<Link 
		className={location.pathname ===`${match.url}/timeline`? "nav-link active": "nav-link"}
		id="v-pills-timeline-tab" 
		to={`${match.url}/timeline`}
	>Timeline
	</Link>
	<Link 
		className={location.pathname ===`${match.url}/comments`? "nav-link active": "nav-link"}
		id="v-pills-comments-tab" 
		to={`${match.url}/comments`} 
	>Comments
	</Link>
	<Link 
		className={location.pathname ===`${match.url}/recommendations`? "nav-link active": "nav-link"}
		id="v-pills-recommendations-tab"
		to={`${match.url}/recommendations`}
	>Recommendations
	</Link>
</div> */
