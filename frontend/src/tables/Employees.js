import React, {Component} from 'react';
import AddEditPerson from "../components/AddEditPerson";
import AllPersons from "../components/AllPersons"
import facade from "../dataFacade";
import apiFacade from "../apiFacade";

class Employees extends Component {
    constructor(props) {
      super(props);
      this.state = { persons: [], person: null }
    }
  
    showAll = async () => {
      try {
        const persons = await facade.getPersons();
        await this.setState({persons:persons});
      } catch(err) {
        alert("REMOVE ME "+ err);
      }
    }
  
    add = async(person) => {
      try {
        await facade.addPerson(person);
        await this.showAll();
      } catch(err) {
        alert("REMOVE ME " + err);
      }
    }
  
    onEdit = async(person) => {
      var id = person.target.id;
      var myPerson = await facade.getPerson(id);
      //await facade.editPerson(myPerson);
      //await this.showAll();
      this.setState({person: myPerson})
      console.log(id);
    }
  
    edit = async(person) => {
      try {
      await facade.editPerson(person);
      await this.showAll();
      } catch(err) {
        alert("REMOVE ME " + err);
      }
    }
  
    delete = async(person) => {
      var id = person.target.id;
      await facade.deletePerson(id);
      await this.showAll();
      console.log(id);
    }
  
    componentDidMount() {
      this.showAll();
    }
  
    save = async () => {
        //const persons = await facade.getPersons();
        //this.setState({ persons: persons });
      //const newPerson = await facade.addPerson(person);
      //this.showAll();
    }
  
    render() {
      return (
        <div style={{ margin: 20, width: "100%" }}>
          <div className="row">
            <div className="col-md-6">
              <h3>Clients</h3>
              <AllPersons delete={this.delete} onEdit={this.onEdit} persons={this.state.persons} />
            </div>
            {apiFacade.getProfile().roles.includes("readonly") ? (
              null
            ) : 
            <div className="col-md-6">
              <h3 style={{textAlign:"center"}}>Add Persons</h3>
              <AddEditPerson edit={this.edit} editPerson={this.state.person} onEdit={this.onEdit} add={this.add}/>
            </div>}
          </div>
  
        </div>
      );
    }
  }
  
  
  export default Employees;