import React, {Component} from 'react'
import moment from 'moment'
import firebase from 'firebase'

class List extends Component {

  state = {
    taskInputValue: '',
    tasks: [],
    checkedTaskIds: [],
    outcomeChecked: false,
    incomeChecked: true,
    options: [
      'Other expenses',
      'Relax',
      'Commute',
      'Health, hygene and chemistry',
      'Food',
      'Flat',
      'Other fees and bills',
      'Cloths',
    ],
    category: null
  }

  componentDidMount() {
    const userUid = firebase.auth().currentUser.uid
    firebase.database().ref('/tasks/' + userUid).on('value', snapshot => this.setState({
        tasks: Object.entries(snapshot.val() || {}).map(
          ([key, value]) => ({
            id: key,
            ...value
          })
        )
      })
    )
  }

  handleChange = event => {
    this.setState({
      taskInputValue: event.target.value
    })
  };

  handleIncomeInputChange = () => {
    this.setState({
      incomeChecked: !this.state.incomeChecked,
      outcomeChecked: this.state.incomeChecked
    })
  };

  handleOutcomeInputChange = () => {
    this.setState({
      incomeChecked: this.state.outcomeChecked,
      outcomeChecked: !this.state.outcomeChecked
    })
  };

  handleOption = event => {
    this.setState({
      category: event.target.value
    })
  };

  handleDeleteClick = event => {
    const taskId = event.target.dataset.taskId;
    const userUid = firebase.auth().currentUser.uid
    firebase.database().ref('/tasks/' + userUid + '/' + taskId).set(null)
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const userUid = firebase.auth().currentUser.uid
    firebase.database().ref('/tasks/' + userUid).push({
      content: '' + this.state.taskInputValue + '',
      isIncome: this.state.incomeChecked,
      isOutcome: this.state.outcomeChecked,
      category: this.state.outcomeChecked ? '' + this.state.category : null,
      date: '' + (new Date())
    })

    // tasks: this.state.tasks.concat({
    //   id: this.state.tasks.map(
    //     task => task.id
    //   ).reduce(
    //     (biggest, next) => Math.max(biggest, next),
    //     0
    //   ) + 1,

    // }),

    this.setState({
      taskInputValue: ''
    });
  };

  render() {
    return (
      <div>
        <p>Add your earnings and outgoings</p>

        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.taskInputValue}
            onChange={this.handleChange}
          />
          <button>Submit</button>
          <div>
            <label>
              <input type="radio" name="digits"
                     onChange={this.handleIncomeInputChange}
                     checked={this.state.incomeChecked}

              /> + earnings:
            </label>
            <label>
              <input type="radio" name="digits"
                     onChange={this.handleOutcomeInputChange}
                     checked={this.state.outcomeChecked}


              /> - outgoings:
            </label>
          </div>

          Outgoings:
          <select name="Outgoings" required onChange={this.handleOption}>
            <option value="" disabled selected>Wybierz kategorię</option>
            {this.state.options.map(option => <option>{option}</option>)}
          </select>
        </form>

        <ul>
          {
            this.state.tasks.map(
              task => (
                <li key={task.id}>
                  {task.isOutcome === true && ' - '}
                  {task.content}
                  {task.isIncome === true && ' Earnings '}
                  {' '}
                  {task.category}
                  {' '}
                  {moment(task.date).format('dddd, MMMM Do YYYY')}
                  <button
                    data-task-id={task.id}
                    onClick={this.handleDeleteClick}>
                    Usuń
                  </button>
                </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default List