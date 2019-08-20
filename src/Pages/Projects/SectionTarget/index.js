import React from 'react';
import { Large3PartCard } from '../../../Components/Cards/Card';
import { HeadTitle } from '../../../Components/Texts/Text';
import { ArrowButton } from '../../../Components/Buttons/Buttons';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftOutlined'
import InfoIcon from '@material-ui/icons/InfoRounded'
import AndroidIcon from '@material-ui/icons/Android'
import WebIcon from '@material-ui/icons/Code'
import { Link } from 'react-router-dom';
import UserInfoSmall from '../../../Components/UserInfo/UserInfoSmall';
import TasksList from '../TasksList';

function SectionTargetPage(props) {
  return (
    <Large3PartCard
      className="full-width-card"
      left={<Link to="/panel/projects/LuckyHouse"><ArrowButton title="LuckyHouse" leftIcon={<ArrowLeft style={{fontSize: '1.1rem'}}/>}/></Link>}
      center={<div className="multipart-card-title"><div className="card-title-desc">Section target:</div><HeadTitle className="white-text-on-dark" text={props.match.params.section_target_id}/></div>}
      right={<InfoIcon className="info-icon" style={{marginRight:10}}/>}
    >
      <div className="section-target">
          <div className="list-item">
              <div className="title">Skills</div>
              <div className="skill-items">
                  <div className="skill-item">
                      Android
                      <AndroidIcon className="skill-icon"/>
                  </div>
                  <div className="skill-item">
                      Front-End
                      <WebIcon className="skill-icon"/>
                  </div>
              </div>
          </div>
          <div className="list-item">
              <div className="title">Developers</div>
              <div className="skill-items">
                  <div className="skill-item">
                    <UserInfoSmall
                        avatarUrl={"https://cdn.dribbble.com/users/646540/avatars/normal/65d368e1fe6958b197656beb4aad2a9f.jpeg?1516601785"}
                    />
                      60%
                  </div>
                  <div className="skill-item">
                  <UserInfoSmall
                        avatarUrl={"https://cdn.dribbble.com/users/646540/avatars/normal/65d368e1fe6958b197656beb4aad2a9f.jpeg?1516601785"}
                    />
                      40%
                  </div>
              </div>
          </div>
      </div>
      <br/>
      <TasksList/>
    </Large3PartCard>
  );
}

export default SectionTargetPage;