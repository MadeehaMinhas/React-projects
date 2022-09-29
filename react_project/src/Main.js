import React,{Component} from 'react';
import Create from './create';
import Landing from './Landing';
import Event from './event';
import { Router, Switch, Route } from "react-router-dom";

class Main extends Component{
    render(){
        return(


            <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/event" component={Event} />
            <Route path="/create" component={Create} />
            
        </Switch>
        );

    }
}
export default Main;