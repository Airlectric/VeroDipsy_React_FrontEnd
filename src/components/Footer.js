import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(2, 0),
  },
  toolbar: {
    justifyContent: 'center',
  },
  socialLinks: {
    marginLeft: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" component="footer" className={`${classes.footer} container-fluid`}>
      <Toolbar className={`row ${classes.toolbar}`}>
        <Typography variant="body1" className="col-12 col-md-6 text-center text-md-left">
          &copy; 2024 Verosy Beads and Clothing. All rights reserved.
        </Typography>
        <div className={`col-12 col-md-6 text-center text-md-right ${classes.socialLinks}`}>
          {/* Add social media links */}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
