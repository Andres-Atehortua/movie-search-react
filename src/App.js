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
    console.log(process.env.PUBLIC_URL)
    return (
      <>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} render={() => <Index movies={this.state.results} setResults={this._setResults} />} />
          <Route exact path={process.env.PUBLIC_URL + '/detail/:id'} render={props => <Detail {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </>
    )
  }
}

export default App
