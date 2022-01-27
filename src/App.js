import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Main from './Components/Main';
import Create from './Components/Create';
import Detail from './Components/Detail';
import Update from './Components/Update';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Switch>

        {/* this is for update ONE author  */}
        <Route exact path="/authors/:id/edit">
          <Update />
        </Route>

        {/* this is for create authors  */}
        <Route exact path="/authors/new">
          <Create />
        </Route>

        {/* this is for read ONE author  */}
        <Route exact path="/authors/:id">
          <Detail />
        </Route>

        {/* this is for all authors  */}
        <Route exact path="/authors">
          <Main />
        </Route>
        <Route path="/">
          <Redirect to="/authors"/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
