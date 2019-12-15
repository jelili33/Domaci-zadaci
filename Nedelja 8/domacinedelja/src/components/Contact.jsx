import React from "react";

class Contact extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
        <div>

           <p>{this.props.name}</p>
           <p>{this.props.number}</p>

        </div>


        )
    }
}

export default Contact;