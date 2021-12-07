import React from 'react';
import Events from './DisplayEvents';
import {display} from '@mui/system'
import { Pagination, Button, Container, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions } from '@mui/material';


const DisplayEvents = (props) => {

    const Events = props.events;

    return(
            <div>
            {Events._embedded.events.map(myEvents => {
                return (
                    <div key={myEvents.id}>
                        <Container cs={{display:'inline'}}>
                            <Card sx={
                                {
                                maxWidth: 345,
                                
                            }}>
                                <CardActionArea>
                                <CardMedia
                                component= 'img'
                                height='140' 
                                image={myEvents.images[0].url} 
                                alt='event img'/>                       
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                        {myEvents.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {myEvents.dates.start.localDate} 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {myEvents.place} 
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                        </Container>
                    </div>
                    )
                }
                )}
        </div>
       
    )
}

export default DisplayEvents;