import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import CartList from './CartList';

/**
 * Component that instantiates the list of cart items, along with showing the price total.
 */
export default class Cart extends Component {
  render() {
    return (
      <div class="cart">
        <h2>Shopping Cart</h2>
        <CartList list={this.props.list} add={this.props.add} removeOne={this.props.removeOne} removeAll={this.props.removeAll}/>
        <br/>
        <p>Total: ${this.props.total}</p>
        <div>
          <Button variant = "warning" size="lg">Checkout</Button>
        </div>
      </div>
    );
  }
}