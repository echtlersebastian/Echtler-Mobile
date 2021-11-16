import { Box, Grid } from '@material-ui/core';
import React from 'react';
import PriceListCard from './PriceListCard';

function PriceList(){

    return(
        <>
         {/* This is for spacing the Appbar out: */}
         <Grid item xs={12}><Box paddingTop={2} /></Grid>
        
            <PriceListCard></PriceListCard> 
            {/* TODO: Note for Future Devs: I am sorry for this Component, but i fuked up. I wanna seperate only the Cards out, but during implentation i was in the tunnel and wrote everything there. :() */}
        </>
    );

} 
export default PriceList;