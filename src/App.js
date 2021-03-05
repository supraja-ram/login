import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
      <Navbar/>
      <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/register"><Register/></Route>
          <Route exact path="*"><ErrorPage/></Route>
      </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
