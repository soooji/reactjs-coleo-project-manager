import React from 'react';
function TaskActivities(props) {
  return (
    <div className="list-box section">

        <div className="title-bar">
          <div className="title">Tasks Activities</div>
          <div className="details"></div>
        </div>

        <aside className="sub-items">
            <div className="task-deatils">
                <div className="part full">
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
            </div>
        </aside>

      </div> 
  );
}

export default TaskActivities;