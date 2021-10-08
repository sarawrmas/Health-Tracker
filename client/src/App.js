import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Navbar';
import Login from './pages/Login';
import Workout from './pages/Workout';
import Meal from './pages/Meal';
import SavedSets from './pages/SavedSets';
import SavedMeals from './pages/SavedMeals'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/workout-search" component={Workout} />
          <Route exact path="/meal-planner" component={Meal} />
          <Route exact path="/my-sets" component={SavedSets} />
          <Route exact path="/my-meals" component={SavedMeals} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
