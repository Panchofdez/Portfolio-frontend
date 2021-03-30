import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import AboutPage from "../components/AboutPage";
import CommentsPage from "./CommentsPage";
import TimelinePage from "./TimelinePage";
import WorkPage from "../components/WorkPage";
import RecommendationsSection from "../components/RecommendationsSection";
import PortfolioHeader from "../components/PortfolioHeader";
import Loading from "../components/Loading";
import { addErrorMessage } from "../store/actions/errors";
import PortfolioNav from "../components/PortfolioNav";
import {
  getMyPortfolio,
  getPortfolio,
  clearPortfolio,
  recommend,
  unRecommend,
} from "../store/actions/portfolios";
import fixImage from "../services/imageOrientation";

class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommending: false,
    };
  }
  componentDidMount() {
    console.log("mounted");
    if (this.props.history.location.pathname.split("/")[1] === "myportfolio") {
      this.fetchMyPortfolio();
    } else {
      this.fetchPortfolio();
    }
  }
  componentWillUnmount() {
    console.log("unmount");
    this.props.clearPortfolio();
  }
  fetchMyPortfolio = async () => {
    try {
      await this.props.getMyPortfolio();
      if (!this.props.portfolio) {
        this.props.history.push("/myportfolio/create");
      }
    } catch (err) {
      return;
    }
  };
  fetchPortfolio = async () => {
    try {
      const id = this.props.location.pathname.split("/")[2];
      await this.props.getPortfolio(id);
      this.checkRecommendation();
    } catch (err) {
      return;
    }
  };
  checkRecommendation = () => {
    const isRecommending = this.props.portfolio.recommendations.find((user) => {
      return user._id === this.props.user.userId;
    });
    if (isRecommending) {
      this.setState({ recommending: true });
    } else {
      return;
    }
  };
  setRecommendationState = () => {
    this.setState({ recommending: !this.state.recommending });
  };
  render() {
    const { portfolio, recommend, unRecommend, match, location } = this.props;
    let profilePic = "";
    let newImage = null;

    if (portfolio) {
      if (portfolio.headerImage) {
        newImage = fixImage(portfolio.headerImage);
      }
      profilePic = fixImage(portfolio.profileImage);
    }
    if (!portfolio) {
      return <Loading />;
    } else {
      let pageType = location.pathname.split("/");
      pageType = pageType[pageType.length - 1];
      return (
        <div className="d-flex flex-grow-1 flex-column h-100">
          {/* <div className="container-fluid p-0">
            {portfolio && portfolio.headerImage && (
              <div
                className="justify-content-start align-items-end mx-0 header-image"
                style={style}
              ></div>
            )}
          </div> */}
          <div
            className="container-fluid"
            style={{
              backgroundColor: "#161716",
              zIndex: 2,
            }}
          >
            <div className="container">
              <div className="row pt-3">
                <div className="col-sm-3 pt-3 ">
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <img
                      src={profilePic}
                      className="rounded-circle profile-pic"
                      alt=""
                      style={{
                        overflow: "hidden",
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-9">
                  <PortfolioHeader portfolio={portfolio} />
                </div>
              </div>
              <div className="row">
                <div className="col-3 d-sm-none d-md-block"></div>
                <div className="col-12 col-md-9 pr-0 pb-2">
                  <PortfolioNav />
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-sm-0 mx-0 p-0 flex-grow-1">
            <div
              className="col-0 col-md-1 "
              style={{ backgroundColor: "#F2F8F6" }}
            ></div>
            <div
              className="col-md-3 col-xl-2 pt-5 pr-5 order-2 order-md-1"
              style={{ backgroundColor: "#F2F8F6" }}
            >
              <RecommendationsSection
                portfolio={portfolio}
                isRecommending={this.state.recommending}
                setRecommendationState={this.setRecommendationState}
                recommend={recommend}
                unRecommend={unRecommend}
              />
            </div>

            <div className="col-md-8 col-xl-9 order-1 order-md-2 flex-grow-1">
              <div className="row flex-grow-1">
                <div className="col-12 container-fluid p-0">
                  {portfolio && portfolio.headerImage && pageType === "about" && (
                    <div
                      className="justify-content-start align-items-end mx-0 header-image"
                      style={{
                        background: `url(${newImage}) center center / cover no-repeat`,
                        maxHeight: 200,
                      }}
                    ></div>
                  )}
                </div>
              </div>
              <div className="col-12 col-xl-9 p-3 pl-xl-5 mr-0 pb-5">
                <Switch>
                  <Route exact path={`${match.path}/about`}>
                    <AboutPage portfolio={portfolio} {...this.props} />
                  </Route>
                  <Route exact path={`${match.url}/work`}>
                    <WorkPage
                      collections={portfolio.collections}
                      videos={portfolio.videos}
                      {...this.props}
                    />
                  </Route>
                  <Route exact path={`${match.url}/timeline`}>
                    <TimelinePage
                      timeline={portfolio.timeline}
                      {...this.props}
                    />
                  </Route>
                  <Route exact path={`${match.url}/comments`}>
                    <CommentsPage
                      comments={portfolio.comments}
                      {...this.props}
                    />
                  </Route>
                  <Route path={match.url}>
                    <Redirect to={`${match.url}/about`} />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    portfolio: state.showPortfolio.portfolio,
    user: state.currentUser.user,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    getMyPortfolio,
    getPortfolio,
    clearPortfolio,
    recommend,
    unRecommend,
    addErrorMessage,
  })(PortfolioPage)
);
