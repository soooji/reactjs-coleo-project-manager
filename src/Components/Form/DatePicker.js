import React,{useContext} from 'react';
import DayPickerInput from "react-day-picker/DayPickerInput";
import {formatDate} from 'react-day-picker/moment'
import CalendarIcon from '@material-ui/icons/CalendarTodayOutlined'
import 'moment/locale/es-us';
import "react-day-picker/lib/style.css";
import { themes,ThemeContext } from '../../APIs/theme-context';
export function DatePicker(props) {  
  const theme = useContext(ThemeContext)
  return (
    <div
    className="date-input"
    style={{
      background: theme === themes.dark ? theme.background : '#F6F9FD',
      color: theme === themes.dark ? 'white' : '#252439',
    }}
    >
      <style>{`
        .date-input .DayPickerInput-Overlay {
          background: ${theme === themes.dark ? theme.background : '#F6F9FD'} !important;
        }
        .DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
          background: ${theme === themes.dark ? theme.foreground : 'white'} !important;
        }
      `}</style>

        <CalendarIcon fontSize="small" className="date-icon"/>
        <DayPickerInput
            format="LL"
            formatDate={formatDate}
            component={props => <input {...props} size="21" style={{color: theme === themes.dark ? 'white' : '#252439'}}/>}
            placeholder={`Today, ${formatDate(new Date(), 'LL')}`}
        />
    </div>
  );
}