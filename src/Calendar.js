import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import events from 'events';

import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends Component {
  render(){
    return (
      <BigCalendar
        {...this.props}
        events={[
          {
            'title': 'All Day Event very long title',
            'allDay': true,
            'start': new Date(2017, 11, 0),
            'end': new Date(2017, 11, 1)
          }
        ]}
        views={allViews}
        step={60}
        defaultDate={new Date(2017, 11, 1)}
      />
    )
  }
};

export default Calendar;