import React from 'react';
import { Menu } from 'antd';
import './style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    withRouter
  } from "react-router-dom";
export const SubRouterEnum = {
    // new version
    Lend: '/Lend',
    Stake: '/Stake',
    Farm: '/Farm',
    Portfolio: '/Portfolio',
};

const SideMenuBar = (props) => {
    const items = [
        { label: 'Lend', key: 'Lend', onClick:() => {props.history.push(`${path}/Lend`);} },
        { label: 'Farm', key: 'Farm', onClick:() => {props.history.push(`${path}/Farm`);} },
        { label: 'Stake', key: 'Stake', onClick:() => {props.history.push(`${path}/Stake`);} },
        { label: 'Portfolio', key: 'Portfolio', onClick:() => {props.history.push(`${path}/Portfolio/Farm`);} },
      ];
    let { path, url } = useRouteMatch();
    // console.log(props.currentPage)
    return (
        <Menu 
        className='sidebar-menu' 
        defaultSelectedKeys={[props.currentPage]}
        items={items} />
    )
  }
export default withRouter(SideMenuBar);
  