import React, {useState, useEffect} from 'react';
import './App.css';
// import Events from './Events/Events';
import Weather from './Weather/Weather'
// import Satellite from './satellite/Satellite';



const App = () => {

  const [location, setLocation] = useState(null);
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
      <Weather location={location} />
    </div>
  )
}

export default App;
