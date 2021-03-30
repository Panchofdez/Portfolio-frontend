import React from "react";
import { Link } from "react-router-dom";
import Background from "../images/pencilBackground.jpg";
import Art from "../images/art.jpg";
import Dance from "../images/ballerina2.jpg";
import Design from "../images/design.jpg";
import Architecture from "../images/architect.jpg";
import Photography from "../images/photography.jpg";
import Athlete from "../images/athlete.jpg";
import Camera from "../images/photo.png";
import Trophy from "../images/trophy.png";
import Deal from "../images/deal.png";

const HomePage = (props) => {
  return (
    <div>
      <div
        className="container-fluid w-100 pb-5"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row py-5">
          <div className="col-md-1 col-xl-1"></div>
          <div className="col-md-9 col-xl-9">
            <div className="row justify-content-start w-100 mt-5">
              <div className="col-10 col-md-6 px-5">
                <h1
                  className="homeTitle mb-1"
                  style={{
                    fontWeight: 900,
                    color: "#161716",
                  }}
                >
                  For
                </h1>
                <h1
                  className="homeTitle mb-1"
                  style={{ fontWeight: 900, color: "#161716" }}
                >
                  Creative
                </h1>
                <h1
                  className="homeTitle mb-1"
                  style={{ fontWeight: 900, color: "#161716" }}
                >
                  Professionals
                </h1>
              </div>
              <div className="col-12 col-md-8 pl-5 ">
                <h4
                  style={{ color: "#161716", lineHeight: 1.5, fontWeight: 500 }}
                >
                  A quick and easy way to showcase yourself and your work
                </h4>
                <Link
                  className="btn btn-large mt-3 signup-btn button"
                  to="/signup"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-5 w-100"
        style={{
          backgroundColor: "#F2F8F6",
          minHeight: "250px",
        }}
      >
        <div className="row px-5 m-auto py-5 mt-5 w-100">
          <div className="col-md-4 my-md-5 my-4  text-center">
            <img
              src={Camera}
              style={{ height: 175, width: 175, fontWeight: 500 }}
            />
            <h5 className="mt-3 mx-xl-5">
              Showcase your work through collections of photos and videos
            </h5>
          </div>
          <div className="col-md-4 my-md-5 my-4 text-center ">
            <img
              src={Trophy}
              style={{ height: 175, width: 175, fontWeight: 500 }}
            />
            <h5 className="mt-3 mx-xl-5">
              Add events and achievements to your career timeline
            </h5>
          </div>
          <div className="col-md-4 my-md-5 my-4 text-center">
            <img src={Deal} style={{ height: 175, width: 175 }} />
            <h5 className="mt-3 mx-xl-5">
              Give and receive recommendations and testimonials
            </h5>
          </div>
        </div>
      </div>
      <div className="container-fluid w-100 py-5 my-5">
        <h6
          className="px-sm-4 text-center"
          style={{
            lineHeight: 1.75,
            fontSize: 45,
            fontWeight: 900,
          }}
        >
          Join the Community
        </h6>

        <div className="row justify-content-center px-sm-5 py-5">
          <div className="col-12 col-md-11 col-xl-10 ">
            <div className="row mb-sm-5">
              <div className="col-sm-6 col-md-4">
                <img src={Art} className="img-fluid image" />
              </div>
              <div className="col-sm-6 col-md-4">
                <img src={Design} className="img-fluid image" />
              </div>
              <div className="col-sm-6 col-md-4">
                <img src={Architecture} className="img-fluid image" />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-md-4">
                <img src={Athlete} className="img-fluid image" />
              </div>
              <div className="col-sm-6 col-md-4">
                <img src={Photography} className="img-fluid image" />
              </div>
              <div className="col-sm-6 col-md-4">
                <img src={Dance} className="img-fluid image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid row w-100 p-0 py-5 m-0 justify-content-center"
        style={{ minHeight: "250px", backgroundColor: "#212121" }}
      >
        <div className="col-md-6 my-5 py-5 ml-3 ml-sm-0">
          <h2
            style={{
              fontSize: 26,
              color: "white",
              lineHeight: "50px",
              fontWeight: 900,
            }}
          >
            Can't rely on a regular resume and don't have the time, money or
            resources to make your own website?
          </h2>
          <h2
            className="mt-4"
            style={{
              fontSize: 26,
              color: "#75a99b",
              lineHeight: "50px",
              fontWeight: 900,
            }}
          >
            We make it easy to create and share your own visual
            resume/portfolio.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
