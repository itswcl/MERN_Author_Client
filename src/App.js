import './App.css';
import { Switch, Link, Route, Redirect } from 'react-router-dom'
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/authors">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
