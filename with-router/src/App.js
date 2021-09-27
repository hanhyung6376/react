import React, {Component} from "react";
import { HashRouter,Route, Switch, Suspens } from 'react-router-dom';
import Default from "./containers/Default";
import './style/style.scss';

const loading = (
    <div className="loading">
        <p>로딩중 ..</p>
    </div>
)

class App extends Component {
  render() {
    return (
        <HashRouter>
            <React.Suspense fallback={loading}>
        <Switch>
          <Route path="/" name="Home" render={props => <Default {...props}/>}/>
        </Switch>
            </React.Suspense>
        </HashRouter>
    )
  }
}

export default App;