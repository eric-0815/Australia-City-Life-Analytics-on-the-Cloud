import React, {useRef, useEffect} from "react";
import Description from "../Dashboard/Description";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
const { tableau } = window;

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
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 650,
  },
}));
const Scenario2 = () => {

  const scenario2classes = useStyles();

  const url = "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";

  const ref = useRef(null);

  const options = {
    device: "desktop",
  }
  const initViz = () => {
    new tableau.Viz(ref.current, url, options);
  }

  useEffect(() => {
    initViz();
  }, [])

  return(
    <div>
      <div ref ={ref} ></div>
      <Paper className={scenario2classes.paper}>
        <Description />
      </Paper>
    </div>
  )
}

export default Scenario2;