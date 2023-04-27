// import Cart from "./components/Cart";
// import Navbar from "./components/Navbar";
// import ProductList from "./components/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Contacts from "./components/contacts/Contacts";
// import AddContact from "./components/contacts/AddContact";
// import EditContact from "./components/contacts/EditContact";
import "./index.css";
import Todos from "./components/todos/Todos";
import Coba from "./components/Coba";

function App() {
  return (
    <div className="container mx-auto mt-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Coba />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
