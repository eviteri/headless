import React  from 'react';
import classes from './Certifications.module.css';

const certifications = (props) => {
    let content = null;

    if(props.content.certifications){
        content = (
            <section className={classes.Certification}>
               {props.content.certifications.map( (certification, index) => {
                   return (
                       <div key={index}>
                            <h2>{certification.title}</h2>
                            <p>Issue: {certification.issue}</p>
                            { certification.expire ? <p>Expire: {certification.expire}</p>: null}
                            
                            <a href={certification.diploma} target="_blank" rel="noopener noreferrer">
                                <img src={certification.diploma} alt="" />
                            </a>
                       </div>
                   )
               })}
            </section>
        )
    }

    
    return content;
}
export default certifications;