import React, {Component, Fragment} from 'react';
import classes from './ContactMe.module.css';
import Input from '../../components/ContactMe/ContactMe';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios';

const initialState = {
    form:{
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Name*',
                minLength: 3
            },
            value: '',
            required: true,
            valid: false,
            errorMessage: null
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Email*',
                minLength: 6
            },
            value: '',
            required: true,
            valid: false,
            errorMessage: null
        },
        subject: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Subject*',
                minLength: 3
            },
            value: '',
            required: true,
            valid: false,
            errorMessage: null
        },
        message: {
            elementType: 'textarea',
            elementConfig: {
                placeholder: 'Message*',
                minLength: 5,
                maxLength:"300"
            },
            value: '',
            required: true,
            valid: false,
            errorMessage: null
        },
    },
    isLoading: false
}

class ContactMe extends Component {

    state = initialState

    updateObject = (oldObject, updatedProperties) => {
        return{
            ...oldObject,
            ...updatedProperties
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        let isValid = true;
        let updatedForm = {...this.state.form};

        //VALIDATING ALL ELEMENTS
        for (let key in updatedForm){
            const response = this.checkValidity(key);
            updatedForm[key].valid = response.isValid;
            updatedForm[key].errorMessage = response.message;
        }

        //UPDATING THE STATE
        this.setState(()=>{
            return {form: updatedForm}
        });

        //PREPARING DATA TO BE SENT
        const data = {}
        for (let key in this.state.form){
            if(!this.state.form[key].valid){
                isValid = false;
                break;
            }else{
                data[key] = this.state.form[key].value;
                isValid = true;
            }
        }

        //IF WE GOT ALL NEEDED DATA MAKE POST REQUEST
        if(isValid){
            this.setState({isLoading: true});

            axios.post('/wp-json/contact/v1/send', data)
            .then(response => {
                alert(response.data.message);
                this.resetState();
            })
            .catch(err => {
                alert(err.data.message);
                console.log(err);
            })
        }
        
    }

    resetState = () => {
        this.setState(initialState);
    }
    
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = this.updateObject(this.state.form[inputIdentifier], { 
            value: event.target.value,
        })
        const updatedForm = this.updateObject(this.state.form, {
            [inputIdentifier]: updatedFormElement
        })
        this.setState({form: updatedForm});
    }

    onBlurHandler = (inputIdentifier) => {
        const response = this.checkValidity(inputIdentifier);
        const updatedFormElement = this.updateObject(this.state.form[inputIdentifier], {
            valid: response.isValid,
            errorMessage: response.message
        })
        const updatedForm = this.updateObject(this.state.form, {
            [inputIdentifier]: updatedFormElement
        })
        this.setState({ form: updatedForm });
    }

    checkValidity = (inputIdentifier) => {
        let isRequired = this.state.form[inputIdentifier].required;
        let currentValue = this.state.form[inputIdentifier].value;
        let minLength = this.state.form[inputIdentifier].elementConfig.minLength;
        let isValid = false;
        let message = '';
        
        if(isRequired){
            if(currentValue === ''){
                isValid = false;
                message = 'This field is required';
                return { isValid, message}
                
            }else if(currentValue.length < minLength){
                isValid = false;
                message = 'This field requires atleast '+ minLength +' characters';
                return { isValid, message}
               
            }else{
                isValid = true;
                message = '';
            }
        }

        
        let pattern = '';
        //NAME
        if(inputIdentifier === 'name' || inputIdentifier === 'subject'){
            pattern = /^[a-zA-Z.' ]*$/;
            isValid = pattern.test( currentValue);
            message = isValid ? '' : 'You have entered an invalid name'
        }

        //EMAIL
        if(inputIdentifier === 'email'){
            pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( currentValue);
            message = isValid ? '' : 'You have entered an invalid email';
        }

         //Message
         if(inputIdentifier === 'message'){
            pattern = /^[a-zA-Z0-9,()-.!?$' ]*$/;
            isValid = pattern.test( currentValue);
            message = isValid ? '' : 'You have entered invalid characters';
        }

        return { isValid, message}
    }

    render(){
        const formElementsArray = [];
        for (let key in this.state.form){
            formElementsArray.push({
                id: key,
                config: this.state.form[key]
            })
        }

        return(
            <Fragment>
                {this.state.isLoading ? <div className={classes.SpinnerWrapper}><Spinner /></div> : null}
                <section className={classes.ContactContent}>
                    <h2>Contact Me</h2>
                    <form onSubmit={this.submitHandler}>
                        {formElementsArray.map(formElement => (
                                <Input key={formElement.id} 
                                    elementType={formElement.config.elementType} 
                                    elementConfig={formElement.config.elementConfig} 
                                    value={formElement.config.value} 
                                    error={formElement.config.errorMessage} 
                                    changed={(event) => this.inputChangedHandler(event, formElement.id) }
                                    blur={() => this.onBlurHandler(formElement.id)}/>
                        ))}

                        <div className={classes.ButtonWrapper}>
                            <button 
                                type="submit" 
                                className={classes.SendButton} 
                            >Send Message <i className="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </section>
            </Fragment>
        )
    }
}
export default ContactMe;