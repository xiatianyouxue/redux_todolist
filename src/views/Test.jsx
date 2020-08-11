import React from 'react';
import Home from "./Home"
import About from "./About"
import IfDemo from "./ifDemo"
import Nav from "./nav"
import { BrowserRouter as Router, Route} from 'react-router-dom'
export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'react',
      count: 0
    }
  }

  increase() {
    this.setState({
      count: this.state.count += 1
    })
  }

  decrease() {
    this.setState({
      count: this.state.count -= 1
    })
  }

  render() {
    // const list = ['web', 'java', 'js']
    return (
      <Router>
        <div>
          {/*<Home list={list}/>*/}
          {/*<p>{this.state.count}</p>*/}
          {/*<button onClick={this.increase.bind(this)}>增加</button>*/}
          {/*<button onClick={this.decrease.bind(this)}>减少</button>*/}
          < Nav/>
          <Route component={Home} path={'/home'}></Route>
          <Route component={About} path={'/about'}></Route>
        </div>
      </Router>
    );
  }
}
