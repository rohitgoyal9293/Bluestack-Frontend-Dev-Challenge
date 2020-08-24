import React from "react";

const PriceModal = ({ priceObj }) => {
  const image_url_path = priceObj.image_url
    ? priceObj.image_url
    : "Bitmap-1.png";
  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="pricingModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog card-model" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="card-head clearfix">
                <div className="header-img">
                  <img
                   alt="Campaign"
                    src={require("../../images/campaign-images/" +
                      image_url_path)}
                  />
                </div>
                <div className="header-info">
                  <div className="heading">{priceObj.name}</div>
                  <div className="region">{priceObj.region}</div>
                </div>
              </div>

              <div className="card-section">
                <div className="body-head">Pricing</div>
                <table className="table card-table">
                  <tbody>
                    <tr>
                      <td className="light-txt">1 Month</td>
                      <td className="bold-txt text-right">{priceObj.price.oneMonth}</td>
                    </tr>

                    <tr>
                      <td className="light-txt">6 Month</td>
                      <td className="bold-txt text-right"> {priceObj.price.sixMonth}</td>
                    </tr>

                    <tr>
                      <td className="light-txt">1 Year</td>
                      <td className="bold-txt text-right">{priceObj.price.oneYear}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="card-foot text-center">
                <button
                  type="button"
                  data-dismiss="modal"
                  aria-label="close"
                  className="btn btn-md btn-default"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PriceModal;
