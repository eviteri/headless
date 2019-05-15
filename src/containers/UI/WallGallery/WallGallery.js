import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from './WallGallery.module.css';
import LightBox from '../LightBox/LightBox';

class WallGallery extends Component {

    componentDidMount(){
        this.props.onGetImages(this.props.content.diplomas);
    }

    render(){
        let content = null;

        const css = ['LightBox'];
        if(this.props.showLightBox){
            css.push('Open');
        }

        if (this.props.content.diplomas) {
            content = (
                <Fragment>
                    {this.props.showLightBox 
                        ? <LightBox showLightBox={this.props.showLightBox}  />
                        : null
                    }
                    
                    
                    <section className={classes.Photos}>
                        {this.props.content.diplomas.map((photo, index) => {
                            return (
                                <img 
                                    key={index} 
                                    src={photo.url}  
                                    alt={ ("photo-" + index) }
                                    onClick={() => this.props.onShowLightBox(photo.url, index) }/>
                            )
                        })}
                    </section>
                </Fragment>
            )
        }

        return content;
    }

}

const mapStateToProps = state => {
    return {
        images: state.lightbox.images,
        showLightBox: state.lightbox.showLightBox
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetImages: (images) => dispatch(actions.setLightBoxImages(images)),
        onShowLightBox: (image, index) => dispatch(actions.showLightBox(image,index))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(WallGallery);