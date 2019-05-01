import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Page extends Component {
    state = {
        slugname: 'home'
    }

    componentDidMount(){
        if(this.props.match.params.slugname){
            this.setState({slugname: this.props.match.params.slugname})
        }
        this.props.onGetPage(this.state.slugname);
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        let newSlugname = nextProps.match.params.slugname;
        if(newSlugname){
            if(newSlugname !== prevState.slugname){
                console.log('OLD: ' + prevState.slugname);
                console.log('New: ' + newSlugname);
                nextProps.onGetPage(newSlugname)

                return ({ slugname:newSlugname }) // <- this is setState equivalent
            }
        }
        
        // Return null to indicate no change to state.
        return null;
    }

   
    render(){
        let content = (<p>Loadding</p>);

        if(this.props.content){
            switch(this.state.slugname){
                case 'home':
                    content = (
                        <div>
                            <h1>{this.props.content.acf.title}</h1>
                        </div>
                    )
                    break;
                default: 
                    content = (
                        <p>Couldnt load page....</p>
                    )
            }

            console.log(this.state.slugname);
        }

        return content;
    }
}

const mapStateToProps = state => {
    return {
        content: state.page.content,
        loading: state.page.loading,
        error: state.page.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetPage: (slugname) => dispatch(actions.getPage(slugname))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Page);