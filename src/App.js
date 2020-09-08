import React , { useState, Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link , NavLink} from "react-router-dom";
import './index.css'


// import component
import Home from './component/Home';
import Category from './component/Category';
import PDP from './component/PDP';
import Cart from './component/Cart';


function App() {
  return (
    <>      
      <Router>

        {/* <ul>
          <li><NavLink exact activeClassName="active" to="/" >Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/Category">Category</NavLink></li>
          <li><NavLink activeClassName="active" to="/PDP">PDP</NavLink></li>
          <li><NavLink exact activeClassName="active" to="/Cart">Cart</NavLink></li>
          <li style={{float:"right"}}><NavLink exact activeClassName="active" to="/Login">Login</NavLink></li>
        </ul> */}

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Category">
            <Category/>
          </Route>
          <Route path="/PDP">
            <PDP/>
          </Route>
          <Route exact path="/Cart">
            <Cart/>
          </Route>

          <Route path="*">          
            <div className="text-center">
              <img src="https://online.globalresp.com/MyAccount/Images/404.jpg" className="img_full margin-top-10"/>
            </div>
          </Route> 

        </Switch>

      </Router>
    </>
  );
}

export default App;
