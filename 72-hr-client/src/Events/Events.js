import React, {useState, useEffect, Suspense} from 'react';
import { Button, Container, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions } from '@mui/material';

const Events = (props) => {
    const key = 'FnaYTDcosjKQCuUiXFfwUinwdIVYh0ag';
    // const geohash = props.geoHash


    const [events, setEvents] = useState([])
    
    
    

    const getEvents = async () => {
       await fetch(`https://cors-anywhere.herokuapp.com/app.ticketmaster.com/discovery/v2/events.json?geoPoint=${props.geoHash}&apikey=${key}`, {
            method: 'GET',
            headers:new Headers({
                "Content-type":'application/json',
                "Access-Control-Allow-Origin":'*'
            })
        })
        .then ((res) => res.json())
        .then ((json) => setEvents(json))
        .then (console.log(events))

}
useEffect(() => { 
    getEvents();
}, [props.geoHash])

    return(
        <div>
           <Suspense fallback={<div>Loading Events</div>}>
            <Container>
               EVENTS WILL GO HERE 
            </Container>
           </Suspense>
           </div>
    )
}
    export default Events;