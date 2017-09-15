import React from 'react';
import Auth from './components/auth';
import Dash from './components/dash'
import step1 from './components/step1/step1';
import step2 from './components/step2/step2';
import step3 from './components/step3/step3';
import step4 from './components/step4/step4';
import step5 from './components/step5/step5';
import { Route, HashRouter } from 'react-router-dom'

export default (
    <HashRouter>
        <div>
        <Route exact component={Auth} path='/' />
        <Route component={Dash} path='/dash' />
        <Route component={step1} path='/api/step1' />
        <Route component={step2} path='/api/step2' />
        <Route component={step3} path='/api/step3' />
        <Route component={step4} path='/api/step4' />
        <Route component={step5} path='/api/step5' />
            </div>
        </HashRouter>
)