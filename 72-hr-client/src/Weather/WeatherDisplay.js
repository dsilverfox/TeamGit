import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Weather.css'

const WeatherDisplay = (props) =>{

    return(
        <div className='display'>
        <h1>Weather Information</h1>
            <ul className='weatherInfo'>
                    <li>{`The official temperature is ${props.weather.main.temp} degrees.`}</li>
                    <li>{`However, to you it may feel ${props.weather.main.feels_like} degrees.`}</li>
                    <li>{`The temperature is supposed to get down to ${props.weather.main.temp_min} degrees.`}</li>
                    <li>{`The temperature will be as high as ${props.weather.main.temp_max} degrees.`} </li>
                    <li>{`The atmospheric pressure is ${props.weather.main.pressure} bars.`}</li>
                    <li>{`The humidity is ${props.weather.main.humidity}%`}</li>
                </ul>
            <Stack direction='row'>
            <Button variant='contained' className='button' onClick={props.changeUnit}>Unit Toggle</Button>
            </Stack>
             </div>
    )};
export default WeatherDisplay;