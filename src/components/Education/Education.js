import React from 'react';
import classes from './Education.module.css';

const education = (props) => {
    let content = null;

    if(props.content.education){
        content = (
            <section className={classes.Education}>
               {props.content.education.map( (education, index) => {
                   return (
                       <div key={index}>
                            <h2>{education.college}</h2>
                            <h3>{education.title}</h3>
                            <p>{education.minor}</p>
                            <p>{education.graduated}</p>
                            <a href={education.diploma} target="_blank" rel="noopener noreferrer">
                                <img src={education.diploma} alt="" />
                            </a>
                       </div>
                   )
               })}
            </section>
        )
    }

    
    return content;
}
export default education;