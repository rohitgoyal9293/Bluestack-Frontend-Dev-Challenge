import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from "react-moment";
import en from '../../locales/en/translation';
import de from '../../locales/de/translation';

class PastCampaignTable extends Component {
 
  state = {
    colFixed:'date'
  }


  render() {
    const { selectedTab, pastCampaignList, startDate, selectedLang } = this.props;
    const {colFixed} = this.state;
    return (
      <React.Fragment>
        {selectedTab === "Past Campaigns" && (
          <div className="table-wrapper">
          <div className="table-scroll-cover">
          <table>
            <thead>
              <tr>
                <th className={colFixed === 'date' ? 'sticky-column' : ''}><span onClick={()=>this.setState({colFixed:'date'})} className="markFixed">{selectedLang === 'en' ? en.date : de.date}</span> </th>
                <th className={colFixed === 'campaign' ? 'sticky-column' : ''}><span onClick={()=>this.setState({colFixed:'campaign'})} className="markFixed">{selectedLang === 'en' ? en.campaign : de.campaign}</span></th>
                <th className={colFixed === 'view' ? 'sticky-column' : ''}><span onClick={()=>this.setState({colFixed:'view'})} className="markFixed">{selectedLang === 'en' ? en.view : de.view}</span></th>
                <th className={colFixed === 'action' ? 'sticky-column' : ''}><span onClick={()=>this.setState({colFixed:'action'})} className="markFixed">{selectedLang === 'en' ? en.action : de.action}</span></th>
              </tr>
            </thead>
            <tbody>
              {pastCampaignList.map((list, i) => (
                <tr key={i}>
                  <td className={colFixed === 'date' ? 'sticky-column' : ''} data-label="date">
                    <div className="campaign-date">
                      <Moment
                        format="MMM YYYY, DD"
                        date={list.createdOn}
                      ></Moment>
                    </div>
                    <div className="campaign-date-from-now">
                      <Moment fromNow>{list.createdOn}</Moment>
                    </div>
                  </td>
                  <td className={colFixed === 'campaign' ? 'sticky-column' : ''} data-label="campaign">
                    <div className="clearfix campaign-details">
                      <div className="campaign-img">
                        <img
                         alt="campaign"
                          src={require("../../images/campaign-images/" +
                            list.image_url)}
                        />
                      </div>
                      <div className="campaign-info">
                        <div className="campaign-name">{list.name}</div>
                        <div className="campaign-region">{list.region}</div>
                      </div>
                    </div>
                  </td>
                  <td className={colFixed === 'view' ? 'sticky-column' : ''} data-label="view">
                    <a
                      onClick={() => this.props.setPrice(list)}
                      data-toggle="modal"
                      data-target="#pricingModal"
                      className="icon-details clearfix"
                    >
                      <div className="icon-img">
                        <img alt="price" src={require("../../images/Price.png")} />
                      </div>
                      <div className="icon-name">{selectedLang === 'en' ? en.viewPricing : de.viewPricing}</div>
                    </a>
                  </td>

                  <td className={colFixed === 'action' ? 'sticky-column' : ''} data-label="actions">
                    <a
                      href={list.csv}
                      target="_blank"
                      className="icon-details clearfix"
                    >
                      <div className="icon-img">
                        <img alt="file" src={require("../../images/file.png")} />
                      </div>
                      <div className="icon-name">CSV</div>
                    </a>

                    <a
                      href={list.report}
                      target="_blank"
                      className="icon-details clearfix"
                    >
                      <div className="icon-img">
                        <img
                          alt="report"
                          src={require("../../images/statistics-report.png")}
                        />
                      </div>
                      <div className="icon-name">{selectedLang === 'en' ? en.report : de.report}</div>
                    </a>

                    <a className="icon-details clearfix pos-relative calender-details">
                      <DatePicker
                        selected={startDate}
                        onChange={(value, e) =>
                          this.props.changeDate(value, list.id)
                        }
                        name={list.name}
                      />

                      <div className="calender-img">
                        <img alt="calender" src={require("../../images/calendar.png")} />
                      </div>
                      <div className="calender-name">{selectedLang === 'en' ? en.scheduleAgain : de.scheduleAgain}</div>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </div> 
        )}
      </React.Fragment>
    );
  }
}

export default PastCampaignTable;
