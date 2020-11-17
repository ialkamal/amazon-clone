import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <Navbar />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
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
