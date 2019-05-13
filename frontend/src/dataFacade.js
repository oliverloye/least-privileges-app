const URL = "http://localhost:3456/api";


//The two methods below, are the utility-methods introduced here (use them if you like):
//https://docs.google.com/document/d/1hF9P65v_AJKCjol_gFkm3oZ1eVTuOKc15V6pcb3iFa8/edit?usp=sharing 

function makeOptions(method, body) {
  var opts =  {
    method: method,
    headers: {
      "Content-type": "application/json"
    }
  }
  if(body){
    opts.body = JSON.stringify(body);
  }
  return opts;
 }

function handleHttpErrors(res){
  if(!res.ok){
    return Promise.reject({status: res.status, fullError: res.json() })
  }
  return res.json();
}
 
class DataFacade {
  
  /*
  OBSERVE-1: This returns a promise, NOT the actual data, you must handle asynchronicity by the client
  OBSERVE-2: To "simplify" how to handle asynchronicity you can use async/await as sketche in the example below*/
  // getPersons() {
  //   return fetch(URL).then(handleHttpErrors)
  // }
  
  // In order to use await, a method must be "marked" with async
  async getPersons() {
    return await fetch(URL).then(handleHttpErrors)
  }

  async getPerson(id) {
    return await fetch(URL + "/" + id).then(handleHttpErrors)
  }

  async editPerson(person) {
    var id = person.id;
    var personWithoutId = {
        name: person.name, 
        age: person.age, 
        gender: person.gender, 
        email: person.email
        }
    return await fetch(URL + "/" + id, makeOptions("PUT", personWithoutId)).then(handleHttpErrors)
  }

  async addPerson(person) {
    return await fetch(URL, makeOptions("POST", person)).then(handleHttpErrors)
  }

  async deletePerson(id) {
    return await fetch(URL + "/" + id, makeOptions("DELETE")).then(handleHttpErrors)
  }
  

 }

export default new DataFacade();
