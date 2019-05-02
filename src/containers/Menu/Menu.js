import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import { getSlug } from '../utilities';

import classes from './Menu.module.css';
import Accordion from '../UI/AccordionSection/AccordionSection';
import Profile from '../../components/Profile/Profile';

class Menu extends Component {

    componentDidMount(){
        this.props.onGetMenu();
    }

    buildMenu = (items) => {
        return (
            <nav className={classes.MainNav}>
                <ul>
                    {items.map( (item, index)=>{
                        let li = null;
                        if(item.children){
                            li = (
                                <Accordion key={index} title={item.title}>
                                    {this.buildMenu(item.children)}
                                </Accordion>
                            )
                        }else{
                            if(item.object === "custom"){
                                li = (
                                    <li key={index}>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: item.title }} />
                                    </li>
                                )
                            }else{
                                let url = getSlug(item.url);
                                li = (
                                    <li key={index}>
                                        <NavLink to={url} exact activeClassName={classes.Active} >
                                            {item.title}
                                            <span className={classes.Icon}>
                                                <i className={'fas ' + item.icon}></i>
                                            </span>
                                        </NavLink>
                                    </li>
                                )
                            }
                        }
                        return li
                    })}
                </ul>
            </nav>
        )
    
    }

    render(){
        let content = null;
        
        //if(this.props.loading){
            //content = (<p>Loading.....</p>)
        //}

        if(this.props.items){
            content = (
                <Fragment>
                    <Profile />
                    {this.buildMenu(this.props.items)}
                </Fragment>
                    
            )
        }

        return content
    }
}

const mapStateToProps = state => {
    return {
        items: state.menu.items,
        loading: state.menu.loading,
        error: state.menu.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetMenu: () => dispatch(actions.getMenu())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);