import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
 

function App() {
  return (
    <div className="App">
       
       <Router>
         <Switch>
           <Route exact path="/">
              <Home></Home>
             </Route>
           <Route path="/Home">
             <Home></Home>
             </Route>
            <Route path="/friends">
              <Friends></Friends>

            </Route>
            <Route>
              <About></About>
            </Route>

         </Switch>
       </Router>
        
    </div>
  );
}

export default App;
