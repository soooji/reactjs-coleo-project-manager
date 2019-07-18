import React from 'react';
import ActionCard from './ActionCard';
import Tasks from './Tasks';
import MyWorkTimeChart from '../../Components/Charts/CustomTooltipChart';
function Dashboard() {
  const workTimeData = [
    {
      label: 'Series 1',
      data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    },
    {
      label: 'Series 2',
      data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
    }
  ]
  return (
    <div>
      <ActionCard/>
      <Tasks/>
      <MyWorkTimeChart data={workTimeData}/>
    </div>
  );
}

export default Dashboard;