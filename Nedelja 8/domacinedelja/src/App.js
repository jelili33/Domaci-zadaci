import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"
import AllContacts from "./components/AllContacts"
import { Data } from './utilities/Data';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={contacts:[], showConfirmation:false, contactToUpdate:{}, filteredArray:[]}
  }

  componentDidMount(){
    this.setState({contacts:Data});
  }

  filterList=(name)=>{

    let newFilteredArray=this.state.contacts.filter(element=>{

      return element.name.toLowerCase().indexOf(name.toLowerCase())!=-1;
    })

    this.setState({filteredArray:newFilteredArray})

  }
  updateContacts=(newContact)=>{
    
    let contactExists = this.state.contacts.find(contact => {
      return contact.name == newContact.name; 
    });

    if(contactExists != null){
        this.setState({showConfirmation:true, contactToUpdate:newContact});
    }
    else{
      this.setState({showConfirmation:false});
      let newContacts = this.state.contacts.concat(newContact);
      this.setState({contacts:newContacts});
    }
  }
  updateNumber=()=>{
    let contactExists = this.state.contacts.find(contact => {
      return contact.name == this.state.contactToUpdate.name; 
    });

    let indexOfContact = this.state.contacts.indexOf(contactExists);
    let newList = [...this.state.contacts];
    newList[indexOfContact] =  {...this.state.contactToUpdate};
    this.setState({contacts : newList, showConfirmation:false});
  }

  notUpdateNumber=()=>{
    this.setState({showConfirmation:false});
  }
  showConfirmationForUpdatingUser(){
    if(this.state.showConfirmation){
      return (<div>
        <h3>Korisnik postoji. Da li hocete da aktualizujete broj?</h3>
        <button onClick={this.updateNumber}>Da</button>
        <button onClick={this.notUpdateNumber}>Ne</button>
      </div>
      )
    }
    else{
      return "";
    }
  }
  showContacts=()=>{

    if (this.state.filteredArray.length>0){

      return <AllContacts data={this.state.filteredArray}></AllContacts>

    }

    else {
      return <AllContacts data={this.state.contacts}></AllContacts>
    }
  }
  render() { 
  return (
    <div className="App">

      <Form updateContacts={this.updateContacts} function={this.filterList}></Form>
      {this.showConfirmationForUpdatingUser()}
      {this.showContacts()}
      
    </div>
  );
  }
}

export default App;
