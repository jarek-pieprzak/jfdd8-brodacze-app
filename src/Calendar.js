import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import events from './events.js';
import { ProgressBar } from 'react-bootstrap';


import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const EventWrapper = props => (
  <ProgressBar>
    <ProgressBar striped bsStyle="success" now={35} key={1} />
    <ProgressBar bsStyle="warning" now={20} key={2} />
    <ProgressBar active bsStyle="danger" now={10} key={3} />
  </ProgressBar>
)

class Calendar extends Component {
  render(){
    return (

      <div style = {{height:600}}>
      <BigCalendar
        {...this.props}
        events={events}
        views={allViews}
        step={30}
        components={{
          eventWrapper: EventWrapper
        }}
        defaultDate={new Date()}
      />
        </div>
    )
  }
}

export default Calendar;