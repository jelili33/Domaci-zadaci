import React from 'react';
import ReactDOM from 'react-dom';
import { getInfo } from '../utility/space-x-service';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: "default", founder:"", address:"", city:"", isPageLoaded:false};
    }

    componentDidMount(){
            getInfo().then(data => {
                this.setState({name:data.name, founder:data.founder, address:data.headquarters.address, city:data.headquarters.city, isPageLoaded:true})
            })
    }

  render() {
    let htmlToShow = <h3>Page is loading...</h3>;
    if(this.state.isPageLoaded){
        htmlToShow = ( <div>
            <div><span><b>Company name:</b></span> <span>{this.state.name}</span></div>
            <div><span><b>Company founder:</b></span> <span>{this.state.founder}</span></div>
            <div><span><b>Company adress:</b></span> <span>{this.state.address}, {this.state.city}</span></div>
            </div>)
    }
    return (<div>
       {htmlToShow}
    </div>);
  }
}

export default Header;