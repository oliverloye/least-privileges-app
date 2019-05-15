import React, { Component } from "react"

var emptyPerson = { id: '', name: '', age: '', email: '', gender: '' }
export default class AddEditPerson extends Component {
  constructor(props) {
    super(props);
    let person = props.editPerson !== null ? props.editPerson : (Object.assign({}, emptyPerson))
    this.state = { person: person }
    // preserve the initial state in a new object
    this.baseState = this.state;
  }

  resetForm = () => {
    this.setState(this.baseState);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.person.id) {
      console.log(this.state.person);
      this.props.edit(this.state.person, evt);
    } else {
      this.props.add(this.state.person, evt);
    }
    console.log("hej");
    //var myForm = document.getElementById("myForm");
    //myForm.reset();
      let person = Object.assign({}, emptyPerson);
      this.setState({person: person});
    this.resetForm();
  }

  handleInput = (event) => {
    const target = event.target;
    const prop = target.id;
    var value = target.value;
    var person = this.state.person;
    person[prop] = value; //Make sure you understand this
    this.setState({
      person: person
    });
  }

  componentWillReceiveProps(props) {
    let person = props.editPerson !== null ? props.editPerson : (Object.assign({}, emptyPerson))
    this.setState({ person: person })
  }

  render() {
    return (
      <div>
        <form id="myForm" className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="control-label col-sm-3">Id:</label>
            <div className="col-sm-9">
              <input className="form-control" readOnly id="id" name="id" value={this.state.person.id} />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="name">Name:</label>
            <div className="col-sm-9">
              <input className="form-control" id="name" name="name" placeholder="Enter Name" onChange={this.handleInput} value={this.state.person.name} />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="age">Age:</label>
            <div className="col-sm-9">
              <input type="number" className="form-control" name="age" id="age" placeholder="Enter age" onChange={this.handleInput} value={this.state.person.age} />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="email">Email:</label>
            <div className="col-sm-9">
              <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={this.handleInput} value={this.state.person.email} />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="pwd">Gender:</label>
            <div className="col-sm-9">
              <input className="form-control" id="gender" name="gender" placeholder="Enter Gender" onChange={this.handleInput} value={this.state.person.gender} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </div>
        </form>
        
      </div>
    )
  }
}

//<p>{JSON.stringify(this.state.person)}</p>