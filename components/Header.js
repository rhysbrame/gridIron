import React from 'react';

const Header = (props) => {
  const { data } = props;
  return (
    <>
      <header className="header">
        <div className="header__wordmark-container">
          <img
            className="header__wordmark-img"
            src={data.WikipediaWordMarkUrl}
            alt="wordmark"
          />
        </div>
        <div className="header__logo-container">
          <img
            className="header__logo-img"
            src={data.WikipediaLogoUrl}
            alt="logo"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
