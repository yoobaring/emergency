import { Switch,BrowserRouter , Route} from "react-router-dom"
import Home from "../../components/page/Home";
import Contact from "../../components/page/Contact";
import Department from "../../components/page/Department";
import Engage from "../../components/page/Engage";
import Team from "../../components/page/Team";
import Login from "../../components/page/Login";

import React from 'react';
import Ad from "../../admin/Admin";
import Error from "../../components/page/Error";

const Router = () => {

    return(
      
        <div>


<BrowserRouter>
<Switch>
<Route exact path="/" component={Home} />
<Route  path="/Contact" component={Contact} />
<Route  path="/Department" component={Department} />
<Route  path="/Engage" component={Engage} />
<Route  path="/Team" component={Team} />
<Route  path="/Login" component={Login} />
<Route  path="/Admin" component={Ad} />
<Route exact component={Error} />



</Switch>
</BrowserRouter>
</div>
    )
}
export default Router;