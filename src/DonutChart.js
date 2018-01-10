import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import firebase from 'firebase'

class DonutChart extends Component {
  state = {
    entries: []
      // {
      //   id: 1,
      //   title: 'Kupiłem fryty',
      //   category: 'Relax',
      //   value: 400,
      //     label: 'Expenses'
      // }
  };

  componentDidMount() {
    const userUid = firebase.auth().currentUser.uid
    firebase.database().ref('/tasks/' + userUid).on('value', snapshot => {
      // this.setState({
      //   entries: Object.entries(snapshot.val() || {}).map(
      //     ([key, value]) => ({
      //       id: key,
      //       ...value
      //     })
      //   ).map(
      //     item => ({
      //       ...item,
      //       // value: (item.isIncome ? 1 : -1) * parseInt(item.content)
      //       category: item.isIncome ? 'Income' : item.category,
      //       value: parseFloat(item.content)
      //     })
      //   )
      // });
      const entries = Object.entries(snapshot.val() || {}).map(
        ([key, value]) => ({
          id: key,
          ...value
        })
      ).map(
        item => ({
          ...item,
          // value: (item.isIncome ? 1 : -1) * parseInt(item.content)
          category: item.isIncome ? 'Income' : item.category,
          value: parseFloat(item.content)
        })
      );

      if (entries.length > 0) {
        const totalIncome = entries.filter(item => item.isIncome).map(item => item.value).reduce((current, total) => current + total, 0);
        const totalOutcome = entries.filter(item => !item.isIncome).map(item => item.value).reduce((current, total) => current + total, 0);

        const outcomeEntries = entries.filter(item => !item.isIncome);

        if (totalOutcome > totalIncome) {
          outcomeEntries.push({
            category: 'Debt',
            value: -(totalIncome - totalOutcome)
          })
        } else {
          outcomeEntries.push({
            category: 'Budget left',
            value: totalIncome - totalOutcome
          });
        }

        this.setState({ entries: outcomeEntries });
      }
    }
    )
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



    const categoriesData = categories.map(
      category => this.state.entries.filter(
          entry => entry.category === category
        ).reduce((total, next) => total + next.value, 0) // <- Tu Jarkowi powiedz żeby nie odpierdalał i żeby to poprawił :D

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
      'Budget left': '#8b7cb3'
    }

    console.log(categories)

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