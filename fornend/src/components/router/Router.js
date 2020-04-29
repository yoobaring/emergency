import { Switch,BrowserRouter , Route} from "react-router-dom"
import Home from "../../components/page/Home";
import Contact from "../../components/page/Contact";
import Department from "../../components/page/Department";
import Engage from "../../components/page/Engage";
import Team from "../../components/page/Team";
import '../../components/page/Style.css';

import React from 'react';
import Ad from "../../admin/Admin";
import Error from "../../components/page/Error";
import Login from "../../login/Login";
import Listname from "../../user/Listname";



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
<Route  path="/Listname" component={Listname} />
<Route exact component={Error} />



</Switch>
</BrowserRouter>
</div>
    )
}
export default Router;