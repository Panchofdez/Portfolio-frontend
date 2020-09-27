import React, { Component } from "react";
import { apiCall } from "../services/apiCall";
import fixImage from "../services/imageOrientation";

class RecommendationsSection extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      recommendations: [],
      recommending: [],
    };
  }
  componentDidMount() {
    this._isMounted = true;
    this.fetchRecommendations();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  fetchRecommendations = async () => {
    console.log(this._isMounted);
    try {
      if (this._isMounted) {
        console.log("arrived");
        const url = `/api/portfolios/${this.props.id}/recommendations`;
        const response = await apiCall.get(url);

        const { recommendations, recommending } = response.data;
        console.log(recommendations);
        this.setState({
          recommendations: [...recommendations],
          recommending: [...recommending],
        });
      }
    } catch (err) {
      console.log("hello");
      return;
    }
  };
  render() {
    const recommendationCards = this.state.recommendations.map((u, i) => {
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
              <a href={`/portfolios/${u.portfolio}`}>{u.name}</a>
            </h6>
          </div>
        </li>
      );
    });
    const recommendingCards = this.state.recommending.map((u, i) => {
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
              <a href={`/portfolios/${u.portfolio}`}>{u.name}</a>
            </h6>
          </div>
        </li>
      );
    });
    const sideRecommendationCards = this.state.recommendations
      .splice(0, 5)
      .map((u, i) => {
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
      });
    const sideRecommendingCards = this.state.recommending
      .splice(0, 5)
      .map((u, i) => {
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
      });
    console.log(this.state);
    return (
      <>
        <div className="my-5">
          <h6 className="my-3" style={{ fontWeight: "bold" }}>
            <a href="#" data-toggle="modal" data-target="#recommendations">
              Recommendations
            </a>
          </h6>

          <ul className="list-unstyled">{sideRecommendationCards}</ul>
        </div>
        <div className="my-5">
          <h6 className="my-3" style={{ fontWeight: "bold" }}>
            <a href="#" data-toggle="modal" data-target="#recommending">
              Recommending
            </a>
          </h6>

          <ul className="list-unstyled">{sideRecommendingCards}</ul>
        </div>
        <div className="modal fade" id="recommendations" tabIndex="-1">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Recommendations</h5>
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ul className="list-unstyled">{recommendationCards}</ul>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="recommending" tabIndex="-1">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Recommendations</h5>
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ul className="list-unstyled">{recommendingCards}</ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RecommendationsSection;
