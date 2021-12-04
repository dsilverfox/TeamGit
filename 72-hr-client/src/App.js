import React, {useEffect, useState} from 'react';

import './App.css';
import './Weather/Weather';
// import './Events/Events';
// import './satellite/Satellite';

function App() {
  const [location, setLocation] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');



    const geoLocation = () => {
      if (navigator.geolocation) {
      console.log(geoLocation)
      // navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    geoLocation();
  };


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
