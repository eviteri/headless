import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './Education.module.css';
import LightBox from '../../containers/UI/LightBox/LightBox';

const Education = (props) => {
    let content = null;

    if(props.content.education){
        props.onGetImages(props.content.education);

        content = (
            <Fragment>
                <LightBox showLightBox={props.showLightBox} />
                <section className={classes.Education}>
                {props.content.education.map( (education, index) => {
                    return (
                        <div key={index}>
                                <h2>{education.college}</h2>
                                <h3>{education.title}</h3>
                                <p>{education.minor}</p>
                                <p>{education.graduated}</p>
                                <img src={education.url} alt="" onClick={() => props.onShowLightBox(education.url, index) }/>
                        </div>
                    )
                })}
                </section>
            </Fragment>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Education);