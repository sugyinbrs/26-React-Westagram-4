import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginHr from './Pages/hyerin/Login/Login';
import MainHr from './Pages/hyerin/Main/Main';

import LoginKb from './Pages/kibum/Login/Login';
import MainKb from './Pages/kibum/Main/Main';

import LoginSy from './Pages/saeyoung/Login/Login';
import MainSy from './Pages/saeyoung/Main/Main';

import LoginYs from './Pages/yusin/Login/Login';
import MainYs from './Pages/yusin/Main/Main';

import LoginSg from './Pages/sugyeong/Login/Login';
import MainSg from './Pages/sugyeong/Main/Main';
import SignUpSg from './Pages/sugyeong/SignUp/SignUp';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/LoginHr" component={LoginHr} />
          <Route exact path="/MainHr" component={MainHr} />
          <Route exact path="/LoginKb" component={LoginKb} />
          <Route exact path="/MainKb" component={MainKb} />
          <Route exact path="/LoginSy" component={LoginSy} />
          <Route exact path="/MainSy" component={MainSy} />
          <Route exact path="/LoginYs" component={LoginYs} />
          <Route exact path="/MainYs" component={MainYs} />
          <Route exact path="/LoginSg" component={LoginSg} />
          <Route exact path="/MainSg" component={MainSg} />
          <Route exact path="/SignUpSg" component={SignUpSg} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
