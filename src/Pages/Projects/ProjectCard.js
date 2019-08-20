import React from 'react';
import ArrowForward from '@material-ui/icons/ArrowForwardIosRounded'
import UserInfoSmall from '../../Components/UserInfo/UserInfoSmall';
import { Link } from 'react-router-dom'

function ProjectCard() {
  return ( 
        <Link className="third-card project-card" to="/panel/projects/LuckyHouse">
          <div className="title-part">
              <img src="http://uupload.ir/files/ctm_ln.png" alt="Project"/>
              <div className="title-texts">
                  <div className="project-title">
                  LuckyHouse
                  </div>
                  <div className="project-owner">
                      Ebraham Ghasemi <ArrowForward className="icon" fontSize="small"/>
                  </div>
              </div>
          </div>
          <div className="details">
          <div className="item">
            <div className="title">Start Date:</div>
            <div className="value"> July 20, 2019</div>
          </div>
          <div className="item">
            <div className="title">Start Date:</div>
            <div className="value"> July 20, 2019</div>
          </div>
        </div>
          <div className="developers">
            <UserInfoSmall
              className="user"
              avatarUrl={"https://cdn.dribbble.com/users/646540/avatars/normal/65d368e1fe6958b197656beb4aad2a9f.jpeg?1516601785"}
            />
            <UserInfoSmall
              className="user"
              avatarUrl={"https://cdn.dribbble.com/users/646540/avatars/normal/65d368e1fe6958b197656beb4aad2a9f.jpeg?1516601785"}
            />
            <UserInfoSmall
              className="user"
              avatarUrl={"https://cdn.dribbble.com/users/646540/avatars/normal/65d368e1fe6958b197656beb4aad2a9f.jpeg?1516601785"}
            />
          </div> 
      </Link>    
  );
}

export default ProjectCard;