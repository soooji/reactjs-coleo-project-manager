import React from 'react';
import { LargeCard } from '../../Components/Cards/Card';
import { HeadTitle } from '../../Components/Texts/Text';
import './../../Static/Styles/calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import events from './events' 
moment.locale('en');
const localizer = momentLocalizer(moment)

function CalendarPage() {
  return (
    <LargeCard
          className="tasks-list-card"
          title={<HeadTitle className="white-text-on-dark" text="Calendar"/>}
          actions={<></>}
      >
        <div className="calendar-container">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
    </LargeCard>
  )
}


export default CalendarPage;