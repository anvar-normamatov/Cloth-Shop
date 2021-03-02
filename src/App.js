import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import SignPage from "./pages/SignPage";

const App = () => {
///your app logic//
  return (
    /// html part which  show in browser
    <div className='app'>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/sign" component={SignPage} />
      </Switch>
    </div>
   
  );
}

export default App;
