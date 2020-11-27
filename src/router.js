import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  
} from "react-router-dom";

import Home from './pages/Home/home'
import Receitas from './pages/receitas/receitas'


function Routes(){
        return(
            <BrowserRouter>
                <Switch>
                <Route path="/" exact>
                <Home />
                </Route>
                <Route path="/receitas">
                <Receitas />
                </Route>
                </Switch>
            </BrowserRouter>
        )
}

export default Routes;