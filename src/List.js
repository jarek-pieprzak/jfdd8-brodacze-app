import React, { Component } from 'react'

class List extends Component {

  state = {
    taskInputValue: '',
    tasks: [],
    checkedTaskIds: [],
    outcomeChecked: false,
    options: ['Relax',
              'Commute',
              'Health, hygene and chemistry',
              'Food',
              'Flat',
              'Other fees and bills',
              'Cloths',
              'Other expenses']
  }

  handleSubmit = (event) => {
    event.preventDefault();
      this.setState({
      tasks: this.state.tasks.concat({
        id: this.state.tasks.map(
          task => task.id
        ).reduce(
          (biggest, next) => Math.max(biggest, next),
          0
        ) + 1,
        content: this.state.taskInputValue,
        isOutcome: this.state.outcomeChecked
      }),
      taskInputValue: ''
    });
  };

  handleChange = event => {
    this.setState({
      taskInputValue: event.target.value
    })
  };

  // handleDeleteClick = event => {
  //   console.log(event.target.dataset.taskId);
  //   this.setState({
  //     tasks: this.state.tasks.filter(
  //       task => task.id !== parseInt(event.target.dataset.taskId, 10)
  //     )
  //   })
  // };

  handleOutcomeInputChange = () => {
    this.setState({
      outcomeChecked: !this.state.outcomeChecked
    })
  };

  render() {
    return (
      <div>
        <p>Wprowadź wpływy i wydatki</p>

        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.taskInputValue}
            onChange={this.handleChange}
          />
          <button>WPROWADŹ</button>
          <div>
            <label>
              <input type="radio" name="digits"
                     onChange={this.handleIncomeCheckboxChange}
                     checked={this.state.incomeChecked}
              /> + wpływy;
            </label>
            <label>
              <input type="radio" name="digits"
                     onChange={this.handleOutcomeInputChange}
                     checked={this.state.outcomeChecked}
              /> - wydatki
            </label>
          </div>
        </form>

        <form action="Expenses" >Expenses
          <select name="Outgoings" onChange={event => console.log(event.target.value)}>
            {this.state.options.map(option => <option>{option}</option>)}
          </select>
        </form>

        <ul>
          {
            this.state.tasks.map(
              task => (
                <li key={task.id}>
                  {task.content}
                  {task.isOutcome === true ? ' - ' : null}
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