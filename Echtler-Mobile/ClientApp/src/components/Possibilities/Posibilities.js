import React from 'react';
import PosibilitiesCard from './PosibilitiesCard';
import UrlaubImg from '../../assets/posibilities/Urlaub.png'
import FreiImg from '../../assets/posibilities/Frei.png'
import WildCampenImg from '../../assets/posibilities/WildCampen.png'
import StaedtereiseImg from '../../assets/posibilities/Stadtereise.png'
import BergreiseImg from '../../assets/posibilities/Bergreise.png'
import StrandurlaubImg from '../../assets/posibilities/Strandurlaub.png'

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';


function Posibilities() {

    const serviceLinks = [
        {
          title: 'Freie Zeit?',
          caption: 'Genießen Sie Ihren Urlaub mit Echtler-Mobile' ,
          image: UrlaubImg
         },
         {
          title: 'Freiheit',
          caption: 'Egal wann, egal wohin' ,
          image: FreiImg
         },
         {
          title: 'Ihre Entscheidung',
          caption: 'Wild oder gepflegt am Campingplatz wohnen.' ,
          image: WildCampenImg
         },
         {
          title: 'Städtereisen',
          caption: ''  ,
          image: StaedtereiseImg
         },
         {
          title: 'Bergfahrten',
          caption: '' ,
          image: BergreiseImg
         },
         {
          title: 'Familienurlaub am Meer',
          caption: '' ,
          image: StrandurlaubImg
         }
      ];

    return (
        <>
        
        <Grid item xs= {12}><Box paddingTop={6} /></Grid>
        <Grid item xs= {12}> <Typography align="center" variant="h2" component="h2">SOMMER, SONNE, MEER</Typography></Grid>
        <Grid item xs= {12}> <Typography align="center" variant="h5" component="h2">Abenteuer und Freiheit - Mit dem Wohnmobil auf neuen Wegen.</Typography></Grid>
        <Grid item container spacing={3}>
            
            {serviceLinks.map((item, index) =>
                <Grid item xs={12} sm={6} md={4}>
                    <PosibilitiesCard title={item.title} caption={item.caption} image={item.image} />
                </Grid>
            )}
        </Grid>
</>

    );
}
export default Posibilities;