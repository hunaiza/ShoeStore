// import React from 'react';
// import { Link } from 'react-router-dom';

// function NavBar() {

//   return (
// 	<div>
//         <Link to="/"> Home </Link>
//         <Link to="/about"> About </Link>
//         <Link to="/product"> Product </Link>
// 	</div>
//   );
// }

// export default NavBar;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Logo from './Images/Logo.png';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import Tooltip from '@material-ui/core/Tooltip';
import './Navbar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'grey'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white'
  },
  components: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'italic',
    margin: '30px'
  },
  
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography><img src={Logo} height="40px" /></Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.components} style={{textDecoration: 'none', color:"white"}}> Home </Link>
            <Link to="/about" className={classes.components} style={{textDecoration: 'none', color:"white"}}> About </Link>
            <Link to="/product" className={classes.components} style={{textDecoration: 'none', color:"white"}}> Product </Link>
          </Typography>
          <Tooltip title="Cart">
            <Typography><Link to="/cart" style={{textDecoration: 'none', color:"black"}}><ShoppingCartTwoToneIcon fontSize="large" /></Link></Typography>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}
