
import Landing2 from './Landing/Landing2';
import Grid from '@material-ui/core/Grid';
import Offer from '../components/Offers/Offers'
import Posibilities from '../components/Possibilities/Posibilities'
import TimeLine from '../components/Timeline/TimeLine';

function Home() {

    return (
        <>
            <Grid container spacing={2} >
                {/* Hier die Landingpage: */}
                <Grid item xs={12}>
                    <Landing2/>
                </Grid>
                    {/* Hier unser Angebot */}
                    <Grid item container alignItems="center" justify="center">
                        <Grid item xs={false} md={1} lg={2}></Grid>

                        <Grid item xs={12} md={10} lg={8}><Offer /></Grid>

                        <Grid item xs={false} md={1} lg={2}></Grid>
                    </Grid>

                    {/* Hier kommen die Möglichkeiten, die man für Reisen hat */}
                    <Grid item container alignItems="center" justify="center">
                        <Grid item xs={false} md={1} lg={2}></Grid>

                        <Grid item xs={12} md={10} lg={8}><Posibilities /></Grid>

                        <Grid item xs={false} md={1} lg={2}></Grid>
                    </Grid>
                    {/* Hier kommt die Timeline */}
                    <Grid item container alignItems="center" justify="center">
                        <Grid item xs={false} md={1} lg={2}></Grid>

                        <Grid item xs={12} md={10} lg={8}><TimeLine /></Grid>

                        <Grid item xs={false} md={1} lg={2}></Grid>
                    </Grid>
            </Grid>
        </>
    )

}
export default Home;
