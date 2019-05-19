import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './Military.module.css';
import LightBox from '../../containers/UI/LightBox/LightBox';

const Military = (props) => {
    let content = null;

    if (props.content.military) {
        props.onGetImages(props.content);

        content = (
            <Fragment>
                <LightBox showLightBox={props.showLightBox} />
                <section className={classes.Military}>
                    <div className={classes.Diploma}>
                        <img src={props.content.url} alt="" onClick={() => props.onShowLightBox(props.content.url, 0) }/>
                    </div>
                    <div className={classes.Wrapper}>
                        {props.content.military.map((unit, index) => {
                            return (
                                <div key={index}>
                                    <h2>{unit.title}</h2>
                                    <h3>{unit.unit}</h3>
                                    <p>{unit.from} - {unit.to}</p>
                                    <p>MOS: {unit.mos}</p>
                                    <p>Rank: {unit.rank}</p>
                                </div>
                            )
                        })}
                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Military);