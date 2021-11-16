import { Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import React from 'react';

function AusstattungCard() {
    const technik = ["Integrierte Rückfahrkamera", "Radio mit CD", "Bluetooth-Konnektivität", "Navigationssystem", "TV mit vollautomatischer Sat-Anlage", "Markise", "Kühlschrank (167 l) mit großen Gefrierfach (29 l)", "Dreiflammiger Gasherd mit Edelstahlspüle", "Truma Combi 6 Heizung / Warmwasserversorgung"];
    const innenausstattung = ["Inklusive zwei Stühle und ein Tisch", "Vollständiges Geschirrset", "Hubbett (2 Pers.) 195 x 140 cm", "Zwei Einzelbetten (200 x 80 cm und 190 x 80 cm)", "Eimer und Wasserschlauch", "Fahrradträger für drei Räder", "WC mit Dusche", "Frischwasser-Tank mit 122 l Fassungsvermögen", "Abwasser-Tank mit 92 l Fassungsvermögen"];
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardHeader align="center" gutterBottom title="Technik"></CardHeader>
                        <CardContent >

                            {technik.map((item, index) =>
                                <Typography align="left" variant="body1">- {item}</Typography>
                            )}

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardHeader align="center" gutterBottom title="Innenausstattung"></CardHeader>
                        <CardContent >

                            {innenausstattung.map((item, index) =>
                                <Typography align="left" variant="body1">- {item}</Typography>
                            )}

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
} export default AusstattungCard;
