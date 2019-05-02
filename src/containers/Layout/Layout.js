import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Menu from '../Menu/Menu';
import MobileBar from '../../components/MobileBar/MobileBar';

import classes from './Layout.module.css';

class Layout extends Component {

    toggleMobileMenu = () => {
        this.props.onToggleMenu(!this.props.isOpen);
    }

    render(){
        let menuClasses = [
            classes.LeftSection, 
            this.props.isOpen ? classes.Open : '' 
        ];

        let content = null;
        if(this.props.isMenuLoading === false){
            console.log(this.props);
        
        }
        

        return(
            <section className={classes.Layout}>
                <header className={menuClasses.join(" ")}>
                    <Menu />
                </header>
                <main className={classes.RightSection}>
                    <MobileBar clicked={this.toggleMobileMenu} open={this.props.isOpen}/>
                    <section className={classes.SiteContent}>
                        {this.props.children}
                    </section>
                </main>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        isOpen: state.menu.isOpen,
        isMenuLoading: state.menu.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleMenu: (open) => dispatch(actions.toggleMenu(open))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);