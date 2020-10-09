import React from 'react';
import Box from '@material-ui/core/Box';
import Sorter from "@comp/sorter";
import TaskCard from "@comp/taskCard";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    marginTop: theme.spacing(2),
  },
}));


export default function MenuListComposition() {
  const classes = useStyles();
  const compProps = {
    gridItem: {
      item         : true,
      zeroMinWidth : true,
      space        : 5,
      xs           : 12,
      md           : 6,
      lg           : 4,
      className    : classes.gridItem
    }
  }

  return (
    <Box mx={10} mt={4}>
      <Box display="flex" alignItems="center">
        <h2>タスク</h2>
        <Sorter />
      </Box>
      <Grid container spacing={1}>
        <Grid {...compProps.gridItem}><TaskCard title="タスクタスクタスクタスク" /></Grid>
        <Grid {...compProps.gridItem}><TaskCard title="タスク" /></Grid>
        <Grid {...compProps.gridItem}><TaskCard title="タスク" /></Grid>
        <Grid {...compProps.gridItem}><TaskCard title="タスク" /></Grid>
      </Grid>
    </Box>
  );
}
