import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Navbar';
import Workout from './pages/Workout';
import Meal from './pages/Meal';

function App() {
  return (
    <Router>
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact
          path="/workout-search"
          component={Workout}
        />
        <Route exact
          path="/meal-planner"
          component={Meal}
        />
      </Switch>
    </>
    </Router>
  );
}

export default App;
