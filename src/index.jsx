import './index.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import packageJson from "../package.json";

// console.log(packageJson.version);
(async (newVersion) => {
    const version = localStorage.getItem('version');
    if(version !== newVersion){
        localStorage.clear();
        localStorage.setItem('version', newVersion);
    }
    ReactDOM.render(
                <App />
    , document.getElementById('root'));
})(packageJson.version);
