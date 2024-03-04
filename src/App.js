import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Teachers from "./pages/Teachers/Teachers";
import ROUTER from "./router/router";
import Students from "./pages/Students/Students";
import Shedule from "./pages/Shedule/Shedule";

function App() {
  const {AUTH, HOME, TEACHERS, STUDENTS, SHEDULE} = ROUTER
  return (
    <Router>
      <Switch>
        <Route exact path={AUTH}>
            <Auth/>
        </Route>
        <Route exact path={HOME}>
            <Home/>
        </Route>
        <Route exact path={TEACHERS}>
            <Teachers/>
        </Route>
        <Route exact path={STUDENTS}>
            <Students/>
        </Route>
        <Route exact path={SHEDULE}>
            <Shedule/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
