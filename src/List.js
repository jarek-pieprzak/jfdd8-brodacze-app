import React, { Component } from 'react'

class List extends Component {

  state = {
    taskInputValue: '',
    tasks: [],
    checkedTaskIds: [],
    outcomeChecked: false,
    options: ['- Choose from the list -',
              'Other expenses',
              'Relax',
              'Commute',
              'Health, hygene and chemistry',
              'Food',
              'Flat',
              'Other fees and bills',
              'Cloths',
              ],
    category: '- choose from list -'
  }

  handleChange = event => {
    this.setState({
      taskInputValue: event.target.value
    })
  };

  handleOutcomeInputChange = () => {
    this.setState({
      outcomeChecked: !this.state.outcomeChecked
    })
  };

  handleOption = event => {
    this.setState({
      category: event.target.value
    })
  };

  handleDeleteClick = event => {
    console.log(event.target.dataset.taskId);
    this.setState({
      tasks: this.state.tasks.filter(
        task => task.id !== parseInt(event.target.dataset.taskId, 10)
      )
    })
  };

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
        isOutcome: this.state.outcomeChecked,
        category: this.state.outcomeChecked ? this.state.category : null,
        date: ''+ (new Date())
      }),
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
                     onChange={this.handleIncomeCheckboxChange}

              /> + earnings:
            </label>
            <label>
              <input type="radio" name="digits"
                     onChange={this.handleOutcomeInputChange}
                     checked={this.state.outcomeChecked}


              /> - outgoings:
            </label>
          </div>
        </form>

        <form action="Expenses" >Outgoings:
          <select name="Outgoings" onChange={this.handleOption}>
            {this.state.options.map(option => <option>{option}</option>)}
          </select>
        </form>

        <ul>
          {
            this.state.tasks.map(
              task => (
                <li key={task.id}>
                  {task.isOutcome === true ? '- ' : ' Earnings - '}
                  {task.content}
                  {task.category}
                  {task.date}
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