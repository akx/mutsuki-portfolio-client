import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EnglishHome from "./english/EnglishHome";
import EnglishProjects from "./english/EnglishProjects";
import JapaneseHome from "./english/EnglishHome";

class App extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem("apiUrl", 'https://mutsuki-api.herokuapp.com');
    localStorage.setItem("clientUrl", 'http://www.mutsukiuchiyama.com');
    if(process.env.NODE_ENV !== 'production') {
      localStorage.setItem("apiUrl", 'http://localhost:3001');
      localStorage.setItem("clientUrl", 'http://localhost:3000');
    }
    console.log(localStorage.clientUrl)
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={EnglishHome} />
          <Route path="/en" exact component={EnglishHome} />
          <Route path="/jp" exact component={JapaneseHome} />
        </Switch>
      </Router>
    )
  }
}

export default App;
