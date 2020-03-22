import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Index from './Pages/index'

import Detail from './Pages/Detail'
import NotFound from './Pages/NotFound'


class App extends Component {

  state = {
    results: []
  }

  _setResults = results => this.setState({ results })

  render() {

    return (
      <>
        <Switch>
          <Route exact path='/' render={() => <Index movies={this.state.results} setResults={this._setResults} />} />
          <Route path='/detail/:id' render={props => <Detail {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </>
    )
  }
}

export default App
