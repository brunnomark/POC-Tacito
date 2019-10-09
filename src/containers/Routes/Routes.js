import React, {Component} from 'react';
import {BrowserRouter, Route, /*Switch*/} from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';

// const AsyncHeader = asyncComponent(() => {
//     return import('../../components/Toolbar/Toolbar');
// });

const AsyncHomePage = asyncComponent(() => {
    return import('../../App');
});

const AsyncPainelcontrolePage = asyncComponent(() => {
    return import('../Painelcontrole/Painelcontrole');
});

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* <Switch>
                    <Route component={AsyncHeader} />
                </Switch> */}
                <Route exact path='/' component={AsyncHomePage}/>
                <Route exact path='/painelControle' component={AsyncPainelcontrolePage}/>
            </BrowserRouter>
        );
    }
}

export default Routes;