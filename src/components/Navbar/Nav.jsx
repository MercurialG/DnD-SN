import React from "react";
import classes from './Nav.module.css'

const Navbar = () => {
    return (<nav className={classes.nav}>
        <div className={classes.item}><a>Profile</a></div>
        <div className={classes.item}><a>Friends</a></div>
        <div className={classes.item}><a>Messages</a></div>
        <div className={classes.item}><a>News</a></div>
        <div className={classes.item}><a>Settings</a></div>
    </nav>)
};
export default Navbar;