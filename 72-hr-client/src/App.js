
import React, {useEffect, useState} from 'react';
import './App.css';
import Geohash from 'latlon-geohash';
import Events from './Events/Events';
import Weather from './Weather/Weather'
import Satellite from './Satellite/Satellite';



const App = () => {

  const [location, setLocation] = useState(null);
//   const [latitude, setLatitude] = useState("");
// const [longitude, setLongitude] = useState("");
const [geoHash, setGeoHash] = useState('');
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
    // setLatitude(position.coords.latitude);
    // setLongitude(position.coords.longitude);
    setGeoHash(Geohash.encode(position.coords.latitude, position.coords.longitude, 9))
  }

  const err = () => {
    alert('Unable to retrieve location');
  }

  return (
    <div>
      <Satellite location={location} />
      <Weather location={location} />
      <Events geoHash={geoHash} />
    </div>
  )
}

export default App;
