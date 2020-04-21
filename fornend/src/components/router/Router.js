import { BrowserRouter, Route} from "react-router-dom"
import Home from "../../components/page/Home";
import Contact from "../../components/page/Contact";
import Department from "../../components/page/Department";
import Engage from "../../components/page/Engage";
import Team from "../../components/page/Team";
import Login from "../../components/page/Login";
import React from 'react';

const Router = () => {

    return(
        <div>
<BrowserRouter>
<Route exact={true} path='/'>
  <Home />
  </Route>
  <Route path='/Contact'>
  <Contact />
  </Route>
  <Route path='/Department'>
  <Department />
  </Route>
  <Route path='/Engage'>
  <Engage />
  </Route>
  <Route path='/Team'>
  <Team />
  </Route>
  <Route path='/Login'>
  <Login />
  </Route>
</BrowserRouter>
</div>
    )
}
export default Router;