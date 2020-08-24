import React from "react";

const NoRecord = ({
  selectedTab,
  upcomingCampaignList,
  liveCampaignList,
  pastCampaignList,
}) => {
  return (
    <React.Fragment>
      {selectedTab === "Upcoming Campaigns" &&
        upcomingCampaignList.length === 0 && (
          <h6 className="no-record-found">No upcoming campaign found</h6>
        )}

      {selectedTab === "Live Campaigns" && liveCampaignList.length === 0 && (
        <h6 className="no-record-found">No live campaign found</h6>
      )}

      {selectedTab === "Past Campaigns" && pastCampaignList.length === 0 && (
        <h6 className="no-record-found">No past campaign found</h6>
      )}
    </React.Fragment>
  );
};

export default NoRecord;
