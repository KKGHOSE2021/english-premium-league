import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    
    <Router>
        <Switch>
          <Route path="/home"><Home/></Route>           
          <Route path="/teams/:idTeam"><TeamDetails /></Route>
          <Route exact path="/"><Home/></Route>
          <Route path="*"><NoMatch /></Route>          
        </Switch>
    </Router>
  );
}

export default App;
