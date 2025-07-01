'use client';

import { useState, useEffect } from 'react';
import * as Mapbox from 'react-map-gl/mapbox';
import { useScrollProgress } from './ScrollContext';

export default function Map({children, style, latitude=30.278, longitude=-97.7431, zoom=12}) {

  const [viewState, setViewState] = useState({
    longitude: -97.7431,
    latitude: 30.278,
    zoom: zoom || 12,
  });

  useEffect(() => {
    setViewState({
      latitude: latitude,
      longitude: longitude,
      zoom: zoom ?? 12
    });
  }, [latitude, longitude, zoom]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Mapbox.Map
        {...viewState}
        interactive={false}
        onMove={evt => setViewState(evt.viewState)}
        onError={(e) => console.error('Map error:', e)}
        onLoad={() => console.log('Map loaded successfully')}
        style={{
          position: 'absolute',
          height: '100%', 
          width: '100%',
          zIndex: 2,
          ...style
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        projection="globe"
      >
        {children}
      </Mapbox.Map>
    </div>
  );
} 