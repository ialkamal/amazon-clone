import "./App.css";
import React, { useEffect } from "react";
import { auth } from "./backend/firebase";
import { Route, Switch } from "react-router-dom";
import { useStateValue } from "./contexts/StateContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log("USER----> ", user);

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
