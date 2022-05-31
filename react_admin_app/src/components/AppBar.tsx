import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LayoutContext from "../contextapi/LayoutContext";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useDispatch} from "react-redux";

import {AuthServices} from "../services/AuthServices";
import {useHistory} from "react-router-dom";


import {connect} from "react-redux";
import {RootReducerState} from "../redux/reducers/";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        appbar:{
            backgroundColor: '#003F87',

        }
    }),
);

function ButtonAppBar() {
    const classes = useStyles();
    const dispatch:any = useDispatch();
    const history = useHistory();

    const {handleDrawerToggle }:any = React.useContext(LayoutContext);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);



    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };


      const handleLogout = () => {
         dispatch(AuthServices.logout());

      };

    const MenuList=()=>{
        return (
           
             <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        )
    }
    

    return (
        <div className={classes.root}>
            <MenuList/>
            <AppBar elevation={0} className={classes.appbar}  position="fixed"  >
                <Toolbar variant="dense">
                    <IconButton edge="start" onClick={handleDrawerToggle} className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        React Admin
                    </Typography>
                    <IconButton color="inherit">
                         <NotificationsIcon/> 
                    </IconButton>
                    <IconButton onClick={handleClick} color="inherit">
                        <AccountCircleIcon/>
                    </IconButton>
                    
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = (state: RootReducerState) => ({
    userData: state.authReducer,
});
export default connect(mapStateToProps, null,)(ButtonAppBar);
