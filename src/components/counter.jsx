import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-danger btm-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatValue() {
    const { value: value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
