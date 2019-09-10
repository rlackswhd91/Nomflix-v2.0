import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "./Header/Header";
import Detail from "../Routes/Detail";
import SignPage from "../Routes/SignPage";
import CollectionPage from "../Routes/CollectionPage";
import SeasonPage from "../Routes/SeasonPage";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign" exact component={SignPage} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" component={Search} />
      <Route path="/movie/:id" component={Detail}></Route>
      <Route
        path="/show/:id/season/:seasonNumber"
        component={SeasonPage}
      ></Route>
      <Route path="/show/:id" component={Detail}></Route>
      <Route path="/collection/:id" component={CollectionPage}></Route>
      <Redirect from="*" to="/"></Redirect>
    </Switch>
  </Router>
);
