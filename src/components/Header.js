import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { SvgIcon } from '@material-ui/core';
import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLinks: {
    marginLeft: theme.spacing(2),
  },
  socialIcons: {
    marginLeft: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className="container-fluid">
      <Toolbar className="row">
        <Typography
          variant="h6"
          className={`${classes.title} col-12 col-md-4 text-center text-md-left`}
        >
          Verosy Beads and Clothing
        </Typography>
        <div className="col-12 col-md-4 text-center">
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/products">
            Products
          </Button>
          <Button color="inherit" component={Link} to="/lookbook">
            Lookbook
          </Button>
          <Button color="inherit" component={Link} to="/about-us">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/contact-us">
            Contact Us
          </Button>
        </div>
        <div className="col-12 col-md-4 text-center text-md-right">
          <IconButton
            color="inherit"
            className={classes.socialIcons}
            href="https://www.facebook.com/veronicaositasiakie24"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            className={classes.socialIcons}
            href="https://www.instagram.com/Verodipsybeads&Clothing"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="inherit"
            className={classes.socialIcons}
            href="https://www.tiktok.com/Verodipsybeads"
          >
            <SvgIcon>
              <path d="M16.6 5.9c-2.6-.3-4.3-1.9-4.8-4.5H10v13.7a3.8 3.8 0 01-3.8 3.8 3.8 3.8 0 01-3.8-3.8 3.8 3.8 0 013.8-3.8v-4a7.8 7.8 0 00-7.8 7.8 7.8 7.8 0 007.8 7.8A7.8 7.8 0 0014 16.4V9.1c1.2 1.1 2.7 1.8 4.6 2v-4z" />
            </SvgIcon>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
