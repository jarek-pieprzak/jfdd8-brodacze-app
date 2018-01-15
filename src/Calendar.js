import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import {ProgressBar} from 'react-bootstrap';
import firebase from 'firebase'
import groupBy from 'lodash.groupby'



import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const EventWrapper = props => {
  console.log(props);

  console.log('foobar',  props.event, groupBy(props.event.events, 'category'));
  let byCategory = groupBy(props.event.events, 'category');

  // let income = byCategory['Income'].reduce...

  // let outcome = Object.keys(byCategory).map(categoryName => (
  //   byCategory[categoryName].reduce...
  // )


  return (
    <ProgressBar>
      {
        Object.keys(groupBy(props.event.events, 'category')).map((category, index) => (
          <ProgressBar key={index} now={10}/>
        ))
      }
      {/*<ProgressBar bsStyle="foobar" key={3} now={10}/>*/}
    </ProgressBar>
  )

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
              start: new Date(moment(item.date).format('L')),
              end: new Date(moment(item.date).format('L'))
            })
          )
        });
      }
    )
  }
  render() {

    const groupedEvents = Object.entries(
      groupBy(this.state.events, event =>
        event.start.getTime())).map(([key, value]) => ({
      title: 'Foo',
      start: new Date(parseInt(key)),
      end: new Date(parseInt(key)),
      allDay: true,
      events: value
    }))

    return (

      <div style={{height: 600}}>
        <BigCalendar
          {...this.props}
          events={groupedEvents}
          views={['month']}
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

