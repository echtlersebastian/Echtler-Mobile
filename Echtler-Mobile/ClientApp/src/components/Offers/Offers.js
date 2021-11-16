import React from 'react';
import OfferCard from './OfferCard';
import WohnmobilPortfolioBild from '../../assets/offerings/Wohnmobil.png'
import AusstattungPortfolioBild from '../../assets/offerings/Ausstattung.png'
import ExtrasPortfolioBild from '../../assets/offerings/Extras.png'
import PacklistePortfolioBild from '../../assets/offerings/Packliste.png'
import PreislistePortfolioBild from '../../assets/offerings/Preisliste.png'
import AGBPortfolioBild from '../../assets/offerings/AGB.png'

import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';


function Offers() {

    const OfferLinks = [

        {
            title: 'Unsere Wohnmobile',
            caption: 'Schauen Sie sich hier unsere Wohnmobile an.',
            image: WohnmobilPortfolioBild,
            analytics: '/Wohnmobile'
        },
        {
            title: 'Ausstattung',
            caption: 'Vieles das Sie brauchen, ist bei uns im Preis enthalten.',
            image: AusstattungPortfolioBild,
            analytics: '/Ausstattung'
        },
        {
            title: 'Mögliche Extras',
            caption: 'Bei uns bleiben keine Wünsche offen.',
            image: ExtrasPortfolioBild,
            analytics: '/Extras'
        },
        {
            title: 'Packliste',
            caption: 'Damit Sie nichts vergessen.',
            image: PacklistePortfolioBild,
            analytics: '/Packliste'
        },
        {
            title: 'Preisliste 2021',
            caption: 'Unser aktuelles Angebot für Sie!',
            image: PreislistePortfolioBild,
            analytics: '/Preisliste'
        },
        {
            title: 'AGB',
            caption: 'Unsere Vertragsbedingungen',
            image: AGBPortfolioBild,
            analytics: '/Agb'
        }

    ];

    return (

        <Grid item container spacing={3}>
        <Grid item xs= {12}><Box paddingTop={1} /></Grid>
        <Grid item xs= {12}> <Typography align="center" variant="h2" component="h2">Unser Angebot</Typography></Grid>
        <Grid item xs= {12}> <Typography align="center" variant="h5" component="h2">Wir machen Ihren Traumurlaub perfekt</Typography></Grid>
            
            {OfferLinks.map((item, index) =>
                <Grid item xs={12} sm={6} md={4}>
                    <OfferCard title={item.title} caption={item.caption} image={item.image} link={item.analytics} />
                </Grid>
            )}
        </Grid>


    );
}
export default Offers;