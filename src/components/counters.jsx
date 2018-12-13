import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  constructor() {
    super();
    console.log("Constructor(Counters)-Enabled");
  }
  componentDidMount() {
    //Ajax call
    console.log("componentDidMount-Enabled(Counters)");
  }
  render() {
    console.log("Render(Counters)-Enabled");
    const {
      onreset,
      ondelete,
      onincrement,
      value,
      id,
      counter,
      onAddCounters
    } = this.props;
    return (
      <div>
        <button onClick={onreset} className="btn btn-primary btn-sm">
          Reset
        </button>
        <button onClick={onAddCounters} className="btn btn-primary btn-sm m-2">
          Add
        </button>
        {counter.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            ondelete={() => ondelete(counter.id)}
            onincrement={() => onincrement(counter)}
            price={counter.price}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
