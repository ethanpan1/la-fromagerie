import { Component } from 'react';
import DisplayCard from './DisplayCard';

/**
 * Component responsible for instantiating the cards for the cheeses on sale.
 */
export default class DisplayList extends Component {
  render() {
    return (
      /**
       * For each cheese in the product list, instantiate a card, passing in the cheese's 
       * properties and the add function.
       */
      <div className="display-list">
        {this.props.list.map(item => 
          <DisplayCard name={item.name} img={item.img} price={item.price} source={item.source} firmness={item.firmness} description={item.description} add={this.props.add}></DisplayCard>)
        }
      </div>
    );
  }
}