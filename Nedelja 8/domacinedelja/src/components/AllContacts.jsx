import React from "react";
import Contact from "./Contact";

class AllContacts extends React.Component{

    constructor(props){

        super(props);
    }

    showAllContacts(){

        let contactsListView=this.props.data.map(element=>{

            return <Contact key={element.name} name={element.name} number={element.number}></Contact>
        })

        return contactsListView;

        
    }
    render(){

        return <div>{this.showAllContacts()}</div>;

        
    }

}

export default AllContacts;