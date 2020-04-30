import { Switch,BrowserRouter , Route} from "react-router-dom"
import Home from "../../components/page/Home";


import Engage from "../../components/page/Engage";

import '../../components/page/Style.css';

import React from 'react';
import Ad from "../../admin/Admin";
import Error from "../../components/page/Error";
import Login from "../../login/Login";
import Listname from "../../user/Listname";
import { MenuItemLink, WithPermission } from 'admin-on-rest';



const Router = () => {

    return(
      
        <div>


<BrowserRouter>
<Switch>
<Route exact path="/" component={Home} />

<Route  path="/Engage" component={Engage} />
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