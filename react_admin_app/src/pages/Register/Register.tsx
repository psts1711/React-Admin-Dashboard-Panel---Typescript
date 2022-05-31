import React,  {useState}  from 'react';
import {Avatar, Button, Container, Grid, Grow, Paper, TextField, Typography} from "@material-ui/core";
import useStyles from './style';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {AuthServices} from "../../services/AuthServices";

import ProgressBar from '../../components/ProgressBar';
import SnackBarAlert from "../../components/SnackAlert";
import {connect} from "react-redux";
import {RootReducerState} from "../../redux/reducers/";


const initialState = {name:'', email:'', password:'', confirmPassword:''};
interface Props{
    userData?:any
}

const Register=(props:Props)=>{
    const classes = useStyles();
    const dispatch:any = useDispatch();
    const history = useHistory();

    const [formData, setFormData] = useState(initialState);

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        dispatch(AuthServices.register(formData, history));
    };

    const handleChange=(e:any)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    console.log(props.userData)
    return(
        <>
            <Grow in>
                <Container component="main" maxWidth="xs">
                
                    <Paper className={classes.paper} elevation={3}>
                    
                    {props?.userData?.toastAlert &&
                    <SnackBarAlert userData={props?.userData}/>
                    }
                        <Avatar className={classes.avatar}>
                            <AssignmentIcon/>
                        </Avatar>
                        <Typography variant="h5">Sign Up</Typography>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <Grid container direction="column"  spacing={2}>
                                <Grid item sm>
                                    <TextField name="username" onChange={handleChange} fullWidth  size="small"  autoComplete="off" type="text" required label="Username" variant="outlined" />
                                </Grid>
                                <Grid item sm>
                                    <TextField name="email" onChange={handleChange} fullWidth  size="small"  autoComplete="off" type="email" required label="Email" variant="outlined" />
                                </Grid>
                                <Grid item sm>
                                    <TextField name="password" onChange={handleChange} fullWidth  size="small"  autoComplete="off" type="password"  required label="Password" variant="outlined" />
                                </Grid>
                                <Grid item sm>
                                    <TextField name="confirmPassword" onChange={handleChange} fullWidth  size="small"  autoComplete="off" type="password"  required label="Confirm Password" variant="outlined" />
                                </Grid>
                                <Button type="submit" fullWidth onChange={handleChange} variant="contained" color="primary" className={classes.submit}>
                                    Sign Up
                                </Button>

                                {props.userData.loggingIn &&
                                     <ProgressBar/>
                                }


                                <Typography gutterBottom variant="subtitle2">
                                    Sign In? <Link to='/login'>Click here</Link>
                                </Typography>
                            </Grid>
                        </form>
                    </Paper>
                </Container>
            </Grow>
        </>
    )
}

const mapStateToProps = (state: RootReducerState) => ({
    userData: state.authReducer,
});
export default connect(mapStateToProps, null,)(Register);
