import React, {useLayoutEffect} from "react";
import LayoutContext from "../contextapi/LayoutContext";
import AppBar from '../components/AppBar';
import LeftDrawer from '../components/Drawer'
import RoutesConfig from "./Main/RoutesConfig";


const handleDrawerResponsive = () => {
   // console.log(window.innerWidth)
    if (window.innerWidth > 900) {
        return true;
    }if(window.innerWidth < 900){
        return false;
    }
    return false;
};

const LayoutConfig = () =>{
    const [open, setOpen] = React.useState(() => handleDrawerResponsive());
    const [show, setShow] = React.useState(false)

 
    const handleResize = () => {
        if (window.innerWidth < 900) {
              setOpen(!open);
            window.removeEventListener("resize", handleResize) 
        } else {
            setOpen(false)
            window.removeEventListener("resize", handleResize) 
        }

      }

    useLayoutEffect(() => {
        console.log();
        window.addEventListener("resize", handleResize)
    });



    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleShow=()=>{
        setShow(!show)
    }



  return(
      <LayoutContext.Provider
          value={{
              open,
              handleDrawerToggle,
              show,
              handleShow
          }}
      >
          <AppBar />
          <RoutesConfig  isOpen={open} drawerWidth={220}/>
          <LeftDrawer isOpen={open} drawerWidth={220} />

      </LayoutContext.Provider>
  )
}

export default LayoutConfig;