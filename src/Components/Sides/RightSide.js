import React,{useState} from 'react';
import NotificationCenter from '../Notifications.js/NotificationCenter';
import CurrentTask from '../Notifications.js/CurrentTask';
function RightSide() {
  const [activeTab,setActiveTab] = useState('notifications'); //conversation or notifications
  return (
    <div className="right-side">
      <div className="toggle-options notif-toggle-options">
        <div className={`toggle-option ${activeTab === "notifications" ? 'active' : ''}`} onClick={()=>setActiveTab('notifications')}>
          Notifications
        </div>
        <div className={`toggle-option ${activeTab === "conversation" ? 'active' : ''}`} onClick={()=>setActiveTab('conversation')}>
          Conversation
        </div>
      </div>

      <NotificationCenter/>

      <CurrentTask/>
    </div>
  );
}

export default RightSide;
