import React from "react";
import {BrowserRouter as Router ,Route,Switch } from 'react-router-dom'
import './App.css';
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavBar from "./NavBar";
import Register from "./pages/Register";
import PrivateRoute from "./PrivateRoute";
import { Materiel } from "./pages/Materiel";
import { places } from "./pages/places";

function App() {
  return ( 
  <Router>
    <NavBar/>
      <switch>
        <Route exact path="/" component={Home}/>
        <Route  exact path="/Register" component={Register}/>
        <PrivateRoute  exact path="/Feed" component={Feed}/>
        <Route  exact path="/Login" component={Login}/>
        <Route  exact path="/Materiel" component={Materiel}/>
        <Route  exact path="/places" component={places}/>


      </switch>
    </Router>
  );
}

export default App;
