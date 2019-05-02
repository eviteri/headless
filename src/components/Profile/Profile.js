import React from 'react';
import classes from './Profile.module.css';

const profile = (props) => {
    return (
        <div className={classes.Profile}>
            <img src="http://api.eviteri.com/wp-content/uploads/2019/05/eloyPicture.jpg" alt=""/>
            <h1>Eloy Viteri</h1>
            <p>Software Engineer</p>
        </div>
    );
}
export default profile;