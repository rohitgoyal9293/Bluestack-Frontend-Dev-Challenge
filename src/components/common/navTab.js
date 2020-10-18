import React, { Component } from "react";
import en from '../../locales/en/translation';
import de from '../../locales/de/translation';

class NavTab extends Component {
  render() {
    const { selectedTab, selectedLang } = this.props;
    return (
      <React.Fragment>
        <ul className="nav nav-tabs campaign-tabs">
        <li className="nav-item">
            <a
              onClick={() => this.props.setSelectedTab("Past Campaigns")}
              className={`tab ${
                selectedTab === "Past Campaigns"
                  ? "nav-link active"
                  : "nav-link"
              }`}
            >
              {selectedLang === 'en' ? en.pastCampaigns : de.pastCampaigns}
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
              {selectedLang === 'en' ? en.liveCampaigns : de.liveCampaigns}
            </a>
          </li>


          <li className="nav-item">
            <a
              onClick={() => this.props.setSelectedTab("Upcoming Campaigns")}
              className={`tab ${
                selectedTab === "Upcoming Campaigns"
                  ? "nav-link active"
                  : "nav-link"
              }`}
            >
              {selectedLang === 'en' ? en.upcomingCampaigns : de.upcomingCampaigns}
            </a>
          </li>
         
        </ul>
      </React.Fragment>
    );
  }
}

export default NavTab;
