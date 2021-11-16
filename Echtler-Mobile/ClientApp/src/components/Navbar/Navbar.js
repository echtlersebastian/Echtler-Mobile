import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import EMIcon from '../../assets/logo512.png';

function Navbar() {
  const useStyles = makeStyles((theme) => ({
    appbar: {
      background: 'grey',
    },
    appbarTitle: {
      flexGrow: '1'
    },
    toolbar: {
      width: '80%',
      margin: '0 auto',
    },
    logo: {
      maxWidth: 70,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appbar} elevation={5}>
        <Toolbar classname={classes.toolbar}>
          <IconButton aria-label="app" color="inherit" href="/">
            <img src={EMIcon} alt="logo" className={classes.logo}>
            </img>
            <Typography style={{ flexGrow: 1 }} variant='h5' color='black' >Echtler-Mobile.de</Typography>
          </IconButton>
          <Typography style={{ flexGrow: 1 }} variant='h5' color='black' href="/"> </Typography>

          <Button color="inherit" href="/Wohnmobile"><Typography variant='h6' color='black' href="/">Bilder</Typography></Button>
        </Toolbar>
      </AppBar>
    </div>
  );


}
export default Navbar;