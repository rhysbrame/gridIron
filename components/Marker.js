import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';

const Marker = ({ text, tooltip }) => {
  return (
    <div className="map-marker">
      <Icon icon={locationIcon} className="map-marker__icon" />
      <span className="map-marker__icon-text" title={tooltip}>
        {text}
      </span>
    </div>
  );
};

export default Marker;
