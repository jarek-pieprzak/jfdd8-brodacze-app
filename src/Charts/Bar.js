import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import firebase from 'firebase'

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
            // {
            //     id: 1,
            //     title: 'Kupiłem fryty',
            //     category: 'Relax',
            //     value: 2400,
            // },
            // {
            //     id: 2,
            //     title: 'Taxi',
            //     category: 'Commute',
            //     value: -1000,
            // },
            // {
            //     id: 3,
            //     title: 'Hajs od bosa',
            //     value: 100,
            //     category: 'Health, hygiene and chemistry',
            // },
            // {
            //     id: 4,
            //     title: 'Kupiłem burgiera',
            //     category: 'Food',
            //     value: -520,
            // },
            // {
            //     id: 4,
            //     title: 'Kupiłem burgiera',
            //     category: 'Flat',
            //     value: -270,
            // },
        ]
    };

  componentDidMount() {
    const userUid = firebase.auth().currentUser.uid
    firebase.database().ref('/tasks/' + userUid).on('value', snapshot => {
        this.setState({
          entries: Object.entries(snapshot.val() || {}).map(
            ([key, value]) => ({
              id: key,
              ...value
            })
          ).map(
            item => ({
              ...item,
              value: (item.isIncome ? 1 : -1) * parseInt(item.content),
              category: item.isIncome ? 'Income' : item.category,
              // value: parseFloat(item.content)
            })
          )
        });
      }
    )
  }

  render() {
// odnalezienie wszystkich income i expenses dla całej tablicy
    const funds = this.state.entries.reduce(
        (funds, next) => funds.filter(
        label => label !== next.label
        ).concat(next.label), []);

    // console.log(funds);

    const expenses = this.state.entries.filter(
      entry => entry.value < 0
    );

    const expensesTotal = expenses.reduce(
      (total, next) => total + next.value, 0
    );

    const incomes = this.state.entries.filter(
      entry => entry.value > 0
    );

    const incomesTotal = incomes.reduce(
      (total, next) => total + next.value, 0
    );

    const data = {
      labels: [],
        datasets: [
            {
                label: 'Incomes',
                backgroundColor: '#40BF35',
                borderColor: '#103D10',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [incomesTotal]
            },
          {
            label: 'Expenses',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(255,199,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [-expensesTotal]
          },
        ]
    };

    return (
      <div style={{ height: '50vh' }}>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }]
            }
          }}
        />
      </div>
    );
  }
};




export default BarChart



