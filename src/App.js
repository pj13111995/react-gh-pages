import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import Payment from "./components/payment";

class App extends Component {
  constructor() {
    super();
    console.log("Constructor(App)-Enabled");
  }
  componentDidMount = () =>
    //Ajax call
    console.log("componentDidMount-Enabled(App)");

  state = {
    counters: [
      { id: 1, value: 0, price: 100, totalPrice: 0 },
      { id: 2, value: 0, price: 200, totalPrice: 0 },
      { id: 3, value: 0, price: 300, totalPrice: 0 },
      { id: 4, value: 0, price: 400, totalPrice: 0 }
    ],
    total: 0
  };
  deleteCounter = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters: counters });
  };
  resetState = () => {
    const reset = this.state.counters.map(c => {
      c.value = 0;
      c.totalPrice = 0;
      return c;
    });

    this.setState({ counters: reset });
  };
  incrementCount = counter => {
    const counterClone = [...this.state.counters];
    const index = counterClone.indexOf(counter);
    counterClone[index].value += 1;
    counterClone[index].totalPrice =
      counterClone[index].value * counterClone[index].price;

    this.setState({ counters: counterClone });
  };
  addCounter = () => {
    let counterClone = [...this.state.counters];
    counterClone.push({
      id: counterClone.length + 1,
      value: 0,
      price: 400,
      totalPrice: 0
    });
    this.setState({ counters: counterClone });
  };
  render() {
    console.log("Render(App)-Enabled");
    return (
      <React.Fragment>
        <NavBar
          length={this.state.counters.filter(c => c.value !== 0).length}
        />
        <main role="main" className="container">
          <Counters
            ondelete={this.deleteCounter}
            onincrement={this.incrementCount}
            onreset={this.resetState}
            counter={this.state.counters}
            onAddCounters={this.addCounter}
          />
          <Payment finalCount={this.state.counters} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
