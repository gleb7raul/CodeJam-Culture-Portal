import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const MyMapComponent = ({
  mapState,
  markGeometry,
  ...rest
}) => (
  <YMaps>
    <Map state={mapState} {...rest}>
      <Placemark geometry={markGeometry} />
    </Map>
  </YMaps>
);

export default MyMapComponent;
