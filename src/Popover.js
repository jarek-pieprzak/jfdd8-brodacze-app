import React, { Component } from 'react';
import { Button, Popover as P, PopoverHeader, PopoverBody } from 'reactstrap';

class Popover extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button
          id="Popover1"
          onClick={this.toggle}>
          +
        </Button>
        <P
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}>
          <PopoverHeader>Budget</PopoverHeader>
          <PopoverBody>(wprowadzanie danych Lukasza)</PopoverBody>
        </P>
      </div>
    );
  }
}
export default Popover;

