import React, {useState, useEffect} from 'react';
import './App.css';
// import Events from './Events/Events';
import Weather from './Weather/Weather';
// import Satellite from './satellite/Satellite';



function App() {

  const [location, setLocation] = useState([]);
  console.log(location);
    
  
  useEffect(() => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(success, err);
    }
  }, [])

  const success = position => {
    console.log(position.coords.latitude, position.coords.longitude);

    setLocation([position.coords.latitude, position.coords.longitude]);
  }

  const err = () => {
    alert('Unable to retrieve location');
  }
    
  return (
    <div>
      {/* <Satellite latitude={latitude} longitude={longitude} /> */}
      <Weather location={location} />
      {/* <Events latitude={latitude} longitude={longitude} /> */}
    </div>
  );
}

export default App;
