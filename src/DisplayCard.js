import { Component } from 'react';
import Button from 'react-bootstrap/Button';

/**
 * Component for cards in the display list. Uses passed-in properties to
 * display the right info for each cheese.
 */
export default class DisplayCard extends Component {
  render() {
    return (
      <div className="card">
        <img src={process.env.PUBLIC_URL + this.props.img} alt={this.props.name} height="230px" width="230px"/>
        <h4>{this.props.name}</h4>
        <p>Milk Source: {this.props.source}</p>
        <p>Firmness: {this.props.firmness}</p>
        <h5>${this.props.price}</h5>

        {/* Button adds item to cart using add function from FilteredList*/}
        <Button variant="warning" onClick={() => this.props.add(this.props.name, this.props.img, this.props.price, this.props.source, this.props.firmness)}>Add to Cart</Button>
      </div>
    );
  }
}