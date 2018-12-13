import React, { Component } from "react";
import { Pager } from "react-bootstrap";
class Payment extends Component {
  render() {
    let total = 0;
    console.log(this.props);
    return (
      <React.Fragment>
        {/* {this.props.finalCount.map(count => {
          total += count.totalPrice;
        })}
        <p>Total Price:{total}</p> */}

        <Pager>
          <Pager.Item href="#">Previous</Pager.Item>{" "}
          <Pager.Item href="#">Next</Pager.Item>
        </Pager>
      </React.Fragment>
    );
  }
}

export default Payment;
