import React, {Component} from 'react'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <>
        {this.state.date.getHours()}:{this.state.date.getMinutes()}
      </>
    )
  }
}

export default Clock
