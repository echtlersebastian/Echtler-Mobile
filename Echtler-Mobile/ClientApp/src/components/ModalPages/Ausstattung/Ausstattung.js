import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, Card, CardMedia, makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import image from '../../../assets/Ausstattung.png';
import AusstattungCard from './AusstattungCard';
function Ausstattung() {

    const useStyles = makeStyles({
        root: {
            width: 'auto',
            margin: 'auto'
        },
        media: {
            minWidth: 250,
            height: 300,
        },
    });

    const classes = useStyles();
    return (
        <>
            <Grid container spacing={3}>
                {/* This is for spacing the Appbar out: */}
                
                <Grid item xs={12}><Box paddingTop={0} /></Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" align="Center">Austattung</Typography>
                    <Typography variant="h6" align="Center">Vieles das Sie brauchen, ist bei uns bereits im Preis enthalten.</Typography>
                    <Box paddingTop={2} />
                    <Grid item container spacing={3}>
                        <Grid item xs={false} md={3}></Grid>
                        <Grid item xs={12} md={6}>

                            <Card className={classes.root} variant="outlined" >
                                <CardMedia
                                    className={classes.media}
                                    image={image}
                                    title="Ausstattung"
                                />

                            </Card>
                        </Grid>
                        <Grid item xs={false} md={3}></Grid>


                        <Grid item xs={false} md={3}></Grid>
                        <Grid xs={12} md={6}>
                            <AusstattungCard/>
                        </Grid>
                    </Grid>
                     </Grid>

                <Grid item xs={false} sm={2}></Grid>
            </Grid>
        </>
    )
} export default Ausstattung;