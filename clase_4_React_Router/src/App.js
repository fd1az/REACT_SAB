import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Post from './pages/posts/Posts';
import './style.css';

import Navigation from './components/navigation/Navigation';
import Layout from './components/layout/Layout';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/posts">
              <Post />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

render(React.createElement(App), document.getElementById('root'));
