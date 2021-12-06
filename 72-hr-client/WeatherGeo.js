import React, {useEffect, useState,} from 'react'; //useEffect
import Button from '@mui/material/Button';
//I am the weather.js inside the weather folder.

//material ui installed in TeamGit don't forget to import it if you use it.

const Weather = () => {
    
    const [weather, setWeather] = useState([]);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [locationDataFound, setLocationDataFound] = useState(false);

    const baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
    const key = '750ee8e3454df1bae3ec03c8ae23da35';
    const [units, setUnits] = useState("imperial"); //&units=${units}
    const [degrees, setDegrees] = useState('F')

    const url =`${baseURL}lat=${latitude}&lon=${longitude}&units=${units}&appid=${key}`;

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
        document.title = "72 Hour Project"
        if (latitude && longitude) {
            console.log("Latitude:", latitude, "Longitude:", longitude);
            setLocationDataFound(true);
        }
    }, [latitude, longitude]);
    
    console.log(url);

    
const getWeather = async () => {
    await fetch(url)
      
    .then ((res) => res.json())
    .then (json => setWeather(json))
    .catch (err => console.log(err))
}
console.log(weather); //console.log doesn't log intermittently returns empty array and correct data

const changeUnit = () => {
        ({ units }) ? setUnits('imperial') : setUnits('metric') //Only works once
        getWeather();
        whatDegrees();
    }

const whatDegrees = () => {
    ({units}) ? setDegrees('F') : setDegrees('C')
}

    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1>Weathery Bit</h1>
                <h3>Data grouping 1</h3>

                {/* <p> {`This is a test of if the units toggle is working. ${units}`} </p>
                <p> {`This is a test of if the degrees toggle is working ${degrees}`} </p>
                <p> {`This is an attempt to get this fucking thing working ${weather.main.temp}. ${degrees}`} </p>  */}
                {/* {weather.description}
                {weather.main.temp}
                {weather.main.feels_like}
                {weather.main.temp_min}
                {weather.main.temp_max}
                {weather.main.pressure}
                {weather.main.humidity} */}
                <Button variant ='contained' onClick={() => {changeUnit()}}> Click me </Button>
                <Button variant ='outline' onClick={() => getWeather()}> Refresh</Button>
            </div>
        </div>
    )
}

//baseURL+Lat={latitude}&lon={longitude}&units={unitselect}&appid={key}
//Units: Standard = Kelvin; Imperial = Fahrenheit; Metric = Celcius.

export default Weather;