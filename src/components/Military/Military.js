import React from 'react';
import classes from './Military.module.css';

const military = (props) => {
    let content = null;

    if (props.content.military) {
        content = (
            <section className={classes.Military}>
                <div className={classes.Diploma}>
                        <a href="http://api.eviteri.com/wp-content/uploads/2019/05/nam.jpg" target="_blank" rel="noopener noreferrer">
                                <img src="http://api.eviteri.com/wp-content/uploads/2019/05/nam.jpg" alt="" />
                        </a>
                    
                </div>
                <div className={classes.Wrapper}>
                    {props.content.military.map((unit, index) => {
                        return (
                            <div key={index}>
                                <h2>{unit.title}</h2>
                                <h3>{unit.unit}</h3>
                                <p>{unit.from} - {unit.to}</p>
                                <p>MOS: {unit.mos}</p>
                                <p>Rank: {unit.rank}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }


    return content;
}
export default military;