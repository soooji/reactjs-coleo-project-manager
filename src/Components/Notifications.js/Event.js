import React from 'react';
function EventNotificationItem(props) {
  return (
    <div className="notif-item event">
        <div className="title">
            {props.title}
        </div>
        <div className="date">
            {props.date}
        </div>
    </div>
  );
}

export default EventNotificationItem;
