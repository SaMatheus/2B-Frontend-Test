import React from 'react'

// ROUTES
import Home from '../pages/Home'

// ROUTER
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
