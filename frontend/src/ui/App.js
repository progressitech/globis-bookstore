import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Bookstore } from "./Bookstore";
import { Contact } from "./Contact";
import { Cart } from "./Cart";
import { AboutUs } from "./AboutUs";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bookstore" component={Bookstore} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
