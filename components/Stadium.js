import React from 'react';

const Stadium = (props) => {
  const { stadium } = props;

  if (stadium) {
    return (
      <>
        <div className="stadium-container">
          <h1 className="heading-1">Stadium</h1>
          <h2 className="heading-2">
            {stadium ? stadium.Name : 'Canton, OHIO'}
          </h2>
          <ul>
            <li>{stadium.City}</li>
            <li>{stadium.State}</li>
            <li>{stadium.Country}</li>
            <li>{stadium.GeoLat}</li>
            <li>{stadium.GeoLong}</li>
            <li>{stadium.Type}</li>
            <li>{stadium.PlayingSurface}</li>
            <li>{stadium.Capacity}</li>
          </ul>
        </div>
      </>
    );
  }
  return (
    <div className="stadium-container">
      <h1 className="heading-1">No Stadium</h1>
    </div>
  );
};

export default Stadium;
