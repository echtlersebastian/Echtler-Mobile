import React from 'react';
import Grid from '@material-ui/core/Grid';
import AgbPdf from '../assets/pdfs/AGB 2020.pdf'
import Datenschutz from '../assets/pdfs/Datenschutz.pdf'
import Typography from '@material-ui/core/Typography';
import { Box, Link } from '@material-ui/core';
function Footer() {

    return (
        <>
            <hr></hr>
            <Grid container spacing={2}>
                <Grid item xs={false} sm={2}></Grid>
                <Grid item container xs={12} sm={8} spacing={2} >
                    <Grid item xs={12}> <Typography align="center" variant="h5" > <Box paddingTop={4} />Impressum</Typography></Grid>
                    <Grid item xs={12}> <Typography align="left" variant="h6" >Echtler-Mobile</Typography></Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography align="left" variant="body1">Handel und Vermietung von Wohnmobilen, Caravan und KFZ</Typography>
                        <Typography align="left" variant="body1">Inhaber: Manfred Echtler</Typography>
                        <Typography align="left" variant="body1">Osterhofstraße 3</Typography>
                        <Typography align="left" variant="body1">87600 Kaufbeuren</Typography>
                        <Typography align="left" variant="body1">Steuernummer 125/213/31435</Typography>

                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography align="left" variant="body1">Telefon: +49 (0) 8341 9969535</Typography>
                        <Typography align="left" variant="body1">E-Mail: info@Echtler-Mobile.de</Typography>
                        <Typography align="left" variant="body1">Inhaltlich verantwortlich: Manfred Echtler</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography align="left" variant="body1"><Link href={Datenschutz} >Unsere Datenschutzerklärung</Link></Typography>
                        <Typography align="left" variant="body1"><Link href={AgbPdf} >Unsere AGB's</Link></Typography>
                        <Typography align="left" variant="body1">Wir sind nicht bereit und nicht verpflichtet an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</Typography>
                    </Grid>
                </Grid>

                <Grid item xs={false} sm={2}></Grid>

            </Grid>
        </>
    )
};
export default Footer;