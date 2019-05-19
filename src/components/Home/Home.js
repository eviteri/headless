import React, { Fragment } from 'react';
import classes from './Home.module.css';
import {withRouter} from 'react-router-dom';

const Home = (props) => {
    
    const redirectHandler = () => {
        props.history.push("/contact");
    }

    return (
        <Fragment>
            <section className={classes.Intro}>
                <div className={classes.Container}>
                    <h2 dangerouslySetInnerHTML={{ __html: props.content.banner_title }} />
                    <p dangerouslySetInnerHTML={{ __html: props.content.banner_paragraph }} /> 
                    <button 
                        className={classes.Button} 
                        dangerouslySetInnerHTML={{ __html: props.content.banner_button_text }} 
                        onClick={redirectHandler}/>
                </div>
            </section>
            <section className={classes.ContentContainer}>
                <h2 dangerouslySetInnerHTML={{ __html: props.content.title }} />
                <p dangerouslySetInnerHTML={{ __html: props.content.description }} />
            </section>
        </Fragment>
    );
}
export default withRouter(Home);