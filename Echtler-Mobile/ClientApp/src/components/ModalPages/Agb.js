import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, Link } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import AgbPdf from '../../assets/pdfs/AGB 2020.pdf';
function Agb() {

    return (
        <>
            <Grid container spacing={3}>
                {/* This is for spacing the Appbar out: */}
                <Grid item xs={12}><Box paddingTop={0} /></Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" align="Center">AGB</Typography>
                    <Box paddingTop={4} />
                    <Typography variant="h6" align="Center">Unsere Vertragsbedingungen.</Typography>
                    <Box paddingTop={2} />
                    {/* TODO: Sie können die Liste noch nicht runterladen. das ist ne dreiste Lüge in der nächsten Zeile: */}
                    <Typography variant="body2" align="Center">
                        <Link href={AgbPdf} >
                            Sie können unsere AGB's hier anschauen und herunterladen.
                        </Link>
                    </Typography>
                    <Typography variant="body2" align="Center">Wenn Sie Fragen bezüglich unseren AGB's haben können Sie uns gerne kontaktieren.</Typography>
                </Grid>

                <Grid item xs={false} sm={2}></Grid>
            </Grid>
        </>

    )

} export default Agb;
