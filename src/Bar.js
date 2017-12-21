import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

// const data = {
//   labels: ['Poniedzialek ', 'Wtorek', 'Marzec', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'Expenses',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       borderWidth: 2,
//       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//       hoverBorderColor: 'rgba(255,99,132,1)',
//       data: [-65, -59, -80, -81, -56, -55, -40]
//     },
//     {
//       label: 'Income',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//       hoverBorderColor: 'rgba(255,99,132,1)',
//       data: [67, 43, 50, 41, 76, 95]
//     }
//   ]
// };

class BarChart extends Component {

    state = {
        entries: [
            {
                id: 1,
                title: 'Kupiłem fryty',
                category: 'Relax',
                value: 160,
                label: 'Income'
            },
            {
                id: 2,
                title: 'Taxi',
                category: 'Commute',
                value: -100,
                label: 'Expenses'
            },
            {
                id: 3,
                title: 'Hajs od bosa',
                value: 100,
                category: 'Health, hygiene and chemistry',
                label: 'Income'
            },
            {
                id: 4,
                title: 'Kupiłem burgiera',
                category: 'Food',
                value: -170,
                label: 'Expenses'
            },
            {
                id: 4,
                title: 'Kupiłem burgiera',
                category: 'Flat',
                value: -270,
                label: 'Expenses'
            },

        ]
    };


  render() {
// odnalezienie wszystkich income i expenses dla całej tablicy
    const funds = this.state.entries.reduce(
        (funds, next) => funds.filter(
        label => label !== next.label
        ).concat(next.label), []);

    console.log(funds);

    const expenses = this.state.entries.filter(
      entry => entry.value < 0
    )

    const expensesTotal = expenses.reduce(
      (total, next) => total + next.value, 0
    )

    const incomes = this.state.entries.filter(
      entry => entry.value > 0
    )

    const incomesTotal = incomes.reduce(
      (total, next) => total + next.value, 0
    )

// sumowanie wartości incomes i expenses dla całej tablicy
      const fundsData = funds.map(
          label => this.state.entries.filter(
              entry => entry.label === label
          ).reduce((total, next) => total + next.value, 0)
      );

      console.log(fundsData)

    const data = {
      labels: ['Monday', 'Tuesday', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Incomes',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [incomesTotal, 20, 100, 200]
            },
          {
            label: 'Expenses',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(255,199,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [-expensesTotal, 10, 55, 100]
          },
        ]
    };

    return (
      <div style={{ height: '50vh' }}>
        <h2>Wykres slupkowy</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
};




export default BarChart



