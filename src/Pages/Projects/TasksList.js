import React from 'react';
import ArrowRight from '@material-ui/icons/KeyboardArrowRightOutlined'
import { Link } from 'react-router-dom';
function TasksList(props) {
  return (
    <div className="list-box section">

        <div className="title-bar">
          <div className="title">Tasks</div>
          <div className="details"></div>
        </div>

        <aside className="sub-items">


          <Link to={"/panel/projects/LuckyHouse/section-targets/User Flow & Use Cases/tasks/Design Landing Page"} className="sub-item cursor-pointer">
            <div className="part left">
              <div className="title">User Flow & Use Cases</div>
              {/* <div className="spcaer"></div>
              <div className="description">skills: Back-End, Design</div> */}
            </div>
            <div className="part right">
                <div className="right-text">25%</div>
                <ArrowRight className="right-icon"/>
            </div>
            </Link>

            <Link to={"/panel/projects/LuckyHouse/section-targets/User Flow & Use Cases/tasks/Design Landing Page"} className="sub-item cursor-pointer">
            <div className="part left">
              <div className="title">User Flow & Use Cases</div>
              {/* <div className="spcaer"></div>
              <div className="description">skills: Back-End, Design</div> */}
            </div>
            <div className="part right">
                <div className="right-text">25%</div>
                <ArrowRight className="right-icon"/>
            </div>
          </Link>

          <Link to={"/panel/projects/LuckyHouse/section-targets/User Flow & Use Cases/tasks/Design Landing Page"} className="sub-item cursor-pointer">
            <div className="part left">
              <div className="title">User Flow & Use Cases</div>
              {/* <div className="spcaer"></div>
              <div className="description">skills: Back-End, Design</div> */}
            </div>
            <div className="part right">
                <div className="right-text">25%</div>
                <ArrowRight className="right-icon"/>
            </div>
          </Link>


        </aside>

      </div> 
  );
}

export default TasksList;