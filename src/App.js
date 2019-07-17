import React,{useState} from 'react';
import './App.css'
import LeftSide from './Components/Sides/LeftSide'
import Dashboard from './Pages/Dashboard';
import {CenterContent} from './Components/Base/Main'
import RightSide from './Components/Sides/RightSide';
import Moon from '@material-ui/icons/Brightness2'

import {ThemeContext, themes} from './APIs/theme-context';

function App() {
  const [theme,setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App ${theme === themes.dark ? 'dark-theme' : 'light-theme'}`} style={{background:theme.background}}>

        <LeftSide
          ToggleTheme={<div className={`toggle-theme-button ${theme === themes.dark ? 'active' : ''}`} onClick={()=>toggleTheme()}><Moon className="toggle-theme-icon"/></div>}
          />

        <CenterContent>
          <Dashboard/>
        </CenterContent>

        <RightSide/>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
