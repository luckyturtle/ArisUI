import React, { Component } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter
} from "react-router-dom";

import Landing from "./components/page/landing/landing";

//Testing UI
import TestingUI from './testingUI/testingUI';
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
const themes = {
    dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
    light: `${process.env.PUBLIC_URL}/light-theme.css`,
  };


/**
 * @Note this is for the router enum, centralized management.
 * */
export const RouterEnum = {
    // new version
    Landing: '/',
    Test: '/Test',
};

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className={"App"}>
            <BrowserRouter>
                <Switch>
                    <Route path={RouterEnum.Landing} exact={true}>
                        <Landing />
                    </Route>
                    <Route path={RouterEnum.Test}>
                        <ThemeSwitcherProvider themeMap={themes} defaultTheme="light">
                            <TestingUI />
                        </ThemeSwitcherProvider>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>;
    }
}

export default App;
