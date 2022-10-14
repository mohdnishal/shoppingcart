import Header from './components/Header/Header';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./components/Home/Home"
import Cart from "./components/Cart/Cart"
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/cart" element={<Cart/>}/>
        
      </Routes>
    </Router>
      
    
  );
}

export default App;
