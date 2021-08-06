import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../Header'

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
		backgroundPosition: 'center',
  },
}));
export default function LoginNew() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <CssBaseline />
			<Header/>
    </div>
  );
}