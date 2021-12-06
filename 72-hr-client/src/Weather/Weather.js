 import React, { useEffect, useState } from 'react'; //useEffect
 
 //material ui installed in TeamGit don't forget to import it if you use it.
 const Weather = props => {
     
     const [weather, setWeather] = useState([]);
     const baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
     const key = '750ee8e3454df1bae3ec03c8ae23da35';
    //  const key = '63dcb297673179ea05ba355cfa80fe06';
     const [units, setUnits] = useState("imperial"); //&units=${units}

     useEffect(() => {
         getWeather();
     }, [props.location])

     const getWeather = async () => {
         let response = await fetch(`${baseURL}?lat=${props.location[0]}&lon=${props.location[1]}&appid=${key}`);
         let json = await response.json();

         setWeather(json);
     }

     console.log(weather)
     const changeUnit = () => {
         (units === 'imperial') ? setUnits('metric') : setUnits('imperial') //requires two clicks and works once.
         getWeather();
         console.log(units);
     } 

     return (
         <div className='main'>
             <div className='mainDiv'>
                 {/* <ul className='weatherInfo'>
                     <li>{`This is an attempt to get this fucking thing working ${weather.main.temp}. degrees.`}</li>
                     <li>{`However, to you it may feel ${weather.main.feels_like} degrees.`}</li>
                     <li>{`The temperature is supposed to get down to ${weather.main.min} degrees.`}</li>
                     <li>{`The temperature will be as high as ${weather.main.max} degrees.`} </li>
                     <li>{`The atmospheric pressure is ${weather.main.pressure} bars.`}</li>
                     <li>{`The humidity is ${weather.main.humidity}%`}</li>
                 </ul> */}


                 <button onClick={changeUnit}> Click me </button> 
                 <button onClick={getWeather}> What's the Weather?</button>
             </div>
         </div>
     )
 }
 //baseURL+Lat={latitude}&lon={longitude}&units={unitselect}&appid={key}
 //Units: Standard = Kelvin; Imperial = Fahrenheit; Metric = Celcius.
 export default Weather;
 