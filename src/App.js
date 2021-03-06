import React from 'react';
import countries from './countries.json';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <div className="container">
          <div className="row">
            <Route path="/">
              <CountriesList countries={countries} />
            </Route>
            <Route path="/:country" component={CountryDetails} />
          </div>
        </div>
      </Switch>
    </div>
  );
}

export default App;
