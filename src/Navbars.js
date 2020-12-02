import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

/**
 * Navbars that allow users to select filters and sorts.
 * When selected, items in the Navbars call functions passed in from FilteredList.
 */
export default class Navbars extends Component {
  render() {
    return (
      <div class="navbars">
        {/* Navbar for milk source filter*/}
        <Navbar bg="light" variant="light" expand="lg">
          <Navbar.Brand>Milk Source:</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item><Nav.Link eventKey="All" onSelect={this.props.filterSource}>All</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Cow" onSelect={this.props.filterSource}>Cow</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Goat" onSelect={this.props.filterSource}>Goat</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Sheep" onSelect={this.props.filterSource}>Sheep</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Navbar for firmness filter*/}
        <Navbar bg="light" variant="light" expand="lg">
          <Navbar.Brand>Firmness:</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item><Nav.Link eventKey="All" onSelect={this.props.filterFirmness}>All</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Soft" onSelect={this.props.filterFirmness}>Soft</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Medium" onSelect={this.props.filterFirmness}>Medium</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Hard" onSelect={this.props.filterFirmness}>Hard</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Navbar for sort */}
        <Navbar bg="light" variant="light" expand="lg">
          <Navbar.Brand>Sort:</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item><Nav.Link eventKey="A-Z" onSelect={this.props.sort}>A-Z</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Price Low to High" onSelect={this.props.sort}>Price Low to High</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Price High to Low" onSelect={this.props.sort}>Price High to Low</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}