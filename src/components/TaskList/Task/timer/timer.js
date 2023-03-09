import React, { Component } from 'react';
import './timer.css';

export default class Timer extends Component {
  state = {
    timeMs: 0,
    timeMinute: 0,
    count: false,
  };

  //============================================== управление старт стоп =====>

  start = () => {
    this.setState({ count: true });
    if (this.state.count === false) {
      setTimeout(this.timer, 1000);
    }
  };

  stop = () => {
    this.setState({ count: false });
  };

  //================================================= основная функция =====>

  timer = () => {
    if (this.state.count === true) {
      this.setState({
        timeMs: this.state.timeMs + 1,
      });
    }
    console.log(this.state.timeMs);
  };

  updateTime = () => {
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(this.timer, 1000);
  };

  //================================================= обновление времени =====>

  componentDidUpdate(prevProps, prevState) {
    if (prevState.timeMs !== this.state.timeMs) {
      this.updateTime();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  //================================================= отображение времени =====>

  timerNormalShow(e) {
    e.toString();
    if (e > 59) {
      this.setState({
        timeMs: 0,
        timeMinute: this.state.timeMinute + 1,
      });
    }
    if (e < 10) {
      return '0' + e;
    } else {
      return e;
    }
  }

  //============================================================== render =====>
  render() {
    return (
      <div className="description">
        <button
          style={{
            left: '250px',
            bottom: '14px',
          }}
          onClick={this.start}
          className="icon icon-play"
        ></button>
        <button
          style={{
            left: '270px',
            bottom: '15px',
          }}
          onClick={this.stop}
          className="icon icon-pause"
        ></button>
        <div className="position__timer">
          {this.timerNormalShow(this.state.timeMinute)}:{this.timerNormalShow(this.state.timeMs)}
        </div>
      </div>
    );
  }
}
