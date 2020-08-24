import React from "react";

const NavBar = () => {
  return (
    <React.Fragment>
      <header className="site-header">
        <div className="custom-container">
          <div className="logo">
            <img src={require("../images/logo.png")} alt="logo" />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
