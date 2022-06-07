import UrlPathMap from '../common/UrlPathMap';
import React from 'react';
import { Route } from 'react-router-dom';
import PageMaker from './PageMaker';
import Home from './Home';
import About from './About';
import Details from './Details';
import './Content.scss';

function Content() {
    return (
        <div className="content_container">
            <Route path={UrlPathMap.HOME} exact={true} component={Home}/>
            {/* <Route path={UrlPathMap.HOME} exact={true} component={PageMaker}/> */}
            
            <Route path={UrlPathMap.ABOUT} component={About}/>
            <Route path={`${UrlPathMap.DETAILS}/:m_id`} component={Details} />
        </div>
    );
};

export default Content;

