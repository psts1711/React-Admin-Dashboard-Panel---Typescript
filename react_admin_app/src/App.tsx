import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import HomeConfig from './pages/HomeConfig'


function App() {
  const user = JSON.parse(localStorage.getItem('profile') as string)

  return (
      <Router>
        <Switch>
            <Route path="/" exact component={HomeConfig}/>
            <Route path="/dashboard" exact component={HomeConfig}/>

            <Route path="/employeelist"   exact component={HomeConfig}/>
            <Route path="/userlist"  exact component={HomeConfig}/>

            <Route path="/login" exact component={()=>(!user?<Login/> : <Redirect to="/"/>)}/>
            <Route path="/register" exact component={()=>(!user?<Register/> : <Redirect to="/"/>)}/>

        </Switch>
      </Router>

  );
}

export default App;
