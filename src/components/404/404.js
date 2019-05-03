import React, { Fragment } from 'react';
import classes from './Error.module.css';

const home = (props) => {
    //<button className={classes.Button} dangerouslySetInnerHTML={{ __html: props.content.banner_button_text }} />
    return (
        <Fragment>
            <section className={classes.Intro}>
                <div className={classes.Container}>
                    <h2>Oops!</h2>
                    <p>Page not Found.</p>
                </div>
            </section>
            <section className={classes.ContentContainer}>
                <p>We can't seem to find the page you're looking for</p>
            </section>
            
        </Fragment>
    );
}
export default home;