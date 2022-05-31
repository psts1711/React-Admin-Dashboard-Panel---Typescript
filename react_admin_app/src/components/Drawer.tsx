import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Drawer from '@material-ui/core/Drawer';
import LayoutContext from "../contextapi/LayoutContext";
import {Link} from "react-router-dom";




const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    drawer:{
        width: (props: Props) => `${props.drawerWidth}px`,
        marginTop: '48px',

    },
    drawerPaper: {
        width: (props: Props) => `${props.drawerWidth}px`,
        marginTop: '48px',
        borderRight: '1px solid rgb(170, 170, 170)',

    },
});


export interface Props {
    isOpen: boolean;
    drawerWidth:number
}
export default function LeftDrawer(props: Props) {
    const classes = useStyles(props);
    const { open, handleDrawerToggle }:any = React.useContext(LayoutContext);


   return(
       <div>

               <Drawer  className={classes.drawer} variant="persistent" classes={{
                   paper: classes.drawerPaper,
               }}
                       anchor="left" open={props.isOpen}>
                   <List>



                       <Link style={{textDecoration: 'none'}} to="/">
                           <ListItem button>
                               <ListItemIcon> <InboxIcon /></ListItemIcon>
                               <ListItemText > Dashboard </ListItemText>
                           </ListItem>
                       </Link>

                       <Link style={{textDecoration: 'none'}} to="/employeelist">
                           <ListItem button>
                               <ListItemIcon> <InboxIcon /></ListItemIcon>
                               <ListItemText > Employee List</ListItemText>
                           </ListItem>
                       </Link>

                       <Link style={{textDecoration: 'none'}} to="/userlist">
                           <ListItem button>
                               <ListItemIcon> <InboxIcon /></ListItemIcon>
                               <ListItemText > User List</ListItemText>
                           </ListItem>
                       </Link>


                   </List>
               </Drawer>

       </div>


   );
}