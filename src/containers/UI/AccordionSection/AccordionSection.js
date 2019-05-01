import React, { Component } from 'react';
import classes from './AccordionSection.module.css';

class AccordionSection extends Component {
    state = {
        isOpen: false
    }

    toggleAccordion = (event) => {
        event.preventDefault();
        let el = event.currentTarget;
        let panel = el.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            this.setState({isOpen: false});
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            this.setState({isOpen: true});
        }
    }

    render(){
        let style = {
            float: 'right'
        }
        return(
            <li>
                <a href="#accrodion" className={classes.Accordion} onClick={this.toggleAccordion}>
                    {this.props.title} 
                    {this.state.isOpen 
                     ? <i className="fas fa-caret-up" style={style}></i>
                     :<i className="fas fa-caret-down" style={style}></i>
                    }
                </a>
                <ul className={classes.MenuPanel}>
                    {this.props.children}
                </ul>
            </li>
        )
    }

}
  
  export default AccordionSection;