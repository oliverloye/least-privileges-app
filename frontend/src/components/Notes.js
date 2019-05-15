import React, {Component} from "react";
import {NavLink} from 'react-router-dom';

class Notes extends Component {
  render() {
    return (
      <div>
          <h3>Boss notes</h3>
          <ul>
            <li>violererrøde</li>
            <li>jeghaderæblecomputere</li>
            <li>jegelskerkurt</li>
            <li>jordenerflad</li>
          </ul>
          <NavLink activeClassName="active" to="/profilepage">
              <button className="btn btn-primary">Back</button>
          </NavLink>
        </div>
    );
  }
}

export default Notes;