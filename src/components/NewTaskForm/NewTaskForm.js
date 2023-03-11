import React, { Component } from 'react';
import '../NewTaskForm/NewTaskForm.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  static defaultProps = {
    addItem: () => {},
  };

  static propTypes = {
    addItem: PropTypes.func,
  };

  state = {
    label: '',
    minutes: '',
    seconds: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onMinutesChange = (e) => {
    this.setState({
      minutes: e.target.value,
    });
  };

  onSecondsChange = (e) => {
    this.setState({
      seconds: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label, this.state.minutes, this.state.seconds);
    this.setState({
      label: '',
      minutes: '',
      seconds: '',
    });
  };

  numberValue = (e) => {
    const value = e.target.value;
    e.target.value = value.replace(/\D/g, '');
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.onLabelChange}
            value={this.state.label}
          ></input>
        </form>
        <form onSubmit={this.onSubmit}>
          <input
            onInput={this.numberValue}
            maxLength="2"
            onChange={this.onMinutesChange}
            placeholder="Min"
            className="input-min-sec"
            value={this.state.minutes}
          />
        </form>
        <form onSubmit={this.onSubmit}>
          <input
            onInput={this.numberValue}
            maxLength="2"
            onChange={this.onSecondsChange}
            placeholder="Sec"
            className="input-min-sec"
            value={this.state.seconds}
          />
        </form>
      </div>
    );
  }
}
