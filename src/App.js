import React from 'react';
import Home from "./pages/Home";
import AddTaskPage from './pages/AddTaskPage'
import DoneTaskPage from './pages/DoneTaskPage'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route path="/add"  component={AddTaskPage}/>
        <Route path="/done"  component={DoneTaskPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
