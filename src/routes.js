//Dependencies
import React from 'react';
import { Route, Switch} from 'react-router-dom'; 

// Components
import App from './Components/App';
import About from './Components/About';
import Contact from './Components/Contact';
import Page404 from './Components/Page404';

// Containers
import Home from './Containers/Home';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/" component={Home}/>
            <Route component={Page404}/>
        </Switch>
    </App>;

export default AppRoutes;