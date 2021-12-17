import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from './firebase'
import { useStateValue } from "./components/StateProvider";

//import components
import Header from "./components/Header";
import Home from "./components/Home.js";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser
        });

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/payment" element={[<Header />, <Payment />]} />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
