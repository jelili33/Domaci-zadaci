import React from 'react';
import ReactDOM from 'react-dom';
import { getRoadster } from '../utility/space-x-service';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: "default", orbit_type:"", details:"", isDataLoaded:false};
    }

    componentDidMount(){
          getRoadster().then(data => {
                this.setState({name:data.name, orbit_type:data.orbit_type, details:data.details,isDataLoaded:true})
            })
    }

    renderRoadsterData(){
      let loading="Data processing";
      if (this.state.isDataLoaded){
        loading=(
          <div class="bottom-line">
             <div><span><b>Roadster name:</b></span> <span>{this.state.name}</span></div>
             <div><span><b>Roadster orbite type:</b></span> <span>{this.state.orbit_type}</span></div>
             <div><span><b>Roadster detail:</b></span> <span>{this.state.details}</span></div>
                
           </div>);
  
      }
      return loading;
    }

 
  render() {


    return (
      <div class="bottom-line">
          {this.renderRoadsterData()}
     </div>
     )
  }
}

export default Footer;