
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookDetails from "./components/BookDetails";
import BookList from "./components/BookList";
import Favorites from "./components/Favorites";
import './App.css'
import Navbars from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
return(
  <div className="app">
      <ToastContainer/>
    <Navbars/>
    <Routes>
      <Route path="/books"element={<BookList/>} />
      <Route path="books/:id"element={<BookDetails/>}/>
      <Route path="favorites"element={<Favorites/>}/>
      </Routes> 
    </div>
  );
};

export default App;
