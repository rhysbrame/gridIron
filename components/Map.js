import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const API_KEY = process.env.GOOGLE_MAP_API_KEY;

class Map extends Component {
  // Default center set to Canton, OH.
  static defaultProps = {
    center: {
      lat: 40.7989,
      lng: -81.3784,
    },
    zoom: 12,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '30rem', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyD6dMC5N0xzIkw78vBj3keCSLZuD68K6BM',
            language: 'en',
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={{
            lat: this.props.stadium.GeoLat,
            lng: this.props.stadium.GeoLong,
          }}
        >
          <Marker
            key={this.props.stadium.stadiumID}
            lat={this.props.stadium.GeoLat}
            lng={this.props.stadium.GeoLong}
            text={this.props.stadium.Name}
            tooltip={this.props.stadium.Name}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
