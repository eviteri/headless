import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import './LightBox.css';

const LightBox = props => {

    const lightboxDiv = useRef(null);

    useEffect(() => {
        return () => props.onResetLightBox();
    }, []);

    const closeLightBox = (event) => {
        if(event.target === lightboxDiv.current){
            props.onCloseLightBox();
        }
    }

    const nextLightBoxImage = () => {
        if(props.currentIndex < props.images.length -1){
            let nextIndex = props.currentIndex + 1
            let nextImage = props.images[nextIndex].url;
            props.onNextLightBox(nextImage, nextIndex)
        }
    }

    const prevLigthBoxImage =() =>{
        if(props.currentIndex > 0){
            let nextIndex = props.currentIndex - 1
            let nextImage = props.images[nextIndex].url;
            props.onPrevLightBox(nextImage, nextIndex)
        }
    }

    const css = ['LightBox']
    if(props.showLightBox){
        css.push('Open');
    }

    return (
        <div ref={lightboxDiv} className={css.join(" ")} onClick={closeLightBox}>
            <div className="LightBoxContainer" > 
                <div className="LightBoxWrapper">
                    { props.currentImage ? <img className="LightBoxImage" src={props.currentImage} alt="" /> : null}
                </div>
                <div> 
                    {props.currentIndex < props.images.length - 1 
                        ? <span className="arrow next" onClick={nextLightBoxImage}><i className="fas fa-chevron-circle-right"></i></span> 
                        : null
                    }
                    {props.currentIndex > 0 
                        ? <span className="arrow left" onClick={prevLigthBoxImage}><i className="fas fa-chevron-circle-left"></i></span> 
                        : null
                    }
                </div>
            </div>
        </div>
    );

} 

const mapStateToProps = state => {
    return {
        images: state.lightbox.images,
        currentImage: state.lightbox.currentImage,
        currentIndex: state.lightbox.currentIndex,
        showLightBox: state.lightbox.showLightBox,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onResetLightBox: () => dispatch(actions.resetLightBoxImages()),
        onCloseLightBox: () => dispatch(actions.closeLightBox()),
        onNextLightBox: (image, index) => dispatch(actions.nextLightBoxImage(image, index)),
        onPrevLightBox: (image, index) => dispatch(actions.previousLightBoxImage(image, index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LightBox);