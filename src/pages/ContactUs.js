import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem',
    paddingBottom: '5rem', 
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
      paddingBottom: '2rem',
    },
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    [theme.breakpoints.down('sm')]: {
      gap: '0.5rem',
    },
  },
  ctaButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#45A049',
    },
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/contact/', formData);
      console.log('Message sent:', response.data);
      // Clear form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" className={classes.ctaButton}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
