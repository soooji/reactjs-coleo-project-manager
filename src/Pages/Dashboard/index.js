import React from 'react';
import Tasks from './Tasks';
import BarChart from '../../Components/Charts/BarChart';
import Projects from './Projects';
function Dashboard() {
  const workTimeData = [
    {
      label: 'Parkners',
      data: [["Su", 1], ["Mo", 2], ["Tu", 4], ["We", 2], ["Th", 7],["Fr", 5],["Sa", 6]]
    },
    {
      label: 'LuckyHouse',
      data: [["Su", 3], ["Mo", 1], ["Tu", 5], ["We", 6], ["Th", 2],["Fr", 3],["Sa", 4]],
    },
    {
      label: 'Project Manager',
      data: [["Su", 2], ["Tu", 4], ["We", 3], ["Fr", 5],["Sa", 7]],
    } 
  ]
  return (
    <div className="column-items">
      <Tasks/>
      <div className="row-items">
        <BarChart data={workTimeData}/>
        <Projects/>
      </div>
    </div>
  );
}

export default Dashboard;