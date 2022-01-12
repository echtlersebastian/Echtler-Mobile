import { Box, Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import image from '../../assets/Extras.png';

function Extras() {
    const useStyles = makeStyles({
        root: {
            width: 'auto',
            margin: 'auto'
        },
        media: {
            minWidth: 250,
            height: 400,
        },
    });

    const extraPreis = [
        {
            name: "Bettenset",
            preis: "30,00€"
        }, {
            name: "je zusätzlichem Stuhl",
            preis: "10,00€"
        }, {
            name: "Sonnenschirm",
            preis: "15,00€"
        }, {
            name: "Winterreifen",
            preis: "99,00€"
        }, {
            name: "Gasgrill",
            preis: "15,00€"
        }, {
            name: "Gasflasche (gefüllt)",
            preis: "30,00€"
        }, {
            name: "Campingliege",
            preis: "15,00€"
        }, {
            name: "Handtücher",
            preis: "12,00€"
        }, {
            name: "Schneeketten",
            preis: "75,00€"
        },
    ]
    const classes = useStyles();
    return (
        <>

            <Grid container spacing={3}>
                {/* This is for spacing the Appbar out: */}
                
                <Grid item xs={12}><Box paddingTop={0} /></Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" align="Center">Extras</Typography>
                    <Typography variant="h6" align="Center">Bei uns bleiben keine Wünsche offen.</Typography>
                    <Box paddingTop={2} />
                    <Grid item container spacing={3}>
                        <Grid item xs={false} md={3}></Grid>
                        <Grid item xs={12} md={6}>

                      
                        </Grid>
                        <Grid item xs={false} md={3}></Grid>

                        {/* Hier muss Die Card hin! */}
                        
                        <Grid item xs={false} md={4}></Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                            <Typography variant="h5" align="center">
                                    Zubuchbare Optionen für Ihre perfekte Reise
                                </Typography>
                              
                                <CardContent>
                                    <Grid container spacing={3}>
                                        <Grid item xs={6}>
                                            {extraPreis.map((item, index) =>
                                                <Typography align="right">{item.name}</Typography>
                                            )}
                                        </Grid>
                                        <Grid item xs={6}>
                                            {extraPreis.map((item, index) =>
                                                <Typography align="left">{item.preis}</Typography>
                                            )}
                                        </Grid>
                                    </Grid>

                                </CardContent>
                            </Card>
                        </Grid>
                        
                        <Grid item xs={false} md={4}></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>

    );
} export default Extras;