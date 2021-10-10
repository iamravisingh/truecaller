import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import App from '../App';
import CPostDetails from '../containers/posts/c_post_details'


const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path = '/post/:slug' component={CPostDetails}/>
            </Switch>
        </Router>
    )
}

export default Routing;