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

        return(
            <section className={classes.Layout}>
                <header className={menuClasses.join(" ")}>
                    <div className={classes.Profile}>
                        <img src="http://api.eviteri.com/wp-content/uploads/2019/05/eloyPicture.jpg" alt="Profile Image"/>
                        <h1>Eloy Viteri</h1>
                        <p>Software Engineer</p>
                    </div>
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
        isOpen: state.menu.isOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleMenu: (open) => dispatch(actions.toggleMenu(open))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);