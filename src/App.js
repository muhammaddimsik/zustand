import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import "./index.css";

function App() {
  return (
    <div className="container mx-auto mt-5">
      <Navbar />
      <hr />
      <ProductList />
      <hr />
      <Cart />
    </div>
  );
}

export default App;
