import React, { Component } from 'react';
import './timer.css';

export default class Timer extends Component {
  state = {
    timeMs:
      sessionStorage.getItem('time' + this.props.id) === null ? 0 : sessionStorage.getItem('time' + this.props.id),
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
    const oldTime = Number(sessionStorage.getItem('time' + this.props.id));
    if (this.state.count === true) {
      this.setState({
        timeMs: oldTime + 1,
      });
    }
    sessionStorage.setItem('time' + this.props.id, this.state.timeMs);
  };

  //================================================= обновление времени =====>

  componentDidUpdate(prevProps, prevState) {
    if (prevState.timeMs !== this.state.timeMs) {
      setTimeout(this.timer, 1000);
    }
  }

  //=========================================== отображение формата часов =====>

  timerNormalShow(e) {
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
