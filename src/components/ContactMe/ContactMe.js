import React, {Fragment} from 'react';
import classes from './ContactMe.module.css'

const Input = (props) => {

    let inputElement = null;
    switch(props.elementType){
        case 'input':
            inputElement =  (
                <Fragment>
                    <input 
                        className={classes.Input} 
                        {...props.elementConfig}
                        onChange={props.changed}
                        onBlur={props.blur}
                        value={props.value}
                        />
                    {props.error ? <div className={classes.Error}>{props.error}</div> : null}
                </Fragment>
            )
            break;
        case ( 'textarea' ):
            inputElement = (
                <Fragment>
                    <textarea 
                        className={classes.TextArea} 
                        {...props.elementConfig} 
                        onChange={props.changed}
                        onBlur={props.blur}
                        value={props.value}
                        />
                    {props.error ? <div className={classes.Error}>{props.error}</div> : null}
                </Fragment>
            )
            break;
        default:
            inputElement = null;
    }

    return(
        <div className={classes.InputWrapper}>
            {inputElement}
        </div>
    )
}
export default Input;