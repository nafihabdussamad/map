import React, { useState,useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Map1 from "../images/map_1.jpg"
import Map2 from "../images/map_2.jpg"

function LeafletMap({ selectedImage }){
  const [map, setMap] = useState(null);

  useEffect(() => {
    const leafletMap = L.map("map",{center:[51.505, -0.09], zoom: 13, minZoom: 13, maxZoom: 16, attributionControl: false});
    setMap(leafletMap);

    return () => {
      leafletMap.remove();
    };
  }, []);

  useEffect(() => {
    if (map) {
        map.eachLayer((layer) => {
          if (layer instanceof L.ImageOverlay) {
            map.removeLayer(layer);
          }
        });

      let newImageOverlay;
      if (selectedImage === 'map_1') {
        newImageOverlay = L.imageOverlay(Map1, [[51.5264, -0.1243], [51.4836, -0.0557]]);
      } else if (selectedImage === 'map_2') {
        newImageOverlay = L.imageOverlay(Map2, [[51.5264, -0.1243], [51.4836, -0.0557]]);
      }

      if (newImageOverlay) {
        map.addLayer(newImageOverlay);
      }
    }
  }, [map, selectedImage]);

  return <div id="map" style={{width:'400px', height: '400px' }}></div>;
};

export default LeafletMap;