import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class NavBar extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <li className='nav-item'>
        <Link className='nav-link' to='/signout'>Sign Out</Link>
      </li>
    )
    } else {
      return (
        <li className='nav-item'>
          <Link className='nav-link' to='/signin'>Login</Link>
        </li>
      )
    }
  }

  render() {
    return(
      <nav className='navbar navbar-light' style={{
          backgroundColor: '#e9ecef',
          borderStyle: 'solid',
          borderWidth: 2,
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          borderColor: '#ced4da'}} >
        <Link to='/' className='navbar-brand'>
          the Brain
        </Link>
        <ul className='nav navbar-nav'>
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, {})(NavBar);




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
