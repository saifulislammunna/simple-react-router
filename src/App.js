import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom';
 

function App() {
  return (
    <div className="App">
      
       
       <Router>
       <a href="/home">Home</a>
       <Link to="/friends">Friends</Link>
       <a href="/about">About</a>
         <Switch>
           <Route exact path="/">
              <Home></Home>
             </Route>
           <Route path="/home">
             <Home></Home>
             </Route>
            <Route path="/friends">
              <Friends></Friends>

            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
         </Switch>
       </Router>
        
    </div>
  );
}

export default App;
