/**
 * @file Simple Calculator component for example purposes.
 */

import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    /** @const {Object} references to elements */
    this.elements = {};

    this.state = {
      result: null,
    };
  }

  /**
   * Handle add functionality, calculate and display the sum.
   */
  add = () => {
    const sum = this.getSum(
      parseFloat(this.elements.value1.value),
      parseFloat(this.elements.value2.value),
    );

    this.setState({
      result: sum,
    });
  };

  /**
   * Return the sum of two numbers.
   *
   * @param {Number} value1 The first number to add.
   * @param {Number} value2 The second number to add.
   *
   * @return {Number} The sum.
   */
  getSum = (value1, value2) => {
    return value1 + value2;
  };

  render() {
    const { result } = this.state;

    return (
      <form>
        <input
          type="number"
          defaultValue={0}
          ref={el => {
            this.elements.value1 = el;
          }}
        />
        <input
          type="number"
          defaultValue={0}
          ref={el => {
            this.elements.value2 = el;
          }}
        />
        <button type="button" onClick={this.add} />
        <p className="result">{result}</p>
      </form>
    );
  }
}
