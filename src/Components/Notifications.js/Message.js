import React from 'react';
import UserInfoSmall from '../UserInfo/UserInfoSmall';
function MessageNotificationItem(props) {
  return (
    <div className="notif-item message">
        <div className="notif-title-bar">
          <UserInfoSmall
            userFullName={"Morteza Afshari"}
            avatarUrl={"https://cdn.dribbble.com/users/646540/avatars/normal/65d368e1fe6958b197656beb4aad2a9f.jpeg?1516601785"}
          />
          <div className="notif-date">
            {props.date}
          </div>
        </div>
        {props.image ? 
        <img
          alt="Cover"
          src={props.image}
          className="notif-image"/>
        :null}
        <div className="notif-content">
        {props.content}
        </div>
    </div>
  );
}

export default MessageNotificationItem;