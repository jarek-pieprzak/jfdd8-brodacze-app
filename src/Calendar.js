import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import firebase from 'firebase'
import groupBy from 'lodash.groupby'
import colors from './colors'




import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const EventWrapper = props => {

  let byCategory = groupBy(props.event.events, 'category');

  // console.log(byCategory);

  let { Income, ...other } = byCategory

  let outcome = Object.entries(other).map(
    ([categoryName, entries]) => ({
      categoryName,
      total: entries.reduce((total, next) => total + next.value, 0)
})
  )

    // console.log(outcome)

  const totalOutcome = outcome.reduce((total, next) => total + next.total, 0);

  return (

          <div style={{ display: 'flex'}}>
            {
              outcome.map(
                item => (
                  <div
                    style={{
                      height: 20,
                      backgroundColor: colors[item.categoryName],
                      width: ((item.total / totalOutcome) * 100) + '%'
                    }}
                    key={item.categoryName}
                  />
                )
              )
            }
          </div>

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

      <div style={{ height: '40vh' }}>
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

