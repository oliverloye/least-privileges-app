import React from "react"
import facade from "../apiFacade";
import {NavLink} from 'react-router-dom';

export default function AllPersons(props) {
  const { persons } = props;

  var personInfo = persons.map((person) =>
    <tr key={person.id}>
      <td>{person.age}</td>
      <td>{person.name}</td>
      <td>{person.gender}</td>
      <td>{person.email}</td>
      {facade.getProfile().roles.includes("readonly") ? (
        null
        ) : <td><a className="delete-link" href="/#/employees" onClick={props.onEdit} id={person.id}>edit</a>/<a className="delete-link" href="/#/employees" onClick={props.delete} id={person.id}>delete</a></td> }
    </tr>
  )
  
  
  // var details = myPersons.map((element) => {
  // })
  // const myPersons = persons.map(element => {
  //   return element;
  // });
  // 
  // console.log("Person keys: ", personKeys);
  // var myPersons2 = personKeys.map((t) => 
  //   persons[t].map((e) => (<tr><td>e.age</td><td>e.name</td><td>e.gender</td><td>e.email</td></tr>))
  //   );
    
  return (
    <div>
      <p>Current number of clients: {persons.length}</p>
      <p><i>Only the Sales Manager is allowed to delete clients!</i></p>
      <table className="table">
        <thead>
          <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th><th></th></tr>
        </thead>
        <tbody>
          {personInfo}
        </tbody>
      </table>
      <NavLink activeClassName="active" to="/profilepage">
          <button className="btn btn-primary">Back</button>
      </NavLink>
    </div>
  )
}
