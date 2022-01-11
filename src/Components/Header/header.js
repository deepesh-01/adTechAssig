import React,{useEffect} from 'react';
import useStyles from './headerStyles';
import { AppBar,Toolbar,Typography,Button } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import {getCountries} from '../../actions';

export const Header = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const refresh = () => {
      dispatch(getCountries());
    }

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar position="dense">
              <Typography variant="h6" color="inherit" className={classes.title}>
                Countries-API
              </Typography>
              <Button onClick={refresh}>
                Refresh 
              </Button>
            </Toolbar>
          </AppBar>
        </div>
    )
}