import React, {useState, useEffect} from 'react';


const Events = () => {

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
  
    // useEffect(() => {
    //   fetchEvents();
    // });

    // fetchEvents = () => {
    //     console.log(position)
    // }

    // fetchEvents();

    return(
       <div>
           LOCATION
       </div> 
        )
}
    export default Events;