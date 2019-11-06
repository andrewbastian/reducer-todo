
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
//import AddIcon from '@material-ui/icons/Add';
//import DeleteIcon from '@material-ui/icons/Delete'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MomentUtils from '@date-io/moment';
import {
  DateTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  addItemTextField:{
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export const TodoForm = ({ dispatch }) => {

    const classes = useStyles();

    const [item, setItem] = useState("");

    const [selectedDate, handleDateChange] = useState();

    const [selectedTags, setTags] = useState("")

    const handleInputChanges = event => {
        setItem(event.target.value);
    };

    const submitForm = (event, value) => {
        event.preventDefault();

        dispatch({
            type: "ADD_TODO",
            payload: {item:item, date: selectedDate, tags:selectedTags}
        });
        setItem("");
        handleDateChange(null)
        setTags("")
    };
    const clearCompleted = event => {
        event.preventDefault();
        dispatch({
            type: "CLEAR_COMPLETED"
        });
    };

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
            <form onSubmit={submitForm}>
                <label htmlFor="todo" hidden>
                    Todo
                </label>
                <TextField  label="todo"
                            onChange={handleInputChanges}
                            value={item}
                />
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DateTimePicker value={selectedDate} label={'Due On'} onChange={handleDateChange} />
              </MuiPickersUtilsProvider>
              <TextField  label="tag"
                          onChange={e=>setTags(e.target.value)}
                          value={selectedTags}
              />
              <Button type="submit" onClick = {submitForm}>Add Item</Button>
                <Button onClick={clearCompleted}>Clear Item</Button>
            </form>
          </Toolbar>
        </AppBar>

        </div>
    );
}
