import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class FetchFavoriteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromServer: []
    };
    this.mappedList = this.mappedList.bind(this);
  }

  componentDidMount() {
    this.props.facade
      .fetchFavorites()
      .then(res => {
        this.setState({ dataFromServer: res });
      })
      .catch(err => console.log(err));
  }

  mappedList() {
    const results = this.state.dataFromServer;
    console.log(results);
    const lis = results.map((rowData, index) => {
      console.log(rowData);
      return <li key={index}>{rowData.name}</li>;
    });

    return <ul>{lis}</ul>;
  }

  render() {
    return (
      <div>
        <h2>Favorit chars of all time!</h2>
        {this.mappedList()}
        <p>But the real MVP is superman - edited by "salesmanager"</p>
        <NavLink activeClassName="active" to="/profilepage">
          <button className="btn btn-primary">Back</button>
        </NavLink>
      </div>
    );
  }
}

export default FetchFavoriteList;

//<h2>Fetching from {this.state.dataFromServer.length} different endpoints.</h2>