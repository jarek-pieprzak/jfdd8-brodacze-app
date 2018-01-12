import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import events from './events.js';
import {ProgressBar} from 'react-bootstrap';
import firebase from 'firebase'



import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const EventWrapper = props => {
  console.log(props);
  return (
    <ProgressBar>
      {
        props.event.spendings && props.event.spendings.map(
          spending => <ProgressBar striped bsStyle={spending.type} now={spending.value} key={1}/>
        )
      }
    </ProgressBar>
  )
}

class Calendar extends Component {

  state = {
    events: []
  };

  componentDidMount() {
    const userUid = firebase.auth().currentUser.uid
    firebase.database().ref('/tasks/' + userUid).on('value', snapshot => {
        this.setState({
          events: Object.entries(snapshot.val() || {}).map(
            ([key, value]) => ({
              id: key,
              ...value
            })
          ).map(
            item => ({
              ...item,
              // value: (item.isIncome ? 1 : -1) * parseInt(item.content)
              category: item.isIncome ? 'Income' : item.category,
              value: parseFloat(item.content),
              start: new Date(item.date),
              end: new Date(item.date)
            })
          )
        });
      }
    )
  }
  render() {
    return (

      <div style={{height: 600}}>
        <BigCalendar
          {...this.props}
          events={this.state.events}
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

