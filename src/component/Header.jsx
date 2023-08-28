import React from 'react';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';

import { MdDensitySmall } from "react-icons/md";
import { Link } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core';
import LogoMenu from '../img/LogoMenu.png'

const useStyles = makeStyles((theme) => ({
    header: {
      padding: theme.spacing(2),
      backgroundColor: '#454545',
      textAlign: 'center',
      marginTop: 'auto',
      display: 'flex',
      alignItems:'center',
      justifyContent:'space-between',
      flexDirection: 'row',
      height: '4rem'
    },
    closeButton: {
        "&:hover": { backgroundColor:  '#07e7f7' },
      }
  }));



const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

  
    return (
      <AppBar className={classes.header} position="static">
            <img src={ LogoMenu } alt="Logo AluraFlix" />
        <Toolbar >
          

         <MdDensitySmall className={classes.closeButton}  onClick={handleMenuOpen}/>
 
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/">Inicio</MenuItem>
            <MenuItem component={Link} to="/nuevovideo">Agregar Video</MenuItem>
          </Menu>
         
  
         </Toolbar>
       
      </AppBar>
    );
  };
  
  export default Header;