import React, { useEffect, useRef } from 'react';
import './Header.scss';

function ContentsHeader(props) {
    const _background = useRef();
    // // background 고정 방법 고민
    // const _bindScrollEvent = () => {
    //     let originPosY;
    //     document.addEventListener('scroll', () => {
    //         const yOffset = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            
    //         if (originPosY === undefined) {
    //             originPosY = parseInt(_background.current.style.backgroundPositionY, 10)
    //         }
            
    //         _background.current.style.backgroundPositionY = originPosY + (yOffset < 0 ? 0 : yOffset) + "px";
    //     });
    // }

    // useEffect(() => {
    //     _bindScrollEvent();
    // }, [])

    return (
        <div className="contents_header">
            <div className="background_container">
                <div className="background" ref={_background} style={{'background': `url(${props.imgSrc}) center -110px / cover no-repeat`}}>
                    <div className="background_left"></div>
                    <div className="background_right"></div>
                </div>
                <div className="poster_container">
                    <div className="poster">
                        <img src={ props.poster }/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentsHeader;