import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);


const Dashboard=()=>{
    const classes = useStyles();

    return(
        <div className={classes.root}>

            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
            </Grid>

            <h1>Dashboard</h1>
           {"\n"}
           <h1>Dashboard</h1>
           {"\n"}
           <h1>Dashboard</h1>
           {"\n"}
           <h1>Dashboard</h1>
           {"\n"}
           <h1>Dashboard</h1>
           {"\n"}
           <h1>Dashboard</h1>
           {"\n"}
           <h1>Dashboard</h1>
           {"\n"}
           <h1>Dashboard</h1>
           {"\n"}

           <h1>Dashboard</h1>
           {"\n"}
           <h1>Dashboard</h1>
           {"\n"}
        
      </div>
    )
}

export default  Dashboard;