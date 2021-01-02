import React from "react";
import { Link } from "react-router-dom";
import Background from "../images/ballerina2.jpg";
import Art from "../images/art.jpg";

const HomePage = (props) => {
  return (
    <React.Fragment>
      <div className="row display-flex flex-row w-100 m-0 p-0">
        <div
          className="col-md-6 display-flex flex-column justify-content-center pt-0 pt-md-5"
          style={{
            backgroundColor: "black",
            paddingLeft: "5vw",
          }}
        >
          <div className="m-auto pt-lg-3 headerText">
            <div className="row justify-content-center">
              <div className="col-md-12 my-md-5 my-3 px-5 pl-md-5 align-self-center">
                <h2
                  className="title mt-5"
                  style={{ color: "white", lineHeight: 1.5 }}
                >
                  A quick and easy way to showcase yourself and your work
                </h2>
                <Link
                  className="btn  mt-3 mb-5 mx-2 signup-btn button-outline "
                  to="/signup"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 d-sm-none d-none d-md-block"
          style={{
            height: "500px",
            backgroundImage: `url(${Background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <div
        className="container-fluid pt-3 w-100"
        style={{
          backgroundColor: "#f4f4f4",
          minHeight: "250px",
        }}
      >
        <div className="row px-5 m-auto mb-md-0 pt-3 pb-4 w-100">
          <div className="col-md-4 my-md-5 my-4  text-center">
            <i className="fas fa-camera mx-2 homepage-icons"></i>
            <h5 className="mt-3">
              Showcase your work through collections of photos and videos
            </h5>
          </div>
          <div className="col-md-4 my-md-5 my-4 text-center ">
            <i className="fas fa-history mx-2 homepage-icons"></i>
            <h5 className="mt-3">
              Add events and achievements to your career timeline
            </h5>
          </div>
          <div className="col-md-4 my-md-5 my-4 text-center">
            <i className="fas fa-hands-helping mx-2 homepage-icons"></i>
            <h5 className="mt-3">
              Give and receive recommendations and testimonials
            </h5>
          </div>
        </div>
      </div>

      <div
        className="container-fluid w-100 p-0 m-0 justify-content-center"
        style={{ minHeight: "250px" }}
      >
        <div className="row w-100 m-0">
          <div className="col-md-6 col-12 p-0 m-0 d-flex justify-content-center">
            <img
              alt="art"
              src={Art}
              style={{
                maxHeight: "500px",
                width: "100%",
                height: "100%",
                flex: 1,
              }}
              className="img-fluid "
            />
          </div>
          <div className="col-md-6 col-12  py-5 d-flex align-items-center flex-column justify-content-center">
            <div className="px-sm-4 w-100">
              <h1 style={{ fontSize: 40, fontWeight: "bold" }}>For</h1>
              <h1 style={{ fontSize: 40, fontWeight: "bold" }}>Creative</h1>
              <h1 style={{ fontSize: 40, fontWeight: "bold" }}>
                Professionals
              </h1>
            </div>

            <h6 className="px-sm-4 mt-3 lead" style={{ lineHeight: 1.75 }}>
              For creative professionals that can't rely on a regular resume and
              don't have the time, money or resources to make their own website.
              We make it easy to create and share your own visual
              resume/portfolio
            </h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
