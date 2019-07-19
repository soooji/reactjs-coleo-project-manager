import React from 'react';
import OneDayNotifications from './OneDayNotifications';

function NotificationCenter(props) {
  return (
    <div style={props.style} className={props.className}>
      <OneDayNotifications date="Today, July 19"/>
      <OneDayNotifications date="Thursday, July 18"/>
      <OneDayNotifications date="Wednesday, July 17"/>
    </div> 
  );
}

export default NotificationCenter;
