import FilteredList from './FilteredList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/**
 * Top-level class.
 */
function App() {
  // List of products in alphabetical order. Add to as necessary.
  const productList = [
    { name: "Bucheron", img: "bucheron.jpg", price: 9.99, source: "Goat", firmness: "Medium", description:"Salty, fluffy, lemony"},
    { name: "Chabichou", img: "chabichou.jpg", price: 13.99, source: "Goat", firmness: "Soft", description:"Grassy, creamy, lemony"},
    { name: "Clonmore", img: "clonmore.jpeg", price: 14.99, source: "Goat", firmness: "Hard", description:"Earthy, milky, nutty"},
    { name: "Emmental", img: "emmental.jpeg", price: 6.99, source: "Cow", firmness: "Medium", description:"Mild, fruity, easy to melt"},
    { name: "Havarti", img: "havarti.jpg", price: 6.99, source: "Cow", firmness: "Medium", description:"Buttery, nutty, smooth"},
    { name: "Majorero", img: "majorero.jpg", price: 11.99, source: "Goat", firmness: "Medium", description:"Acidic, milky, springy"},
    { name: "Manchego", img: "manchego.jpg", price: 7.99, source: "Sheep", firmness: "Medium", description:"Sweet, zesty, herby"},
    { name: "Mimolette", img: "mimolette.jpg", price: 8.99, source: "Cow", firmness: "Hard", description:"Caramel, fudgy, oily"},
    { name: "Neufchatel", img: "neufchatel.jpg", price: 8.99, source: "Cow", firmness: "Soft", description:"Mushroom, rich, supple"},
    { name: "Pecorino", img: "pecorino.jpg", price: 12.99, source: "Sheep", firmness: "Hard", description:"Sharp, salty, dense"},
    { name: "Roquefort", img: "roquefort.jpg", price: 14.99, source: "Sheep", firmness: "Medium", description:"Funky, rich, peppery"},
    { name: "Telemea", img:"telemea.jpg", price: 10.99, source: "Sheep", firmness: "Soft", description:"Tangy, briny, creamy"}
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
