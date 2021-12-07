 import React, { useEffect, useState } from 'react'; //useEffect
 import WeatherDisplay from './WeatherDisplay';
 import './Weather.css'
 
 //material ui installed in TeamGit don't forget to import it if you use it.
 const Weather = props => {
     
     const [weather, setWeather] = useState([]);
     const baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
     const key = '750ee8e3454df1bae3ec03c8ae23da35';
    // EXTRA KEY const key = '63dcb297673179ea05ba355cfa80fe06';
    const [toggle, setToggle] = useState(false); 
    const [units, setUnits] = useState("imperial");

     const getWeather = async () => {
         const response = await fetch(`${baseURL}lat=${props.location[0]}&lon=${props.location[1]}&units=${units}&appid=${key}`);
         const json = await response.json();
         setWeather(json);
         setToggle(true);
     }

//begin useEffect
     useEffect(() => {
         if (props.location === null) {
             return;
         } else {
             getWeather();
         }
         return () => {
             setToggle(false);         
         }
      
     }, [props.location])

//end useEffect

     const changeUnit = () => {
         (units === 'imperial') ? setUnits('metric') : setUnits('imperial') //requires two clicks and works once.
         getWeather();
         console.log(units);
     }
     console.log(weather)

    return (
         <div>
             {
                 toggle ? <WeatherDisplay weather={weather} changeUnit={changeUnit}/> : <p>No Data to Display Yet</p>
             }
             <div>
                 <button className='button' onClick={changeUnit}>Click me!</button>
             </div>
         </div>
            )
 }

 export default Weather;
