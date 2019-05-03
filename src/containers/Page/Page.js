import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

import Home from '../../components/Home/Home';
import Education from '../../components/Education/Education';
import Certifications from '../../components/Certifications/Certifications';
import Military from '../../components/Military/Military';
import Leadership from '../../components/Leadership/Leadership';
import HonorsAwards from '../../components/HonorsAwards/HonorsAwards';
import Diplomas from '../../components/Diplomas/Diplomas';
import Spinner from '../../components/UI/Spinner/Spinner';

class Page extends Component {
    state = {
        slugname: this.props.slug
    }
 
    static getDerivedStateFromProps(nextProps, prevState) {
        let newSlugname = nextProps.match.params.slugname;
        let oldSlugname = prevState.slugname;

        if(newSlugname !== oldSlugname){
            nextProps.onGetPage(newSlugname);
            nextProps.onToggleMenu(false);
            return ({ slugname:newSlugname }) // <- this is setState equivalent
        }
 
        // Return null to indicate no change to state.
        return null;
    }

    render(){

        let content = null;

        if(this.props.loading){
            content = <Spinner />;
        }

        if(this.props.error){
            this.props.history.push('/');
        }
    
        if (this.props.content){  
            switch(this.state.slugname){
                case 'home':
                    content = <Home content={this.props.content.acf} />
                    break;
                case 'education':
                    content = <Education content={this.props.content.acf} />
                    break;
                case 'certifications':
                    content = <Certifications content={this.props.content.acf} />
                    break;
                case 'military-experience':
                    content = <Military content={this.props.content.acf} />
                    break;
                case 'leadership-experience':
                    content = <Leadership content={this.props.content.acf} />
                    break;
                case 'awards-honors':
                    content = <HonorsAwards content={this.props.content.acf} />
                    break;
                case 'diplomas':
                    content = <Diplomas content={this.props.content.acf} />
                    break;
                default: 
                    content = (
                        <p>Couldnt load page....</p>
                    )
            }
        }

        return content;

    }
}

const mapStateToProps = state => {
    return {
        slug: state.page.slug,
        content: state.page.content,
        loading: state.page.loading,
        error: state.page.error,
        isMenuOpen: state.menu.isOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetPage: (slugname) => dispatch(actions.getPage(slugname)),
        onToggleMenu: (open) => dispatch(actions.toggleMenu(open))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Page);