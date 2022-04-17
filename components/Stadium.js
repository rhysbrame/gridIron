import React from 'react';
import Map from '../components/Map';

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
          <ul className="stadium-container__list">
            <li>
              {stadium.City}, {stadium.State}
            </li>
            <li>Capacity: {stadium.Capacity}</li>
            <li>Arena Type: {stadium.Type}</li>
            <li>Surface: {stadium.PlayingSurface}</li>
          </ul>
          <div className="stadium-map">
            <Map stadium={stadium} />
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="stadium-container">
      <h1 className="heading-1">Stadium</h1>
    </div>
  );
};

export default Stadium;
