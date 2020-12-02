import FilteredList from './FilteredList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/**
 * Top-level class.
 */
function App() {
  // List of products in alphabetical order. Add to as necessary.
  const productList = [
    { name: "Bucheron", img: "bucheron.jpg", price: 9.99, source: "Goat", firmness: "Medium"},
    { name: "Chabichou", img: "chabichou.jpg", price: 13.99, source: "Goat", firmness: "Soft"},
    { name: "Clonmore", img: "clonmore.jpeg", price: 14.99, source: "Goat", firmness: "Hard"},
    { name: "Emmental", img: "emmental.jpeg", price: 6.99, source: "Cow", firmness: "Medium"},
    { name: "Havarti", img: "havarti.jpg", price: 6.99, source: "Cow", firmness: "Medium"},
    { name: "Majorero", img: "majorero.jpg", price: 11.99, source: "Goat", firmness: "Medium"},
    { name: "Manchego", img: "manchego.jpg", price: 7.99, source: "Sheep", firmness: "Medium"},
    { name: "Mimolette", img: "mimolette.jpg", price: 8.99, source: "Cow", firmness: "Hard"},
    { name: "Neufchatel", img: "neufchatel.jpg", price: 8.99, source: "Cow", firmness: "Soft"},
    { name: "Pecorino", img: "pecorino.jpg", price: 12.99, source: "Sheep", firmness: "Hard"},
    { name: "Roquefort", img: "roquefort.jpg", price: 14.99, source: "Sheep", firmness: "Medium"},
    { name: "Telemea", img:"telemea.jpg", price: 10.99, source: "Sheep", firmness: "Soft"}
  ]
  return (
    <div className="app">
      <br/>
      <h1>La Fromagerie</h1>
      <FilteredList list={productList} />
      <br/>
    </div>
  );
}

export default App;
