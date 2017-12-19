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
        category: 'Relax',
        value: 160,
        isIncome: false
      },
      {
        id: 2,
        title: 'Taxi',
        category: 'Commute',
        value: 100,
        isIncome: false
      },
      {
        id: 3,
        title: 'Hajs od bosa',
        value: 100,
        category: 'Health, hygiene and chemistry',
        isIncome: true
      },
      {
        id: 4,
        title: 'Kupiłem burgiera',
        category: 'Food',
        value: 170,
        isIncome: false
      },
      {
        id: 4,
        title: 'Kupiłem burgiera',
        category: 'Flat',
        value: 170,
        isIncome: false
      },
      {
        id: 4,
        title: 'Kupiłem burgiera',
        category: 'Other fees and bills',
        value: 170,
        isIncome: false
      },
      {
        id: 4,
        title: 'Kupiłem burgiera',
        category: 'Cloth',
        value: 170,
        isIncome: false
      },
      {
        id: 4,
        title: 'Kupiłem burgiera',
        category: 'Other expenses',
        value: 170,
        isIncome: false
      },
    ]
  }

  render() {

    // const data = this.state.entries.reduce(
    //   (result, next) => ({
    //     ...result,
    //     labels: result.labels.concat(next.category),
    //     datasets: [{
    //       data: result.datasets[0].data.concat(next.value)
    //     }]
    //   }),
    //   {
    //     labels: [],
    //     datasets: [{
    //       data: []
    //     }]
    //   }
    // )

    const categories = this.state.entries.reduce(
      (categories, next) => categories.filter(
        category => category !== next.category
      ).concat(next.category), []);

    console.log(categories)

    const categoriesData = categories.map(
      category => this.state.entries.filter(
          entry => entry.category === category
        ).reduce((total, next) => total + next.value, 0)

    );

    // console.log(categoriesWithSums)

    const colors = {
      'Food': '#C0FC1E',
      'Commute': '#FF9800',
      'Health, hygiene and chemistry': '#FF3400',
      'Relax': '#F5FF1B',
      'Flat': '#B30046',
      'Other fees and bills': '#5300A4',
      'Cloth': '#0089D0',
      'Other expenses': '#40BF35',
    }

    const data = {
      labels: categories,
      datasets: [{
        data: categoriesData,
        backgroundColor: categories.map(category => colors[category] || ('#' + Math.floor(Math.random() * 255).toString(16).repeat(3)) )
      }],
      // hoverBackgroundColor:
    };

    return (
      <div>
        <h2>Doughnut Example</h2>
        <Doughnut data={data}/>
      </div>
    );
  }
}


export default DonutChart