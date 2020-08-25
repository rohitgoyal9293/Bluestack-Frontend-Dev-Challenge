import React from "react";
import en from '../../locales/en/translation';
import de from '../../locales/de/translation';

const NoRecord = ({
  selectedTab,
  upcomingCampaignList,
  liveCampaignList,
  pastCampaignList,
  selectedLang
}) => {
  return (
    <React.Fragment>
      {selectedTab === "Upcoming Campaigns" &&
        upcomingCampaignList.length === 0 && (
          <h6 className="no-record-found">
             {selectedLang === 'en' ? en.noCampaignFound : de.noCampaignFound}
          </h6>
        )}

      {selectedTab === "Live Campaigns" && liveCampaignList.length === 0 && (
        <h6 className="no-record-found">
          {selectedLang === 'en' ? en.noCampaignFound : de.noCampaignFound}
        </h6>
      )}

      {selectedTab === "Past Campaigns" && pastCampaignList.length === 0 && (
        <h6 className="no-record-found">
          {selectedLang === 'en' ? en.noCampaignFound : de.noCampaignFound}
        </h6>
      )}
    </React.Fragment>
  );
};

export default NoRecord;
