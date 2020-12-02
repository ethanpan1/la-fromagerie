import { Component } from 'react';
import CartCard from './CartCard';

/**
 * Component responsible for instantiating the cards for the cheeses in the cart.
 */
export default class CartList extends Component {
  /**
   * Aggregates the list of items in the cart by name of cheese.
   */
  reduceList = list => {
    // Aggregate cart list
    var newList = [];

    // Creates set of all types of cheese in the cart
    const keys = new Set();
    for (const item of list) {
      keys.add(item.name)
    }

    // Grab info of cheese by finding its first instance
    // Add num variable representing number of units of that cheese in the cart
    // Add to aggregate cart list
    for (const key of keys) {
      const item = list.find(element => element.name === key)
      const newItem = {...item, num: list.filter(element => element.name === key).length}
      newList = [...newList, newItem];
    }
    return newList
  };

  render() {
    return (
      /**
       * For each type of cheese in the cart, instantiate a card, passing in the cheese's
       * properties and add/remove functions.
       * */ 
      <div className="cart-list">
        {this.reduceList(this.props.list).map(item => 
          <CartCard name={item.name} img={item.img} price={item.price} source={item.source} firmness={item.firmness} num={item.num} add={this.props.add} removeOne={this.props.removeOne} removeAll={this.props.removeAll}></CartCard>)
        }
      </div>

    );
  }
}