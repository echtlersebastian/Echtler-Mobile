import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function NewNavbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
        <MenuItem><Link color="inherit" href="/" >Home</Link></MenuItem>
        <MenuItem><Link color="inherit" href="/Wohnmobile" >Wohnmobile</Link></MenuItem>
        <MenuItem><Link color="inherit" href="/Preisliste" >Preisliste</Link></MenuItem>
        <MenuItem><Link color="inherit" href="/Packliste" >Packliste</Link></MenuItem>
        <MenuItem><Link color="inherit" href="/Agb" >Agb</Link></MenuItem>
        <MenuItem><Link color="inherit" href="/Ausstattung" >Ausstattung</Link></MenuItem>
        <MenuItem><Link color="inherit" href="/Extras">Extras</Link></MenuItem>
    </Menu>
  );



  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
          <Link href="/" color="inherit" >
            Echtler-Mobile
              </Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="send Mail" color="inherit" href="mailto:info@Echtler-Mobile.de?Subject=Echtler-Mobile Kontakt">
                <MailIcon />
            </IconButton>
            <IconButton aria-label="Rufen Sie uns an" color="inherit" href="tel:+4983419969535">
                <PhoneIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
          <IconButton aria-label="send Mail" color="inherit" href="mailto:info@Echtler-Mobile.de?Subject=Echtler-Mobile Kontakt">
                <MailIcon />
            </IconButton>
            <IconButton aria-label="Rufen Sie uns an" color="inherit" href="tel:+4983419969535">
                <PhoneIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
