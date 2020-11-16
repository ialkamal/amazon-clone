// const firebaseConfig = {
//   apiKey: "AIzaSyAnExP9m4D2B5kR0S0BSoWsQ7wMmC75-VE",
//   authDomain: "clone-acd41.firebaseapp.com",
//   databaseURL: "https://clone-acd41.firebaseio.com",
//   projectId: "clone-acd41",
//   storageBucket: "clone-acd41.appspot.com",
//   messagingSenderId: "427331460334",
//   appId: "1:427331460334:web:7539347b97a5d98f6b27ff",
//   measurementId: "G-STWRPQPCVL"
// };

import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <Navbar />
          <Checkout />
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route path="/">
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
