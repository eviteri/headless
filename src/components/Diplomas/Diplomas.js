import React from 'react';
import classes from './Diplomas.module.css';

const diplomas = (props) => {
    let content = null;

    if (props.content.diplomas) {
        content = (
            <section className={classes.Photos}>
                {props.content.diplomas.map((photo, index) => {
                    return (
                        <a href={photo.url} target="_blank" key={index} rel="noopener noreferrer">
                            <img src={photo.url}  alt={ ("photo-" + index) }/>
                        </a>
                        
                    )
                })}
            </section>
        )
    }


    return content;
}
export default diplomas;