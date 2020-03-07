import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { Employeeform } from './components/Employeeform';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/emplyoee-form" component={Employeeform} exact />
      </Switch>
    </main>
  );
}

export default App;
