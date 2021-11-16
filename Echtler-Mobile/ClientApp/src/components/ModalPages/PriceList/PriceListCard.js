import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Grid from '@material-ui/core/Grid';

import { Typography } from '@material-ui/core';
function PriceListCard() {

    var cardStyle = {
        display: 'block',
        height: 300,
    }
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={false} md={2}></Grid>
                {/* Großer Container: */}

                <Grid item container xs={12} md={8} spacing={3}>
                    {/* Alle Karten Hier */}
                    {/* 1.Karte */}
                    
                <Grid item xs={12} >
                <Typography align="center" gutterBottom variant="h2">Preisliste</Typography>
                </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card style={cardStyle} elevation={8}>
                            <CardHeader align="center" gutterBottom title="Nebensaison"></CardHeader>
                            <CardContent>
                                <Typography align="center" gutterBottom variant="h4">99€ pro Tag</Typography>

                                <Typography align="center" variant="h6">19.03.21 - 25.03.21</Typography>
                                <Typography align="center" variant="h6">04.10.21 - 29.10.21</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* 2.Karte */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card style={cardStyle} elevation={8}>
                            <CardHeader align="center" gutterBottom title="Zwischensaison"></CardHeader>
                            <CardContent >
                                <Typography align="center" gutterBottom variant="h4">119€ pro Tag</Typography>
                                <Typography align="center" variant="h6">26.03.21 - 20.05.21</Typography>
                                <Typography align="center" variant="h6">07.06.21 - 02.07.21</Typography>
                                <Typography align="center" variant="h6">06.09.21 - 03.10.21</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* 3.Karte */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card style={cardStyle} elevation={8}>
                            <CardHeader align="center" gutterBottom title="Hauptsaison"></CardHeader>
                            <CardContent>
                                <Typography align="center" gutterBottom variant="h4">139€ pro Tag</Typography>
                                <Typography align="center" variant="h6">21.05.21 - 06.06.21</Typography>
                                <Typography align="center" variant="h6">03.07.21 - 12.08.21</Typography>
                                <Typography align="center" variant="h6">28.08.21 - 05.09.21</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} ></Grid>

                    {/* Aller Text hier: */}
                    <Grid item container xs={12} spacing={2}>
                        {/* Servicepauschale */}
                        <Grid item xs={12} sm={4}><Typography align="center" variant="h5">Servicepauschale</Typography><Typography align="center" variant="h6"> Einmalig pro Anmietung:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}><Typography align="left" variant="h5"> 135€ </Typography><Typography align="left" variant="body1"> Darin sind enthalten: Ausführliche Einweisung in das Wohnmobil und Rücknahme, Schutzbrief (bei Unfall, Fahrerausfall und Panne), Verbandskasten und Feuerlöscher. Erstellung des Übergabe- und Abnahmeprotokolls.</Typography></Grid>
                        {/* Wohnmobil Ausstattung: */}
                        <Grid item xs={12} ></Grid>
                        <Grid item xs={12} sm={4}><Typography align="center" variant="h5">Ausstattung Wohnmobil: </Typography></Grid>
                        <Grid item xs={12} sm={8}><Typography align="left" variant="body1">Markise, Autom. SAT Antenne mit TV, Navigation für Wohnmobile, Radio, CD, Bluetooth, Fahrradträger für 3 Fahrräder, Warntafel, 2 Ausgleichskeile, Wasserschlauch 15m, Stromkabel 20m mit CEE Stecker, eine volle 11kg Gasflasche, Melamin-Geschirr, Pfannen und Töpfe, Besteck, Gläser, Spülschüssel, WC-Sanitärzusatz und 2 Warnwesten. Bei uns ist auch der Campingtisch und 2 Stühle im Preis enthalten! Weiteres Zubehör und mögliches Wunschzubehör entnehmen Sie der Ausstattungsübersicht.</Typography></Grid>
                        {/* Wunschleistungen */}
                        <Grid item xs={12} ></Grid>
                        <Grid item xs={12} sm={4}> <Typography align="center" variant="h5">Wunschleistungen:</Typography></Grid>
                        <Grid item xs={12} sm={8}>  <Typography align="left" variant="body1">Gasgrill, zus. Gasflasche, Handtücher, Betten-Set (Bettwäsche, Kissen und Decken), Winterreifen 99,00€, Schneeketten 75,00€. Andere Sonderwünsche vom Mieter sind nach vorheriger Absprache, gegen eine zu vereinbarende Gebühr, natürlich möglich.</Typography></Grid>
                        {/* Haustiere */}
                        <Grid item xs={12} ></Grid>
                        <Grid item xs={12} sm={4}><Typography align="center" variant="h5">Haustiere:</Typography></Grid>
                        <Grid item xs={12} sm={8}><Typography align="left" variant="body1">Wir haben ein Wohnmobil, bei dem Sie Ihr Haustier nach Absprache mitnehmen können. Bitte beachten Sie, dass wir für die zusätzliche Reinigung eine Pauschale von 75€ erheben.</Typography></Grid>
                        {/* Zahlungsbedingungen */}
                        <Grid item xs={12} ></Grid>
                        <Grid item xs={12} ></Grid>
                        <Grid item xs={12} sm={4}><Typography align="center" variant="h5">Zahlungsbedingungen:</Typography></Grid>
                        <Grid item xs={12} sm={8}><Typography align="left" variant="body1">Die Anzahlung bei Buchung beträgt 30% des Mietpreises. Der Restbetrag ist spätestens 21 Tage vor Reiseantritt auf unser unten aufgeführtes Konto zu überweisen.</Typography></Grid>
                        {/* Kaution */}
                        <Grid item xs={12} ></Grid>
                        <Grid item xs={12} sm={4}><Typography align="center" variant="h5">Kaution:</Typography></Grid>
                        <Grid item xs={12} sm={8}><Typography align="left" variant="body1">Die Kaution beträgt 1.500€. Diese ist im Voraus auf unser Konto zu überweisen. Nur nach vorheriger Absprache können wir eine Hinterlegung der Kaution bei Abholung des Fahrzeugs in bar akzeptieren.</Typography></Grid>
                        {/* Rückgabe */}
                        <Grid item xs={12} ></Grid>
                        <Grid item xs={12} sm={4}><Typography align="center" variant="h5">Rückgabe:</Typography></Grid>
                        <Grid item xs={12} sm={8}><Typography align="left" variant="body1">Das Fahrzeug ist grundsätzlich in dem Zustand zurückzugeben, indem es auch bei der Übergabe erhalten wurde (s. Übergabeprotokoll). Das Fahrzeug ist mit gefülltem Tank und innen gereinigt zurückzugeben. Die WC-Toilettenkassette muss geleert und gereinigt und der Grauwassertank geleert sein.</Typography></Grid>
                        {/* zusätzliche Kosten */}
                        <Grid item xs={12} ></Grid>
                        <Grid item xs={12} sm={4}><Typography align="center" variant="h6">Zusätzlich anfallende Kosten bei nicht vertragsgemäßer Rückgabe:</Typography></Grid>
                        <Grid item xs={12} sm={8}><Typography align="left" variant="body1">Toilettenreinigung 130,00€</Typography><Typography align="left" variant="body1">Innenreinigung 100,00€</Typography><Typography align="left" variant="body1">Bei starker Verschmutzung im Außenbereich 100,00€.</Typography></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={2}></Grid>
            </Grid>

        </>
    );

} export default PriceListCard;