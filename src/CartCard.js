import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

/**
 * Component for cards in the cart. Uses passed-in properties to
 * display the right info for each cheese.
 */
export default class CartCard extends Component {
  render() {
    return (
      <div className="card">
        <img src={process.env.PUBLIC_URL + this.props.img} alt={this.props.name} height="230px" width="230px"/>
        <h4>{this.props.name}</h4>
        <p>Milk Source: {this.props.source}</p>
        <p>Firmness: {this.props.firmness}</p>
        <h5>${this.props.price}</h5>

        {/**
         * Allows cart card to increment/decrement units of a cheese. 
         * Middle button is disabled and displays current number of units.
         */}
        <ButtonGroup aria-label="counter">
          <Button variant="warning" onClick={() => this.props.removeOne(this.props.name, this.props.price)}>-</Button>
          <Button variant="light" disabled>{this.props.num}</Button>
          <Button variant="warning" onClick={() => this.props.add(this.props.name, this.props.img, this.props.price, this.props.source, this.props.firmness)}>+</Button>
        </ButtonGroup>

        {/* Button removes all units of a cheese from cart using removeAll function from FilteredList*/}
        <div className="button-remove-all">
          <Button variant="warning" onClick={() => this.props.removeAll(this.props.name, this.props.price)}>Remove All</Button>
        </div>
      </div>
    );
  }
}