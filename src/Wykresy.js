import React from 'react'
import {Doughnut} from 'react-chartjs-2';

class Wykresy extends React.Component {
  render() {
    const data = (canvas) => {
      const ctx = canvas.getContext("2d")
      const gradient = ctx.createLinearGradient(0,0,100,0);
      return {
          backgroundColor: gradient
    }
    }

    return (
      <Line data={data} />
    )
  }
}

export default Wykresy