import React from "react";
import '../css/Selector.css';

function Selector({ onChange }){
    return (
      <div className="select-group">
        <label htmlFor="map-select">Select Map:</label>
        <div className="select-box-container">
            <select className="map-select" onChange={onChange}>
            <option value="map_1">Map 1</option>
            <option value="map_2">Map 2</option>
            </select>
        </div>
      </div>
    );
  };

export default Selector;