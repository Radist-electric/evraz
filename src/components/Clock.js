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
    const hours = this.state.date.getHours()
    const minutes = this.state.date.getMinutes()

    return (
      <>
        {hours < 10 ? '0' : ''}{hours}:{minutes < 10 ? '0' : ''}{minutes}
      </>
    )
  }
}

export default Clock
