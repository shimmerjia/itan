import React from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';

import Layout from '../layouts/index.js';
import Home from '../pages/home';
import About from '../pages/about';
import NoMatch from '../pages/not-found';

const App = () => {
    return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route component={NoMatch}/>
        </Switch>
      </Layout>
    </HashRouter>
    )
}
export default App
