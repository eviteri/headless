import React from 'react';
import classes from './Leadership.module.css';

const leadership = (props) => {
    let content = null;

    if (props.content.leadership) {
        content = (
            <section className={classes.Leadership}>
                <div className={classes.Wrapper}>
                    {props.content.leadership.map((leader, index) => {
                        return (
                            <div key={index}>
                                <h2>{leader.title}</h2>
                                {leader.items.map((item, i)=>{
                                    return(
                                        <p key={i}> <i className="far fa-arrow-alt-circle-right"></i> {item.item}</p>
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
export default leadership;