import React, {useState, useEffect} from 'react';
import DisplayEvents from './DisplayEvents/DisplayEvents';


const Events = (props) => {
    const key = 'FnaYTDcosjKQCuUiXFfwUinwdIVYh0ag';
    // const geohash = props.geoHash


    const [events, setEvents] = useState([]);
    const [toggle, setToggle] = useState(false)
    // const [eventArray, setEventArray] = useState({});
    
    
    

   useEffect(() => {
       if (props.geoHash === null) {
           return;
        } else {
            const getEvents = async () => {
                const response = await fetch(`https://cors-anywhere.herokuapp.com/app.ticketmaster.com/discovery/v2/events.json?geoPoint=${props.geoHash}&apikey=${key}`);
                const json = await response.json();

                setEvents(json);
                setToggle(true);
                }
                getEvents();
            }

            return () => {
                setToggle(false);
            }
    }, [props.geoHash])

    return(
        <div>
            Event component
            {
                toggle ? <DisplayEvents events={events} /> : <p>Nothing to display</p>
            }
           </div>
    )
}
    export default Events;