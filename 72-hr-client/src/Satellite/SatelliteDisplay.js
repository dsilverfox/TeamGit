
import React from "react";
const SatelliteDisplay = (props) => {
    return(
        <div>
            <h1>Image from Nasa Earth Api</h1>
            <img src={props.photoData} atl="image from" />
        </div>
    );
};
export default SatelliteDisplay;
