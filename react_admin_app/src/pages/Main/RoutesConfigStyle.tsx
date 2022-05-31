import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
interface Props {
  drawerWidth: any;
  isOpen: boolean;

};
const useStyles = makeStyles((theme: Theme) =>
createStyles({
  
  content: {
    flexGrow: 1,
    marginTop: '55px',
    border: '1px solid rgb(170, 170, 170)',
    borderRadius: 5,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    backdropFilter:'blur(20px)',
    background: 'rgba(255,255,255,0.7)',
    
    marginLeft: (props:Props) => `${props.isOpen?props.drawerWidth:0}px`, 
  },
  contentShift: {
    border: '1px solid rgb(170, 170, 170)',
            borderRadius: 5,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: (props:Props) => `${props.isOpen?props.drawerWidth:0}px`, 
  },
}),
);

export default useStyles;
