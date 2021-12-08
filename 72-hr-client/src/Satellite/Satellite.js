import React, {useEffect, useState} from 'react';
import SatelliteDisplay from './SatelliteDisplay.js';
// const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const key = 'Glg8LtHi6mzwwUkgcHFEmQb9yXr9zBFXFcfSBBmU';
const Satellite = (props)  => {
    console.log(props.location);
    const [photoData, setPhotoData] = useState(null);
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        if(props.location === null) {
            return;
        } else {
             const   fetchPhoto = async () =>  {
            const res = await fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${props.location[1]}&lat=${props.location[0]}&api_key=${key}`);
            const json = await res.json();
            setPhotoData(json);
            setToggle(true);
         }
         fetchPhoto();
        }
         return() => {
             setToggle(false);
         }
        }, [props.location])
        console.log(Satellite)
        return (
        <div>
         {
                toggle ? <SatelliteDisplay  photoData={photoData} /> : <p>Nothing to display</p>
            }
        </div>
        )
    }
export default Satellite;