import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import EMIcon from '../../assets/logo512.png';
function Landing() {

    const useStyles = makeStyles((theme) => ({
        root: {
            minHeight: '80vh',
            backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/Header.png"})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
        logo: {
            justifyContent: 'center',
        }
    }));

    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>

                <img src={EMIcon} alt="logo" className={classes.logo}>
                </img>
                <CssBaseline />
            </div>
        </>
    );
}
export default Landing;