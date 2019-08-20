import React,{useContext} from 'react';
import { themes,MainContext } from '../../APIs/theme-context';
export function ArrowButton(props) {
    const themeContext = useContext(MainContext)
    return (
        <div className="button noselect"
            style={{
                background: themeContext.theme === themes.dark ? themeContext.theme.background : '#F6F9FD',
                color: themeContext.theme === themes.dark ? 'white' : '#252439',
            }}
        >
            <div className="icon">{props.leftIcon}</div>
            <div className="value">{props.title}</div>
            <div className="icon">{props.rightIcon}</div>
        </div>
    );
  }