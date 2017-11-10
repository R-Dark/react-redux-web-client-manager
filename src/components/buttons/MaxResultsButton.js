import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class MaxResultsButton extends Component {
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
            <DropdownItem>10</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>50</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>100</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>200</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>500</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>1000</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        </div>
      );
    }
  }


export default reduxForm({
  form: 'orderby' // a unique identifier for this form
}, null, actions)(MaxResultsButton)
