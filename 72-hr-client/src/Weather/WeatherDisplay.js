import React from 'react'

const WeatherDisplay = (props) =>{

    return(
        <div>

        <h1>Weathery Bit</h1>
                 <h3>Data grouping 1</h3>
<ul className='weatherInfo'>
                <li>{`This is an attempt to get this fucking thing working ${props.temp}. degrees.`}</li>
                <li>{`However, to you it may feel ${props.feels} degrees.`}</li>
                <li>{`The tempurature is supposed to get down to ${props.min} degrees.`}</li>
                <li>{`The temperature will be as high as ${props.max} degrees.`} </li>
                <li>{`The atmospheric pressure is ${props.pressure} bars.`}</li>
                <li>{`The humidity is ${props.humidity}%`}</li>
</ul>

{/*Crashes the app if it loads before we have an array in weather.*/ }

<button onClick={props.changeUnit}> Click me </button> {/*toggle works kind of, must click twice to get it to toggle the first time. */ }
<button onClick={props.getWeather}> What's the Weather?</button>
{/* have to sometimes click twice to get it to fire */ }

</div>
    )};
export default WeatherDisplay;