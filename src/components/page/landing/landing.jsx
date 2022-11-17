import './style.sass'
import './style/800.sass'
import './style/day.sass'
import './style/night.sass'
import React from "react";
import {useHistory} from "react-router-dom";
const Landing = (props) => {
    const push = useHistory()?.push;
    return <>
    <a href="/Test">Go to test</a>
    </>
};

export default Landing;
