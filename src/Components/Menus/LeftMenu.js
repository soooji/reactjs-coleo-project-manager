import React from 'react';
import UserInfoLarge from '../UserInfo/UserInfoLarge';

function VerticalMenu(props) {
  return (
    <div className="vertical-menu">
        {props.ToggleTheme}
        <div>
        <UserInfoLarge avatarUrl="https://cdn.dribbble.com/users/646540/avatars/normal/65d368e1fe6958b197656beb4aad2a9f.jpeg?1516601785" style={{marginBottom:40}}/>
            {props.items.map(
                (v,k)=>
                <div key={k} className={`menu-item ${v.isActive ? 'active' : ''}`}>
                    <div>{v.icon}</div>
                    <div className="menu-title">{v.title}</div>
                </div>
            )}
        </div>
        <div>
            {props.downItems.map(
                (v,k)=>
                <div key={k} className={`menu-item`}>
                    <div>{v.icon}</div>
                    <div className="menu-title">{v.title}</div>
                </div>
            )}
        </div>
    </div>
  );
}

export default VerticalMenu;