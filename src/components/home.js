import React, { Component } from "react";
import { getCampaigns } from "../services/campaignService";
import PriceModal from "./common/priceModal";
import NavTab from "./common/navTab";
import UpcomingCampaignTable from "./common/upcomingCampaignTable";
import LiveCampaignTable from "./common/liveCampaignTable";
import PastCampaignTable from "./common/pastCampaignTable";
import NoRecord from "./common/noRecord";

class Home extends Component {
  state = {
    upcomingCampaignList: [],
    liveCampaignList: [],
    pastCampaignList: [],
    selectedTab: "Upcoming Campaigns",
    priceObj: {
      id: "",
      name: "",
      region: "",
      price: {
        oneMonth: "",
        sixMonth: "",
        oneYear: "",
      },
      image_url: "",
    },
    startDate: new Date(),
  };

  // on component load
  componentDidMount() {
    this.getCampaigns();
  }

  // fetch campaigns
  async getCampaigns() {
    let campaignList = [];
    if (JSON.parse(localStorage.getItem("campaignList"))) {
      campaignList = JSON.parse(localStorage.getItem("campaignList"));
    } else {
      const { data } = await getCampaigns();
      campaignList = data;
      localStorage.setItem("campaignList", JSON.stringify(campaignList));
    }
    const upcomingCampaignList = campaignList.filter(
      (list) => {
         let todayDate = new Date();
         let campaignDate = new Date(list.createdOn);
         return campaignDate.setHours(0,0,0,0) > todayDate.setHours(0,0,0,0)
      }
    );
    const liveCampaignList = campaignList.filter(
      (list) => {
        let todayDate = new Date();
        let campaignDate = new Date(list.createdOn);
        return campaignDate.setHours(0,0,0,0) === todayDate.setHours(0,0,0,0)
     }
    );
    const pastCampaignList = campaignList.filter(
      (list) => {
        let todayDate = new Date();
        let campaignDate = new Date(list.createdOn);
        return campaignDate.setHours(0,0,0,0) < todayDate.setHours(0,0,0,0)
       }
    );
    this.setState({ upcomingCampaignList, liveCampaignList, pastCampaignList });
  }

  // change tab
  handleSetSelectedTab = (selectedTab) => {
    this.setState({ selectedTab });
  };

  // Set view price modal
  handleSetPrice = (obj) => {
    const priceObj = { ...this.state.priceObj };
    priceObj.name = obj.name;
    priceObj.region = obj.region;
    priceObj.image_url = obj.image_url;
    priceObj.price.oneMonth = obj.price.oneMonth;
    priceObj.price.sixMonth = obj.price.sixMonth;
    priceObj.price.oneYear = obj.price.oneYear;
    this.setState({ priceObj: obj });
  };

  // Resechdule Campaigns
  handleChangeDate = (date, id) => {
    const updatedTimestamp = new Date(date).getTime();
    if (JSON.parse(localStorage.getItem("campaignList"))) {
      let campaignList = JSON.parse(localStorage.getItem("campaignList"));
      for (let list of campaignList) {
        if (list.id === id) {
          list.createdOn = updatedTimestamp;
          break;
        }
      }

      localStorage.setItem("campaignList", JSON.stringify(campaignList));
      this.getCampaigns();
    }
  };

  render() {
    const {
      upcomingCampaignList,
      liveCampaignList,
      pastCampaignList,
      selectedTab,
      priceObj,
      startDate,
    } = this.state;
    return (
      <React.Fragment>
        <div className="custom-container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="main-head">Manage Campaigns</h1>

              {/* Campaign Tab list */}
              <NavTab
                selectedTab={selectedTab}
                setSelectedTab={this.handleSetSelectedTab}
              />

              {/* Upcoming Campaign Table */}
              <UpcomingCampaignTable
                selectedTab={selectedTab}
                upcomingCampaignList={upcomingCampaignList}
                startDate={startDate}
                setPrice={this.handleSetPrice}
                changeDate={this.handleChangeDate}
              />

              {/* Live Campaign Table */}
              <LiveCampaignTable
                selectedTab={selectedTab}
                liveCampaignList={liveCampaignList}
                startDate={startDate}
                setPrice={this.handleSetPrice}
                changeDate={this.handleChangeDate}
              />

              {/* Past Campaign Table */}
              <PastCampaignTable
                selectedTab={selectedTab}
                pastCampaignList={pastCampaignList}
                startDate={startDate}
                setPrice={this.handleSetPrice}
                changeDate={this.handleChangeDate}
              />

              {/* No Record Found */}
              <NoRecord
                selectedTab={selectedTab}
                upcomingCampaignList={upcomingCampaignList}
                liveCampaignList={liveCampaignList}
                pastCampaignList={pastCampaignList}
              />
            </div>
          </div>
        </div>

        {/*Price modal*/}

        <PriceModal priceObj={priceObj} />
      </React.Fragment>
    );
  }
}

export default Home;
