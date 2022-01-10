import React from 'react';

const Stadium = (props) => {
  const { stadium } = props;
  return (
    <>
      <div className="stadium-container">
        <h1>Stadium</h1>
        <h3>{stadium ? stadium.Name : 'Canton, OHIO'}</h3>
      </div>
    </>
  );
};

export default Stadium;
