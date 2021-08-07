import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand">Customer Interface</a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/customers">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/loginreg/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/loginreg/contact">
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/customers/add" className="btn btn-outline-light mr-4">
          Add Customers
        </Link>
        {(sessionStorage.getItem('username')!= null)?
            (
            <Link className="btn btn-outline-danger" to={`/customers/logout`}>Logout</Link>
            )
          : null
        }
      </nav>
    );
  }
}

export default Navbar;
