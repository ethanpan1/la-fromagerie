import { Component } from 'react';
import DisplayList from './DisplayList';
import Navbars from './Navbars';
import Cart from './Cart'

/**
 * Component that handles major functionality of the page. Filtering, sorting, adding, and 
 * removing items is handled here.
 * Instantiates navbars and the display list on one side, and the cart on the other, and
 * passes in functions to these components.
 */
export default class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Used for filtering/sorting.
      source: "All",
      firmness: "All",
      sort: "A-Z",

      // Keeps track of cart properties.
      cartItems: [],
      total: 0.00
    };
  }
  
  // Sets state when source filter is changed.
  onSelectFilterSource = event => {
    this.setState({
      source: event
    })
  };

  // Sets state when firmness filter is changed.
  onSelectFilterFirmness = event => {
    this.setState({
      firmness: event
    })
  };

  // Sets state when sort method is changed.
  onSelectSort = event => {
    this.setState({
      sort: event
    })
  };

  // Filters the cheeses displayed by chosen source filter.
  matchesFilterSource = item => {
    if(this.state.source === "All") { 
      return true
    } else if (this.state.source === item.source) {
      return true
    } else {
      return false
    }
  }

  // Filters the cheeses displayed by chosen firmness filter.
  matchesFilterFirmness = item => {
    if(this.state.firmness === "All") { 
      return true
    } else if (this.state.firmness === item.firmness) {
      return true
    } else {
      return false
    }
  }

  // Sorts the cheeses displayed by chosen sort method.
  sortBy = list => {
    if(this.state.sort === "Price Low to High") { 
      return list.sort(function(a, b) {
        return a.price - b.price;
      })
    } else if (this.state.sort === "Price High to Low") {
      return list.sort(function(a, b) {
        return b.price - a.price;
      })
    } else {
      // Since product list is already alphabetical, no sort function is needed here.
      return list
    }
  }

  // Adds a unit of cheese to the cart and updates price total.
  addItem = (newName, newImg, newPrice, newSource, newFirmness) => {
    const newItem = {name: newName, img: newImg, price: newPrice, source: newSource, firmness: newFirmness};
    const items = [...this.state.cartItems, newItem];

    const newTotal = Math.round((this.state.total + newPrice) * 100) / 100

    this.setState({cartItems: items, total: newTotal});
  }

  // Removes a unit of cheese from the cart and updates price total.
  removeOneItem = (oldName, oldPrice) => {
    var itemsCopy = [...this.state.cartItems];

    const i = itemsCopy.reverse().findIndex((element) => element.name == oldName)

    if (i > -1) {
      itemsCopy.reverse().splice(itemsCopy.length - i - 1, 1);
    }

    const newTotal = Math.round((this.state.total - oldPrice) * 100) / 100

    this.setState({cartItems: itemsCopy, total: newTotal});
  }

  // Removes all units of a cheese from the cart and updates price total.
  removeAllItems = (oldName, oldPrice) => {
    var itemsCopy = [...this.state.cartItems];

    const numRemoved = itemsCopy.filter((element) => element.name == oldName).length
    const newTotal = Math.round((this.state.total - oldPrice * numRemoved) * 100) / 100

    this.setState({cartItems: itemsCopy.filter((element) => element.name != oldName), total: newTotal});
  }
  
  render() {
    return (
      <div class="wrapper">
        <div class="list-container">
          {/* Pass in filter and sort functions */}
          <Navbars filterSource={this.onSelectFilterSource} filterFirmness={this.onSelectFilterFirmness} sort={this.onSelectSort}/> 
          
          {/* Pass in product list, filtered and sorted, and add function */}
          <DisplayList list={this.sortBy(this.props.list.filter(this.matchesFilterSource).filter(this.matchesFilterFirmness))} add = {this.addItem} />
        </div>

        <div class="aggregator-container">
          {/* Pass in cart list, price total, and add/remove functions */}
          <Cart list={this.state.cartItems} total={this.state.total} add={this.addItem} removeOne={this.removeOneItem} removeAll={this.removeAllItems}/>
        </div>
      </div>
    );
  }
}