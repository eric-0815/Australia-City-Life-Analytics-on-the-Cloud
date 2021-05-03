import React, { useState, useEffect } from "react";
import * as apis from '../../apis/apis';
import Wordcloud from "../Chart/WordCloud"
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Task3 from '../Dashboard/Task3';
import Description3 from '../Dashboard/Description3';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },

  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 650,
  },
}));

const Scenario3 = () => {
  const scenario3classes = useStyles();
  const [scenarioData, setScenarioData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const scenarioResponse = await apis.getScenarioTwo();
      if (scenarioResponse.status === 200) {
        setScenarioData(scenarioResponse.data.row_number);
      }
    };
    fetchData();
  }, []);
  const fixedHeightPaper = clsx(scenario3classes.paper, scenario3classes.fixedHeight);
  return(
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Wordcloud />
            <div>
              {scenarioData}
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Task3 />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={scenario3classes.paper}>
            <Description3 />
          </Paper>
        </Grid>
      </Grid>
      <Box pt={4}>
        <Copyright />
      </Box>
    </div>
  )
}

export default Scenario3;