import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './Certifications.module.css';
import LightBox from '../../containers/UI/LightBox/LightBox';

const Certifications = (props) => {
    let content = null;

    if(props.content.certifications){
        content = (
            <section className={classes.Certification}>
               {props.content.certifications.map( (certification, index) => {
                   return (
                       <div key={index}>
                            <h2>{certification.title}</h2>
                            <p>Issue: {certification.issue}</p>
                            { certification.expire ? <p>Expire: {certification.expire}</p>: null}
                            { certification.url ? <img src={certification.url} alt="" /> : null }
                       </div>
                   )
               })}
            </section>
        )

        console.log(props.content.certifications);
        
        
    }

    
    return content;
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

export default connect(mapStateToProps, mapDispatchToProps)(Certifications);