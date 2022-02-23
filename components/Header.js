import React from 'react';

const Header = (props) => {
  const { data } = props;
  return (
    <>
      <header className="header">
        <h1 className="heading">#gridIron</h1>
        <h2>{data.Name}</h2>
        <img src={data.WikipediaLogoUrl} alt="logo" />
        <img src={data.WikipediaWordMarkUrl} alt="wordmark" />
      </header>
    </>
  );
};

export default Header;
