import React from 'react';
import { NavLink } from "react-router-dom"

export default class Nav extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <NavLink to={'/home'}>home</NavLink>
        <NavLink to={'/about'}>about</NavLink>
      </div>
    );
  }
}
