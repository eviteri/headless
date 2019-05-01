import React, {Component} from 'react';
import Menu from '../Menu/Menu';
import MobileBar from '../../components/MobileBar/MobileBar';

import classes from './Layout.module.css';

class Layout extends Component {
    state ={
        mobileMenuOpen: false
    }

    toggleMobileMenu = () => {
        console.log('here');
        this.setState((prevState) => {
            return {mobileMenuOpen: !prevState.mobileMenuOpen}
        });
    }

    render(){
        let menuClasses = [
            classes.LeftSection, 
            this.state.mobileMenuOpen ? classes.Open : '' 
        ];

        return(
            <section className={classes.Layout}>
                <header className={menuClasses.join(" ")}>
                    <Menu />
                </header>
                <main className={classes.RightSection}>
                    <MobileBar clicked={this.toggleMobileMenu} open={this.state.mobileMenuOpen}/>
                    <section className={classes.SiteContent}>
                        {this.props.children}
                    </section>
                </main>
            </section>
        )
    }
}
export default Layout;