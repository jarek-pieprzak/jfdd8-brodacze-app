import React, { Component } from 'react'

class List extends Component {

  state = {
    taskInputValue: '',
    tasks: [],
    checkedTaskIds: [],
    incomeChecked: false
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
        isIncome: this.state.incomeChecked
      }),
      taskInputValue: ''
    });
  };

  handleChange = event => {
    this.setState({
      taskInputValue: event.target.value
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

  handleIncomeCheckboxChange = () => {
    this.setState({
      incomeChecked: !this.state.incomeChecked
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
              <input
                type="checkbox"
                onChange={this.handleIncomeCheckboxChange}
                checked={this.state.incomeChecked}
              /> + wpływy;
              {/*{*/}
                {/*task.isDone === true ? '+' : null*/}
              {/*}*/}
            </label>
            <label>
              <input
                type="checkbox"
                onChange={this.handleOutcomeCheckboxChange}
                checked={this.state.outcomeChecked}
              /> - wydatki
            </label>
          </div>
        </form>

        <ul>
          {
            this.state.tasks.map(
              task => (
                <li key={task.id}>
                  {task.content}

                  {
                    task.isIncome === true ? ' + ' : null
                  }

                  <button
                    data-task-id={task.id}
                    onClick={this.handleDeleteClick}
                  >
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