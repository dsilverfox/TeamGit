import React, {useState, useEffect} from 'react';
import './App.css';
import Events from './Events/Events';



function App() {

  const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [locationDataFound, setLocationDataFound] = useState(false);
    
  
    useEffect(() => {
      geoLocation();
    }, []);
  
    const geoLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };
  
    const showPosition = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    };
  
    useEffect(() => {
      if (latitude && longitude) {
        console.log("Latitude:", latitude, "Longitude:", longitude);
        setLocationDataFound(true);
      }
    }, [latitude, longitude]);
    
  return (
    <div>
      OUR AWESOME APP WILL GO HERE
    </div>
  );
}

export default App;
