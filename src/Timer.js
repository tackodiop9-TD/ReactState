import React from "react";
class Timer extends React.Component {
  state = {
    seconds: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <p>Temps écoulé : {this.state.seconds} secondes</p>;
  }
}

export default Timer;