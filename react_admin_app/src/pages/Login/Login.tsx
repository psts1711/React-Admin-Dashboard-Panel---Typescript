import React, {useState} from 'react';
import {Avatar, Button, Container, Grid, Grow, Paper, TextField, Typography} from "@material-ui/core";

import useStyles from './style';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ProgressBar from '../../components/ProgressBar';
import SnackBarAlert from "../../components/SnackAlert";

import {Link} from "react-router-dom";
import {AuthServices} from "../../services/AuthServices";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

import {connect} from "react-redux";
import {RootReducerState} from "../../redux/reducers/";


interface Props{
    userData?:any
}

const initialState = {email:'', password:'', isFormSubmit:false};
const Login=(props:Props)=>{
    const classes = useStyles();
    const dispatch:any = useDispatch();
    const [formData, setFormData] = useState(initialState);
    const history = useHistory();


    const handleSubmit=(e:any)=>{
        e.preventDefault();
       // isFormSubmit = setFormData({...formData, isFormSubmit:true})
        dispatch(AuthServices.login(formData, history));
    };

    const handleChange=(e:any)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    };

   // console.log(props.userData)
  

    return(
        <>
            <Grow in>
                <Container component="main" maxWidth="xs">
                 
                    <Paper className={classes.paper} elevation={3}>

                    {props?.userData?.toastAlert &&
                    <SnackBarAlert userData={props?.userData}/>
                    }


                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography variant="h5">SignIn</Typography>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <Grid container direction="column"  spacing={2}>
                                <Grid item sm>
                                    <TextField name="email"  onChange={handleChange} autoFocus fullWidth  size="small"  autoComplete="off" type="text" required label="Email" variant="outlined" />
                                </Grid>
                                <Grid item sm>
                                    <TextField name="password"  onChange={handleChange} autoFocus fullWidth  size="small"  autoComplete="off" type="password"  required label="Password" variant="outlined" />
                                </Grid>
                                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                                    Sign In
                                </Button>

                                {props.userData.loggingIn &&
                                     <ProgressBar/>
                                }



                                <Typography gutterBottom variant="subtitle2">
                                    SignIn with QR? <Link to='/qrlogin'>Click here</Link>
                                </Typography>
                                <Typography gutterBottom variant="subtitle2">
                                    Don't have an account? <Link to='/register'>Click here</Link>
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
export default connect(mapStateToProps, null,)(Login);
