import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Activities from "./components/Activities/Activities";
import Team from "./components/Team/Team";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/activities">
              <Activities />
            </Route>
            <Route exact path="/team">
              <Team />
            </Route>
            <Route exact path="/contact">
              <ContactUs />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
