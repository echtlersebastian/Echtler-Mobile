import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';

function Wohnmobile() {
    
    const images = [
        {
            original: '/pics/compressed/1.jpg',
            thumbnail: '/pics/vorschau/1.png',
        }, {
            original: '/pics/compressed/2.jpg',
            thumbnail: '/pics/vorschau/2.png',
        }, {
            original: '/pics/compressed/3.jpg',
            thumbnail: '/pics/vorschau/3.png',
        }, {
            original: '/pics/compressed/4.jpg',
            thumbnail: '/pics/vorschau/4.png',
        }, {
            original: '/pics/compressed/5.jpg',
            thumbnail: '/pics/vorschau/5.png',
        },{
            original: '/pics/compressed/28.jpg',
            thumbnail: '/pics/vorschau/28.png',
        }, {
            original: '/pics/compressed/6.jpg',
            thumbnail: '/pics/vorschau/6.png',
        }, {
            original: '/pics/compressed/7.jpg',
            thumbnail: '/pics/vorschau/7.png',
        }, {
            original: '/pics/compressed/8.jpg',
            thumbnail: '/pics/vorschau/8.png',
        }, {
            original: '/pics/compressed/9.jpg',
            thumbnail: '/pics/vorschau/9.png',
        }, {
            original: '/pics/compressed/10.jpg',
            thumbnail: '/pics/vorschau/10.png',
        }, {
            original: '/pics/compressed/11.jpg',
            thumbnail: '/pics/vorschau/11.png',
        }, {
            original: '/pics/compressed/12.jpg',
            thumbnail: '/pics/vorschau/12.png',
        }, {
            original: '/pics/compressed/13.jpg',
            thumbnail: '/pics/vorschau/13.png',
        }, {
            original: '/pics/compressed/29.jpg',
            thumbnail: '/pics/vorschau/29.png',
        }, {
            original: '/pics/compressed/30.jpg',
            thumbnail: '/pics/vorschau/30.png',
        }, {
            original: '/pics/compressed/31.jpg',
            thumbnail: '/pics/vorschau/31.png',
        }, {
            original: '/pics/compressed/14.jpg',
            thumbnail: '/pics/vorschau/14.png',
        }, {
            original: '/pics/compressed/15.jpg',
            thumbnail: '/pics/vorschau/15.png',
        }, {
            original: '/pics/compressed/16.jpg',
            thumbnail: '/pics/vorschau/16.png',
        }, {
            original: '/pics/compressed/17.jpg',
            thumbnail: '/pics/vorschau/17.png',
        }, {
            original: '/pics/compressed/18.jpg',
            thumbnail: '/pics/vorschau/18.png',
        }, {
            original: '/pics/compressed/19.jpg',
            thumbnail: '/pics/vorschau/19.png',
        }, {
            original: '/pics/compressed/20.jpg',
            thumbnail: '/pics/vorschau/20.png',
        }, {
            original: '/pics/compressed/21.jpg',
            thumbnail: '/pics/vorschau/21.png',
        }, {
            original: '/pics/compressed/22.jpg',
            thumbnail: '/pics/vorschau/22.png',
        }, {
            original: '/pics/compressed/23.jpg',
            thumbnail: '/pics/vorschau/23.png',
        }, {
            original: '/pics/compressed/24.jpg',
            thumbnail: '/pics/vorschau/24.png',
        }, {
            original: '/pics/compressed/25.jpg',
            thumbnail: '/pics/vorschau/25.png',
        }, {
            original: '/pics/compressed/26.jpg',
            thumbnail: '/pics/vorschau/26.png',
        }, {
            original: '/pics/compressed/27.jpg',
            thumbnail: '/pics/vorschau/27.png',
        }, 
    ];
    const specs = [
        { attribute: "Hersteller", value: "Carado Hymer Group" },
        { attribute: "Modelbezeichnung", value: "T 338" },
        { attribute: "Motorisierung", value: "2,3 l Multijet Diesel (102 kW / 140 PS)" },
        { attribute: "Fahrgestell", value: "Fiat Tiefrahmen" },
        { attribute: "Bauweise", value: "Teilintegriert" },
        { attribute: "Modeljahr", value: "2020" },
        { attribute: "Gesamtlänge", value: "6,99 m" },
        { attribute: "Gesamtbreite", value: "2,32 m" },
        { attribute: "Gesamthöhe", value: "2,90 m" },
        { attribute: "Zul. Gesamtgewicht", value: "3,49 t" },
        { attribute: "Max. Zuladung", value: "600 kg" },
        { attribute: "Max. Zuladung (Heckgarage)", value: "150 kg" },
        { attribute: "Abgasnorm", value: "Euro 6d-Temp" },
        { attribute: "Erforderliche Führerscheinklasse", value: "B (3)" }
    ];

    return (
        <>
            <Grid container paddingTop={8}>
                {/* This is for spacing the Appbar out: */}
                
                <Grid item xs={12}><Box paddingTop={2} /></Grid>
                <Grid item xs={12}>
                    <Typography variant="h3" align="center">Unsere Wohnmobile</Typography>
                </Grid>
                
                <Grid item xs={12}><Box paddingTop={4} /></Grid>
                <Grid item xs={false} md={1} lg={2}></Grid>
                <Grid item xs={12} md={10} lg={8}>
                    <ImageGallery items={images} />
                </Grid>
                <Grid item xs={false} md={1} lg={2}></Grid>
                <Grid item container xs={12}>     
                <Grid item xs={12}>
                    
                <Typography variant="h4" align="center">Technische Daten</Typography>           
                </Grid>
                {specs.map((item, index) => 
                        <>
                       <Grid item xs={false} sm={1}></Grid>
                        <Grid item xs={6} sm={2}>
                        <Typography>{item.attribute}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={2}>
                        <Typography>{item.value}</Typography>
                        </Grid>
                        <Grid item xs={false} sm={1}></Grid>
                        </>
                )
                }
                </Grid>
            </Grid>
        </>
    );

};
export default Wohnmobile;