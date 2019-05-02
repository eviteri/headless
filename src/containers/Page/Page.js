import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

import Home from '../../components/Home/Home'

class Page extends Component {
    state = {
        slugname: this.props.slug
    }
 
    static getDerivedStateFromProps(nextProps, prevState) {
        let newSlugname = nextProps.match.params.slugname;
        let oldSlugname = prevState.slugname;

        if(newSlugname !== oldSlugname){
            console.log('Call fetch');
            nextProps.onGetPage(newSlugname);
            nextProps.onToggleMenu(false);
            return ({ slugname:newSlugname }) // <- this is setState equivalent
        }
 
        // Return null to indicate no change to state.
        return null;
    }

    render(){

        let content = (<p>Loadding</p>);

        if(this.props.content){
            switch(this.state.slugname){
                case 'home':
                    content = <Home loading={this.props.loading} content={this.props.content.acf} slug={this.state.slugname}/>
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