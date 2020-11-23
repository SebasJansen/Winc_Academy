import './App.css';
import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './components/Header'
import Container from './components/Container'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is where I explain a bit about myself and the project. My name is Sebastiaan, and I don't like React. For some reason React just doesn't like me, despite of all de time I put into trying to understand it...</p>
      <p>The playlist project is finished now, though I can't say I'm pleased with the result. Atleast it does work, barely...</p>
    </div>
  );
}

