import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class RunButton extends Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }

    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

    render() {
      return (
        <div>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret color="primary">
            All
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>1</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>3</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>4</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>5</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>6</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>7</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>8</DropdownItem>
            <DropdownItem divider />
          </DropdownMenu>
        </ButtonDropdown>
        </div>
      );
    }
  }


export default reduxForm({
  form: 'run' // a unique identifier for this form
}, null, actions)(RunButton)
