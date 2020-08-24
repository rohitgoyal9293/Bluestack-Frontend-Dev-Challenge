import React, { Component } from "react";

class NavTab extends Component {
  render() {
    const { selectedTab } = this.props;
    return (
      <React.Fragment>
        <ul className="nav nav-tabs campaign-tabs">
          <li className="nav-item">
            <a
              onClick={() => this.props.setSelectedTab("Upcoming Campaigns")}
              className={`tab ${
                selectedTab === "Upcoming Campaigns"
                  ? "nav-link active"
                  : "nav-link"
              }`}
            >
              Upcoming Campaigns
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => this.props.setSelectedTab("Live Campaigns")}
              className={`tab ${
                selectedTab === "Live Campaigns"
                  ? "nav-link active"
                  : "nav-link"
              }`}
            >
              Live Campaigns
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => this.props.setSelectedTab("Past Campaigns")}
              className={`tab ${
                selectedTab === "Past Campaigns"
                  ? "nav-link active"
                  : "nav-link"
              }`}
            >
              Past Campaigns
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default NavTab;
