import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //     super();
  //     this.buttonClicked.bind(this);
  //   }

  //   style = {
  //     fontSize: 10,
  //     fontWeight: "bold"
  //   };
  constructor() {
    super();
    console.log("Constructor(Counter)-Enabled");
  }
  componentDidMount() {
    //Ajax call
    console.log("componentDidMount-Enabled(Counter)");
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value != this.props.value) {
      console.log("prop changed"); //Ajax update
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount-Enabled");
  }
  render() {
    console.log("Render(Counter)-Enabled");
    const { onincrement, ondelete, id } = this.props;
    return (
      <div>
        <span style={{ fontSize: 10 }} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => onincrement(this)}
          className="btn btn-secondary btn-md"
        >
          Increment
        </button>
        <button
          onClick={() => ondelete(id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <span className="badge badge-primary">Price:${this.props.price}</span>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2  badge-";
    classes += this.props.value === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    return this.props.value === 0 ? <h4>Zero</h4> : this.props.value;
  }
}

export default Counter;
