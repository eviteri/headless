import React from 'react';
import classes from './MobileBar.module.css';

const MobileBar = (props) => {

        let barClasses = [
            classes.MobileNavButton,
            props.open ? classes.Change : '' 
        ]

        return(
            <div className={classes.MobileNavBar}>
                <div className={barClasses.join(" ")} onClick={props.clicked}>
                    <div className={classes.Bar1}></div> 
                    <div className={classes.Bar2}></div> 
                    <div className={classes.Bar3}></div>
                </div>
            </div>
        )
}
export default MobileBar;