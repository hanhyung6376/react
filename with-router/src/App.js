import React, {Component} from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./containers/Home";

class App extends Component {
  render() {
    return (
        <Switch>
          <Route path="/" name="Home" component={Home}/>
        </Switch>
    )
  }
}