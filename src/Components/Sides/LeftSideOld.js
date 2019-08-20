import React from 'react';
import { BrowserRouter as Link,Route } from "react-router-dom";
import DashboardIcon from '@material-ui/icons/DashboardOutlined'
import ProjectsIcon from '@material-ui/icons/FolderOutlined'
import CalendarIcon from '@material-ui/icons/CalendarTodayOutlined'
import LogOutIcon from '@material-ui/icons/PowerSettingsNewOutlined'
import UserInfoLarge from '../UserInfo/UserInfoLarge';

// import ListIcon from '@material-ui/icons/ListOutlined'
// import SettingsIcon from '@material-ui/icons/SettingsOutlined'

const MenuItems = [
    {title:'Dashboard',icon:<DashboardIcon fontSize="small"/>,link:'/',isActive: true},
    {title:'Calendar',icon:<CalendarIcon fontSize="small"/>,link:'/calendar'},
    {title:'Projects',icon:<ProjectsIcon fontSize="small"/>,link:'/projects'},
    // {title:'Tasks',icon:<ListIcon fontSize="small"/>,link:'#'},
    // {title:'Settings',icon:<SettingsIcon fontSize="small"/>,link:'#'},
]
const DownMenuItems = [
    {title:'Log Out',icon:<LogOutIcon fontSize="small"/>,link:'#'},
]
function LeftSideOld(props) {
  return (
    <div className="left-side">
      <div className="vertical-menu">
        {props.ToggleTheme}
            <div>
            <UserInfoLarge className="noselect" avatarUrl="https://cdn.dribbble.com/users/646540/avatars/normal/65d368e1fe6958b197656beb4aad2a9f.jpeg?1516601785" style={{marginBottom:40}}/>
                {MenuItems.map(
                    (v,k)=>
                    <Route
                        key={k}
                        path={v.path}
                        component={<div className={`menu-item ${v.isActive ? 'active' : ''}`}>
                            <div>{v.icon}</div>
                            <div className="menu-title">{v.title}</div>
                        </div>}
                    />
                )}
            </div>
            <div>
                {DownMenuItems.map(
                    (v,k)=>
                    <div key={k} className={`menu-item`}>
                        <div>{v.icon}</div>
                        <div className="menu-title">{v.title}</div>
                    </div>
                )}
            </div>
          </div>
          {props.children}
    </div>
  );
} 

export default LeftSideOld;