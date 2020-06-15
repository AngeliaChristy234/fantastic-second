import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

// All Pages
import Homepage from './pages/homepage/homepage.pages';
import SearchResultsPage from './pages/search-results/search-results.pages';

import './App.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header/>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/:search-term' component={SearchResultsPage} />
          </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App;
