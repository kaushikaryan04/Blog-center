import Navbar from "./Navbar";
import Homepage from "./home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import Blogdetail from "./Blogdetail";
import Notfound from "./Notfound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>

            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <Blogdetail />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
