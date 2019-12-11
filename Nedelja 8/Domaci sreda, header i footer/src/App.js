import React, { useState } from 'react';
import './App.css';
import PastLList from './components/past-l-list';
import { getPastLaunches, getUpcomingLaunches } from './utility/space-x-service';
import UpcomingLList from './components/upcoming-l-list';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  const [pastData,setPastData]=useState([])
  const [upcomingData, setUpcomingData] = useState([])


  getPastLaunches().then(data=>{
    setPastData(data);
  })
  getUpcomingLaunches().then(data=>{
    setUpcomingData(data);
  })

  return (
    <div className="App">
      <Header></Header>
      <PastLList data={pastData}/>
      <br />
      <UpcomingLList data={upcomingData} />
      <Footer></Footer>
    </div>
  );
}

export default App;
