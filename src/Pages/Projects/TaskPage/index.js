import React from 'react';
import { Large3PartCard } from '../../../Components/Cards/Card';
import { HeadTitle } from '../../../Components/Texts/Text';
import { ArrowButton } from '../../../Components/Buttons/Buttons';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftOutlined'
import InfoIcon from '@material-ui/icons/InfoRounded'
import { Link } from 'react-router-dom';
import TasksList from '../TasksList';
import TaskActivities from './TaskActivities';

function TaskPage(props) {
  return (
    <Large3PartCard
      className="full-width-card"
      left={<Link to="/panel/projects/LuckyHouse/section-targets/User Flow & Use Cases"><ArrowButton title="LuckyHouse" leftIcon={<ArrowLeft style={{fontSize: '1.1rem'}}/>}/></Link>}
      center={<div className="multipart-card-title"><div className="card-title-desc">Task:</div><HeadTitle className="white-text-on-dark" text={props.match.params.task_id}/></div>}
      right={<InfoIcon className="info-icon" style={{marginRight:10}}/>}
    >
        <div className="task-deatils">
            <div className="part half">
                <div className="task-detail-item horiz">
                    <div className="title">Start</div>
                    <div className="desc">
                        2019.03.12  12:00 PM
                    </div>
                </div>
                <div className="task-detail-item horiz">
                    <div className="title">End</div>
                    <div className="desc">
                        2019.05.12  22:30 PM
                    </div>
                </div>
                <div className="task-detail-item horiz">
                    <div className="title">Points</div>
                    <div className="desc">
                        23
                    </div>
                </div>
            </div>
            <div className="part half">
                <div className="task-detail-item vert">
                    <div className="title">Description:</div>
                    <div className="desc">
                    Lorem ipsum is an example text to just fill some place in designs and doesn’t contain any value by itself. It’s is initialized by John Doe, the creator of lipsum.  just fill some place in designs and doesn’t contain any value by itself. It’s is initialized by John Doe, the creator of lipsum.
                    </div>
                </div>
            </div>
        </div>
        <br/>
    <TaskActivities/>
      <br/>
      <TasksList/>
    </Large3PartCard>
  );
}

export default TaskPage;