import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core';
import LogoAluraFlix from '../img/LogoFooter.png'

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
    backgroundColor: '#454545',
    textAlign: 'center',
    color: "white",
    marginTop: 'auto',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.footer}>
       <img src={LogoAluraFlix} alt="Logo AluraFlix" />
      <Typography variant="body2">© {new Date().getFullYear()} Todos los derechos reservados. NELSON FRANCO</Typography>
    </Paper>
  );
};

export default Footer;
