import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./TextField.css"

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: 200,
      margin: theme.spacing(1),
    },
  },
}));

export default function ColorTextField() {
  const classes = useStyles();

  return (
    <div>
    <form className={classes.root} id="textForm" noValidate autoComplete="off">
      <TextField id="standard-secondary" label="Test" color="secondary" />     
    </form>
    </div>
  );
}