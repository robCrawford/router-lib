import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/users"><Users /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function UsersLink() {
  const history = useHistory();
  const handleClick = () => history.push('/users');
  return <button type="button" onClick={handleClick}> Go to users </button>
}

function Home() {
  return <><h2>Home</h2><UsersLink /></>;
}

function About() {
  return <><h2>About</h2><UsersLink /></>;
}

function Users() {
  return <><h2>Users</h2><UsersLink /></>;
}

export default App;
