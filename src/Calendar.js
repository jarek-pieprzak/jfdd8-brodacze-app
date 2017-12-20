import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import events from './events.js';

import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends Component {
  render(){
    return (

      <div style = {{height:600}}>
      <BigCalendar
        {...this.props}
        events={events}
        views={allViews}
        step={30}
        defaultDate={new Date()}
      />
        </div>
    )
  }
}

export default Calendar;