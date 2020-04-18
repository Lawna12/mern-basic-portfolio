import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Wrapper from "./components/Wrapper";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Resume" component={Resume} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}


