import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
//import DeleteIcon from '@material-ui/icons/Delete'
import * as moment from 'moment'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(0),
    display: 'flex',
    justifyContent: 'space-between'

  },
  card: {
    width: '50%',
    minWidth: 275,
  },
}));

export function Todo({ todo, dispatch }){
  const classes = useStyles();
    const toggleCompleted = () => {
        dispatch({
            type: "TOGGLE_COMPLETED",
            payload: todo.id
        });
    };
    console.log(todo);
    return(
    <Card>
      <CardContent>
        <List className={classes.root}>
          <ListItemText>Task:</ListItemText>
          <ListItemText style={{ textDecoration: todo.completed ? "line-through" : ""}}
            onClick={toggleCompleted}>
            <ListItemIcon></ListItemIcon>
            {todo.item}
            {moment(todo.selectedDate).format('LLL')}
            {todo.tags}
          </ListItemText>
          <Switch edge='end' onClick={toggleCompleted} checked= {todo.completed} className={`todo${todo.completed ? "completed" : ""}`} inputProps={{
              'aria-labelledby' : 'switch-list-label-to-do'
            }}></Switch>
        </List>
        <Divider></Divider>
      </CardContent>
    </Card>

    );
}
