import React from 'react';
import {HashRouter, Switch, Route, Redirect} from "react-router-dom"
import './style/common.css'
import About from "./views/About"
import Home from "./views/Home"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route component={About} exat path='/about'/>
            <Route component={Home} path='/home'/>
            <Route path='/' render={() => <Redirect to={'/home'}/>}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}


export default App;
