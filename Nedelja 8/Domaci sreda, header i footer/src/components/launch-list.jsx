import React from 'react';
import Launch from './launch';


//Has atribute data, which is array that uses for display
const LaunchList = (props) => {
    let {data} = props;
    return (
        <launchlist>
        {data.map(x=>{return <Launch launch={x} key={x.flight_number}/>})}
        </launchlist>
    );
}

export default LaunchList;