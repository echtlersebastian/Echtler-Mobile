import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, Link } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import PacklistePdf from '../../assets/pdfs/Packliste 2020.pdf';

function Packliste() {
    const wichtiges = ["ACSI– Karte (Verbilligte Campingplätze)", "Pass", "Vignette (Österreich, Schweiz, Slowenien)", "Geld und EC-Karten", "Womo-Schlüssel", "Fahrzeugschein", "grüne Vers.-Karte", "Handy", "Handy Ladekabel", "Foto, Kamera", "Laptop", "Brille", "Sonnenbrille"];
    const bad = ["Bademantel", "Badeschlappen", "Duschtasche", "Tempos", "Klopapier", "Shampoo / Spülung", "Creme", "Sonnencreme", "Duschgel", "Bürste", "Föhn"];
    const kleidung = ["Hose lang", "Hose kurz", "Kleid", "Hemd", "Pulli", "Top", "T-Shirt", "Unterwäsche", "Socken", "Jacke", "Schlafanzug", "Jogginghose", "Sportbekleidung", "Schuhe"];
    const medizin = ["pers. Medikamente", "Schmerzmittel", "Pflaster", "Sprüh- Pflaster", "Binde"];
    const strand = ["Picknickdecke", "Gr. Handtücher", "Schaufel", "Sandspielzeug", "Ball/Federball", "Sonnenhut/Mütze", "Luftmatratze", "Taucherbrille/Schnorchel", "Badeanzug/Bikini/Badehose", "Strandmatte/Iso-Matte", "Sonnenschirm", "Badetasche", "Angelsachen"];
    const sport = ["Bücher/Zeitschriften", "Sportausrüstung", "Sportschuhe", "Sportgeräte", "Spiele"];
    const kochen = ["Essen", "Getränke", "Gewürze", "Küchenkrepp", "Geschirrtücher", "Wasserkocher", "Kaffeemaschine"];
    const sonstiges = ["Campingteppich", "Radio", "Rucksack", "Mülltüten", "Spülmittel/Putzzeug", "Gas", "Kerzen", "Regenschirm"];
    return (
        <>



            <Grid container spacing={3}>
                {/* This is for spacing the Appbar out: */}
                
                <Grid item xs={12}><Box paddingTop={0} /></Grid>
                <Grid item xs={12}>
                <Typography variant="h4" align="Center">Packliste</Typography>
                <Typography variant="h6" align="Center">Damit Sie nichts vergessen.</Typography>
                {/* TODO: Sie können die Liste noch nicht runterladen. das ist ne dreiste Lüge in der nächsten Zeile: */}
                <Typography variant="body2" align="Center">
                <Link href={PacklistePdf} >
                Sie können die Liste auch hier herunterladen.
                        </Link></Typography>
                </Grid>

                <Grid item xs={false} sm={2}></Grid>
                <Grid item container xs={12} sm={8} spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader title="Wichtiges" />
                            <CardContent>
                                {wichtiges.map((item, index) =>
                                    <Typography>- {item}</Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader title="Bad" />
                            <CardContent>
                                {bad.map((item, index) =>
                                    <Typography>- {item}</Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader title="Kleidung" />
                            <CardContent>
                                {kleidung.map((item, index) =>
                                    <Typography>- {item}</Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader title="Medizin" />
                            <CardContent>
                                {medizin.map((item, index) =>
                                    <Typography>- {item}</Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader title="Strand / Sonne" />
                            <CardContent>
                                {strand.map((item, index) =>
                                    <Typography>- {item}</Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader title="Sport / Hobby" />
                            <CardContent>
                                {sport.map((item, index) =>
                                    <Typography>- {item}</Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader title="Kochen" />
                            <CardContent>
                                {kochen.map((item, index) =>
                                    <Typography>- {item}</Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader title="Sonstiges" />
                            <CardContent>
                                {sonstiges.map((item, index) =>
                                    <Typography>- {item}</Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>

                <Grid item xs={false} sm={2}></Grid>
            </Grid>
        </>
    );
}
export default Packliste;