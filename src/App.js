import React from "react";
import "./App.css";
import {withRouter} from 'react-router-dom';
import Nav from "./Components/Nav/Nav";
import routes from "./routes";

function App(props) {
  console.log(props)
  return (
    <div className="App">
      {props.location.pathname === "/" || props.location.pathname === "/register" 
      ? (<>
      {routes}
      </>) 
      : (<>
      <Nav />
      {routes}
      </>)}
    </div>
  );
}

export default withRouter(App);