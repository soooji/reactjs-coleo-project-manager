import React from 'react';
import VerticalMenu from '../Menus/LeftMenu';
import DashboardIcon from '@material-ui/icons/DashboardOutlined'
import ProjectsIcon from '@material-ui/icons/FolderOutlined'
import CalendarIcon from '@material-ui/icons/CalendarTodayOutlined'
import ListIcon from '@material-ui/icons/ListOutlined'
import SettingsIcon from '@material-ui/icons/SettingsOutlined'
import LogOutIcon from '@material-ui/icons/PowerSettingsNewOutlined'
const MenuItems = [
    {title:'Dashboard',icon:<DashboardIcon fontSize="small"/>,link:'#',isActive: true},
    {title:'Projects',icon:<ProjectsIcon fontSize="small"/>,link:'#'},
    {title:'Calendar',icon:<CalendarIcon fontSize="small"/>,link:'#'},
    {title:'Tasks',icon:<ListIcon fontSize="small"/>,link:'#'},
    {title:'Settings',icon:<SettingsIcon fontSize="small"/>,link:'#'},
]
const DownMenuItems = [
    {title:'Log Out',icon:<LogOutIcon fontSize="small"/>,link:'#'},
]
function LeftSide(props) {
  return (
    <div className="left-side">
        <VerticalMenu ToggleTheme={props.ToggleTheme} items={MenuItems} downItems={DownMenuItems}/>
    </div>
  );
}

export default LeftSide;
