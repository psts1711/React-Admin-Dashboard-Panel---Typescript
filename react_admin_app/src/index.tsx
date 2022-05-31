import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import {Provider} from "react-redux";
import  Store from "./redux/reducers"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
      <Provider store={Store}>
          <Router>
            <App />
        </Router>
      </Provider>
 
);


