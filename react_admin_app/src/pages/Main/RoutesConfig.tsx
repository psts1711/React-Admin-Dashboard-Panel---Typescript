import React, {useEffect} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import SnackBarAlert from "../../components/SnackAlert";
import Dashboard from "./Dashboard";
import EmployeeList from "./EmployeeList";
import UserList from "./UserList";
import LayoutContext from "../../contextapi/LayoutContext";
import {Grow} from "@material-ui/core";
import useStyles from './RoutesConfigStyle';

import {connect} from "react-redux";
import {RootReducerState} from "../../redux/reducers/";


interface Props {
    userData?: any,
    drawerWidth:any,
    isOpen:boolean,
}



const RoutesConfig=(props:Props)=>{

    const classes = useStyles(props);
    const { open }:any = React.useContext(LayoutContext);
    // console.log(props.userData)
    const user = JSON.parse(localStorage.getItem('profile') as string)

    return(
        <Grow in>
            <Paper elevation={3}
                variant="outlined"
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <Grid container spacing={3}>
                    {props?.userData?.toastAlert &&
                    <SnackBarAlert userData={props?.userData}/>
                    }
                    <Switch>
                    {
                          !user ? <Redirect to="/login" /> :  <>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/employeelist' component={EmployeeList} />
        <Route exact path='/userlist' component={UserList} />
        </>
                    }

                       

                    </Switch>
                </Grid>
            </Paper>
        </Grow>
 )
}


const mapStateToProps = (state: RootReducerState) => ({
    userData: state.authReducer,
});
export default connect(mapStateToProps, null,)(RoutesConfig);