import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

// const data = {
//   labels: [
//     'Red',
//     'Green',
//     'Yellow'
//   ],
//   datasets: [{
//     data: [300, 50, 100],
//     backgroundColor: [
//       '#FF6384',
//       '#36A2EB',
//       '#FFCE56'
//     ],
//     hoverBackgroundColor: [
//       '#FF6384',
//       '#36A2EB',
//       '#FFCE56'
//     ]
//   }]
// };

class DonutChart extends Component {
  state = {
    entries: [
      {
        id: 1,
        title: 'Kupiłem fryty',
        category: 'food',
        value: 10,
        isIncome: false
      },
      {
        id: 2,
        title: 'Taxi',
        category: 'commute',
        value: 100,
        isIncome: false
      },
      {
        id: 3,
        title: 'Hajs od bosa',
        value: 10000,
        category: 'bos',
        isIncome: true
      }
    ]
  }

  render() {

    const data = this.state.entries.reduce(
      (result, next) => result,
      {
        labels: ['foo', 'bar'],
        datasets: [{
          data: [100, 400]
        }]
      }
    )

    return (
      <div>
        <h2>Doughnut Example</h2>
        <Doughnut data={data}/>
      </div>
    );
  }
}

export default DonutChart