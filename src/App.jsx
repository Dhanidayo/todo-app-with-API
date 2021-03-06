import Planner from './components/Planner';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StateProvider from './components/StateProvider';
import { AppContext } from './components/StateProvider';
import { useContext } from 'react';



function App() {
  const context = useContext(AppContext);
  console.log(context);

  return (
    <BrowserRouter>
      <StateProvider>
        <Navbar />

        <Switch>
          <Route path='/Login'>
            <Login />
          </Route>
          <Route path='/Register'>
            <Register />
          </Route>
          <Route path='/Home'>
            <Home />
          </Route>
          <Route path='/TodoList'>
            <Planner />
          </Route>
        </Switch>

      </StateProvider>  
    </BrowserRouter>
  );
}

export default App;