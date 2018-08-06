import React from "react";
import SelectCity from "./SelectCity";
import PropTypes from "prop-types";
import { Link, withRouter, Route } from "react-router-dom";
import PagesLinks from "./PagesLinks";
import SelectSession from "./SelectSession";
const Toolbar = props=>(
<header>
<nav>
<div className="headerLogo">
         
        </div>

        <PagesLinks />
</nav>

</header>
);
 export default Toolbar;