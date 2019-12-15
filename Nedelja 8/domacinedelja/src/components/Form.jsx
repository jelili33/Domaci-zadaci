import React from "react";
import {addNewContact} from "../utilities/Data"
 
class Form extends React.Component{

constructor(props){
super(props);
this.state={name:"", number:"", showErrorMessageForEmptyInput: false, showErrorMessageForPlus: false}
}

componentDidMount(){
this.setState({})
}

onChangenName=(e)=>{

    this.props.function(e.target.value);
    this.setState({name:e.target.value});

}
onChangenNumber =(e)=> {
    this.setState({number:e.target.value});

}

errorMessageEmptyField=()=>{

     if (this.state.showErrorMessageForEmptyInput==true){
    return (<div>
        <h3>Nisu popunjena sva obavezna polja</h3>
          </div>
      )}
}

errorMessagePlus=()=>{

    if (this.state.showErrorMessageForPlus==true){
   return (<div>
       <h3>Broj telefona mora biti unet u formatu +ххх ххххххххх</h3>
         </div>
     )}
}
onButtonClick =()=>{

    if(this.state.name=="" || this.state.number==""){
        this.setState({showErrorMessageForEmptyInput: true});
        
            }

    else{

        if (this.state.number[0]=="+"){
            let newContact = {name: this.state.name, number: this.state.number}

            this.props.updateContacts(newContact);

            this.setState({name:"", number:"",showErrorMessageForEmptyInput: false, showErrorMessageForPlus: false});
            }

        else{
           this.setState({showErrorMessageForPlus: true});
    }

}}

render(){

    return(
        <div>
            <input id="name" type="text" value={this.state.name} onChange={this.onChangenName}/>
            <input id="number" type="text" value={this.state.number} onChange={this.onChangenNumber}/>
            <input type="submit" value="Click" onClick={this.onButtonClick}/>
            {this.errorMessageEmptyField()}
            {this.errorMessagePlus()}
        </div>
            )
}

}

export default Form;