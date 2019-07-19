import React from 'react';
import MessageNotificationItem from './Message';
import EventNotificationItem from './Event';
function OneDayNotifications(props) {
  return (
      <>
      <div className="notif-title-date">
        {props.date}
      </div>
      <MessageNotificationItem
        image={"https://camo.githubusercontent.com/cb0cabd444a410b9f3d2da86f7f687695a31df45/68747470733a2f2f74656c656772612e70682f66696c652f3466323834656161323431336134373939343132342e706e67"}
        content="Lorem ipsum is an example text to just fill some place in designs and doesn’t contain any value by itself. It’s is initialized by John Doe, the creator of lipsum."
        date="July 19, 13:30"
      />
      <MessageNotificationItem
        content="Lorem ipsum is an example text to just fill some place in designs and doesn’t contain any value by itself."
        date="July 19, 13:30"
      />
      <EventNotificationItem
        title="Don’t forget today meeting"
        date="July 19, 11:30"
      />
    </> 
  );
}

export default OneDayNotifications;
