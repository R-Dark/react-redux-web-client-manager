import React, { Component } from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class NavBar extends Component {
  render() {
    return(
      <nav className='navbar navbar-light' style={{ backgroundColor: '#e9ebef'}} >
        <ul className='nav navbar-nav'>
          <li className='nav-item'>
            Sign In
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;




// constructor(props) {
//   super(props);
//
//   this.toggle = this.toggle.bind(this);
//   this.state = {
//     isOpen: false
//   };
// }
// toggle() {
//   this.setState({
//     isOpen: !this.state.isOpen
//   });
// }
// render() {
//   return (
//     <div>
//       <Navbar color="faded" light expand="md">
//         <NavbarBrand href="/">Bellatorum</NavbarBrand>
//         <NavbarToggler onClick={this.toggle} />
//         <Collapse isOpen={this.state.isOpen} navbar>
//           <Nav className="ml-auto" navbar>
//             <NavItem>
//               <NavLink href="/">Sign In</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/">Sign Out</NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }
