import React from 'react';
import classes from './HonorsAwards.module.css';

const honorsAwards = (props) => {
    let content = null;

    if (props.content.awards) {
        content = (
            <section className={classes.HonorsAwards}>
                <div className={classes.Wrapper}>
                    {props.content.awards.map((award, index) => {
                        return (
                            <div key={index}>
                                <h2>{award.industry}</h2>
                                {award.awards.map( (item, i) => {
                                    return (
                                        <div key={i}>
                                            <p>
                                                <i className="far fa-arrow-alt-circle-right"></i>&nbsp; 
                                                {item.diploma 
                                                 ? <a href={item.diploma} target="_blank" rel="noopener noreferrer"> {item.title} - {item.date}</a>
                                                 : item.title + ' - ' + item.date
                                                }
                                                
                                                
                                            </p>
                                        </div>
                                    )
                                })}
                                
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }


    return content;
}
export default honorsAwards;