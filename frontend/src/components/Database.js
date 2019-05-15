import React, {Component} from "react";
import {NavLink} from 'react-router-dom';

class Database extends Component {
  render() {
    return (
      <div>
          <h3>Database</h3>
          <table className="mb-2">
            <tbody>
              <tr>
                <th>username</th>
                <th>password</th> 
              </tr>
              <tr>
                <td>admin</td>
                <td>$2a$10$D1oguZ2Z2Wm3gtwRz3CxYuIafily40NQiY5nJP9Z9g8kqAsSowcIe</td>
              </tr>
              <tr>
                <td>superuser</td>
                <td>$2a$10$ZkAQKFqVexUOFlTLFNYFNuJAArz6Kz.FHy3tXRWPwCqKbz0L5pcQ2</td>
              </tr>
              <tr>
                <td>testuser</td>
                <td>$2a$10$ILJioveL0S4PhdBFmuXZde5tPFliZqZLjfUs.tc5PMUW5OUVGy9ni</td>
              </tr>
              <tr>
                <td>user</td>
                <td>$2a$10$fXISXX8HS1UN5o0clVc6P.LqTxX7YOUifjW/1lHzF9jiflkXybmVa</td>
              </tr>
            </tbody>
          </table>
          <NavLink activeClassName="active" to="/profilepage">
              <button className="btn btn-primary">Back</button>
          </NavLink>
        </div>
    );
  }
}

export default Database;