import React,{useState,useContext} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect} from "react-router-dom";

import './Static/Styles/App.css';
import Dashboard from './Pages/Dashboard';
import {CenterContent} from './Components/Base/Main'


import {MainContext, themes} from './APIs/theme-context';
import Projects from './Pages/Projects/index';
import Calendar from './Pages/Calendar/index';
import ActionCard from './Components/Base/ActionCard';
import ProjectPage from './Pages/Projects/ProjectPage/index';
import SectionTarget from './Pages/Projects/SectionTarget/index';
import Task from './Pages/Projects/TaskPage';
import AuthPage from './Pages/Auth/index';
import LeftSide from './Components/Sides/LeftSide';
import HomePage from './Pages/Home/index';

function PrivateRoute({ component: Component, ...rest }) {
  const cntxt = useContext(MainContext)
  return (
    <Route
      {...rest}
      render={props =>
        cntxt.token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function App() {
  const [theme,setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') === "light" ? themes.light : themes.dark : themes.light);
  const [token,setTokenText] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : null);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
    localStorage.setItem('theme',theme === themes.dark ? 'light' : 'dark');
  };
  const login = () => {
    setTimeout(()=>{
      setToken('1234');
    },1000)
  };
  const logout = () => {
    setTimeout(()=>{
      setToken(null);
    },1000)
  };
  const setToken = (token) => {
    if(!token) {
      localStorage.removeItem('token');
      setTokenText(null);
    } else {
      localStorage.setItem('token',token);
      setTokenText(token);
    }
  }
  return (
    <Router>
      <MainContext.Provider value={{theme:theme,toggleTheme:()=>toggleTheme(),token,setToken,login,logout}}>
        
        <div className={`App ${theme === themes.dark ? 'dark-theme' : 'light-theme'}`} style={{background:theme.background}}>

          <Route path="/" exact component={HomePage} />

          <Route path="/login" component={AuthPage}/>

          <PrivateRoute path="/panel" component={PanelRoute}/>

        </div>
      </MainContext.Provider>
    </Router>
  );
}
// Nested Routes
function PanelRoute({match}) {
  return(
    <>
      <LeftSide/>
      <CenterContent>
        <ActionCard/>
        <PrivateRoute path={`${match.path}`} exact component={Dashboard} />
        <PrivateRoute path={`${match.path}/projects`} component={ProjectsRoute} />
        <PrivateRoute path={`${match.path}/calendar`} component={Calendar} />
      </CenterContent>
    </>
  )
}

function ProjectsRoute({match}) {
return(
  <>
  {console.log("seen Projects")}
    <PrivateRoute path={`${match.path}`} exact component={Projects} />
    <PrivateRoute path={`${match.path}/:id`} component={ProjectPageRoute} />
  </>
)}
function ProjectPageRoute({match}) {
  return (
    <>
    {console.log("seen ProjectPage")}
      <PrivateRoute path={`${match.path}`} exact component={ProjectPage} />
      <PrivateRoute path={`${match.path}/section-targets/:section_target_id`} component={SectionTargetRoute}/>
    </>
  )
}
function SectionTargetRoute({match}) {
  return (
    <>
    {console.log("seen SectionTarget")}
      <PrivateRoute path={`${match.path}`} exact component={SectionTarget} />
      <PrivateRoute path={`${match.path}/tasks/:task_id`} component={Task}/>
    </>
  )
}

export default App;
