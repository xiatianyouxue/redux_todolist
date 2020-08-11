import React from 'react';
import { Route, Link} from 'react-router-dom'
import ReactPage from './video/ReactPage'
import Flutter from './video/Flutter'
import Vue from './video/Vue'
export default class Video extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return(
      <div>
        <div className='topNav'>
          <ul>
            <li><Link to='/video/reactpage/'>React教程</Link></li>
            <li><Link to='/video/Flutter/'>Flutter教程</Link></li>
            <li><Link to='/video/Vue/'>Vue教程</Link></li>
          </ul>
        </div>
        <div className='videoContent'>
          <div>
            <h3>视频教程</h3>
            <Route path='/video/reactpage/' component={ReactPage} />
            <Route path='/video/Flutter/' component={Flutter} />
            <Route path='/video/Vue/' component={Vue} />
          </div>
        </div>
      </div>
    )
  }
}
