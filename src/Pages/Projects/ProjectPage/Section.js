import React from 'react';
import ArrowRight from '@material-ui/icons/KeyboardArrowRightOutlined'
import { Link } from 'react-router-dom';
function SectionItem(props) {
  return (
    <div className="list-box section">

        <div className="title-bar">
          <div className="title">Section 1</div>
          <div className="details">2019.02.13  -  2019.05.15</div>
        </div>

        <aside className="sub-items">


          <Link to={"/panel/projects/LuckyHouse/section-targets/User Flow & Use Cases"} className="sub-item cursor-pointer">
            <div className="part left">
              <div className="title">User Flow & Use Cases</div>
              <div className="spcaer"></div>
              <div className="description">skills: Back-End, Design</div>
            </div>
            <div className="part right">
                <div className="right-text">25%</div>
                <ArrowRight className="right-icon"/>
            </div>
            </Link>

          <Link to={"/panel/projects/LuckyHouse/section-targets/User Flow & Use Cases"} className="sub-item cursor-pointer">
            <div className="part left">
              <div className="title">User Flow & Use Cases</div>
              <div className="spcaer"></div>
              <div className="description">skills: Back-End, Design</div>
            </div>
            <div className="part right">
                <div className="right-text">25%</div>
                <ArrowRight className="right-icon"/>
            </div>
          </Link>

          <div className="sub-item cursor-pointer">
            <div className="part left">
              <div className="title">User Flow & Use Cases</div>
              <div className="spcaer"></div>
              <div className="description">skills: Back-End, Design</div>
            </div>
            <div className="part right">
                <div className="right-text">25%</div>
                <ArrowRight className="right-icon"/>
            </div>
          </div>


        </aside>

      </div> 
  );
}

export default SectionItem;