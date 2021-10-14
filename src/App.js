import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';

import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Detail from './views/ItemDetailContainer/ItemDetailContainer';


import 'semantic-ui-css/semantic.min.css'

// import { Router, Link } from 'react-router';





// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about'  component={About} />
          <Route path='/contact'  component={Contact} />
          <Route path='/detail/:id'  component={Detail} />
        </Switch>

      </div>
     </Router>
  );
}

export default App;
