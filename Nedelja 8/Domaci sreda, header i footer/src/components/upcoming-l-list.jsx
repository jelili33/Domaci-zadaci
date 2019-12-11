import React, { useState } from 'react';
import LaunchList from './launch-list';
import DataYearFilter from './data-year-filter';
import { fillFutureYearsToArray } from '../utility/date-utility'




const UpcomingLList= ({data})=>{

    const [displayData,setDisplayData]= useState(data)

    const handleChange=(e)=>{
        console.log("Hello")
        console.log(e.target.value);
        setDisplayData(data.filter(x=>{return x.launch_year==e.target.value}));
    }
    return (
        <>
        <DataYearFilter handleChange={handleChange} fillYearsToArray={fillFutureYearsToArray}/>
        <LaunchList data={displayData}/>
        </>
    );
}

export default UpcomingLList;