import React,{useContext} from 'react';

import {Route,Link} from "react-router-dom";

import {MainContext, themes} from './../../APIs/theme-context';

import Moon from '@material-ui/icons/Brightness2'

import DashboardIcon from '@material-ui/icons/DashboardOutlined'
import ProjectsIcon from '@material-ui/icons/FolderOutlined'
import CalendarIcon from '@material-ui/icons/CalendarTodayOutlined'
import LogOutIcon from '@material-ui/icons/PowerSettingsNewOutlined'
import UserInfoLarge from './../UserInfo/UserInfoLarge';

function LeftSide() {
    const cntx = useContext(MainContext)

    const MenuItems = [
        {title:'Dashboard',icon:<DashboardIcon fontSize="small"/>,link:'/panel'},
        {title:'Calendar',icon:<CalendarIcon fontSize="small"/>,link:'/panel/calendar/'},
        {title:'Projects',icon:<ProjectsIcon fontSize="small"/>,link:'/panel/projects/'},
    ]
    const DownMenuItems = [
    ]
    
    return(
        <div className="left-side">
            <div className="vertical-menu">
                <div className={`toggle-theme-button ${cntx.theme === themes.dark ? 'active' : ''}`} onClick={()=>cntx.toggleTheme()}><Moon className="toggle-theme-icon"/></div>
                <div>
                <UserInfoLarge className="noselect" avatarUrl="https://cdn.dribbble.com/users/646540/avatars/normal/65d368e1fe6958b197656beb4aad2a9f.jpeg?1516601785" style={{marginBottom:40}}/>
                <div>
                    {MenuItems.map((v,k)=><MenuLink key={k} activeOnlyWhenExact={true} item={v} />)}
                </div>
                </div>
                <div>
                  {DownMenuItems.map(
                      (v,k)=>
                      <div key={k} className={`menu-item`}>
                          <div>{v.icon}</div>
                          <div className="menu-title">{v.title}</div>
                      </div>
                  )}
                  <div onClick={()=>cntx.logout()} className={`menu-item`}>
                      <div><LogOutIcon fontSize="small"/></div>
                      <div className="menu-title">Log Out</div>
                  </div>
                </div>
            </div>
        </div>
    )
}

function MenuLink({ item, activeOnlyWhenExact }) {
    return (
      <Route
        path={item.link}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
          <Link to={item.link}>
            <div className={`menu-item ${match ? "active" : ""}`}>
              <div>{item.icon}</div>
              <div className="menu-title">{item.title}</div>
            </div>
          </Link>
        )}
      />
    );
  }

export default LeftSide;