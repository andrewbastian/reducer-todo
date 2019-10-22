
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
    DatePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";
import * as moment from 'moment'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    addItemTextField: {
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

    const [selectedDate, handleDateChange] = useState(Date.now());


        // your handle change has no way to differentiate between the 2 fields.
        // What's happening is that it's changing the value of both fields to the same value
    const handleInputChanges = event => {
        setItem(event.target.value);
    };

    const handleDateChanges = event => {
        console.log(event.target)
        // handleDateChange("10/19/2019")
    }

    const submitForm = event => {
        event.preventDefault();
        console.log("item", item)
        dispatch({
            //spelling error ADD_ITEM -> ADD_TODO
            type: "ADD_TODO",
            //removed the or value as it's not an object
            payload: {item:item, date: selectedDate}
        });
        // You don't currently have a action for ADD_DATE
        // dispatch({
        //     type: "ADD_DATE",
        //     // removed the or value as it's not an object
        //     payload: selectedDate
        // });
        setItem("");
        // MUI has error with empty string.  Changed to NULL value
        handleDateChange(null)
    };
    const clearCompleted = event => {
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
                        <TextField label="todo"
                            onChange={handleInputChanges}
                            value={item}
                        />
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <DatePicker value={selectedDate} label={'Due On'}  onChange={handleDateChanges} />
                        </MuiPickersUtilsProvider>
                        <Button type="submit" onClick={submitForm}>Add Item</Button>
                        <Button onClick={clearCompleted}>Clear Item</Button>
                    </form>
                </Toolbar>
            </AppBar>

        </div>
    );
}
