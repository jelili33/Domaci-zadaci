import React, { useState } from 'react';
import LaunchList from './launch-list';
import DataYearFilter from './data-year-filter';
import { fillYearsToArray } from '../utility/date-utility'




const PastLList= ({data})=>{

    const [displayData,setDisplayData]= useState(data)

    const handleChange=(e)=>{
        console.log("Hello")
        console.log(e.target.value);
        setDisplayData(data.filter(x=>{return x.launch_year==e.target.value}));
    }
    return (
        <>
        <DataYearFilter handleChange={handleChange} fillYearsToArray={fillYearsToArray}/>
        <LaunchList data={displayData}/>
        </>
    );
}

export default PastLList;