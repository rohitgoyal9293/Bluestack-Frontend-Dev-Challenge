import React from "react";
import en from '../../locales/en/translation';
import de from '../../locales/de/translation';

const PriceModal = ({ priceObj, selectedLang }) => {
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
                <div className="body-head">{selectedLang === 'en' ? en.pricing : de.pricing}</div>
                <table className="table card-table">
                  <tbody>
                    <tr>
                      <td className="light-txt">{selectedLang === 'en' ? en.oneMonth : de.oneMonth}</td>
                      <td className="bold-txt text-right">{priceObj.price.oneMonth}</td>
                    </tr>

                    <tr>
                      <td className="light-txt">{selectedLang === 'en' ? en.sixMonth : de.sixMonth}</td>
                      <td className="bold-txt text-right"> {priceObj.price.sixMonth}</td>
                    </tr>

                    <tr>
                      <td className="light-txt">{selectedLang === 'en' ? en.oneYear : de.oneYear}</td>
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
                  {selectedLang === 'en' ? en.close : de.close}
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
