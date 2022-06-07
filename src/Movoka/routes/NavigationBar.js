import React, { useEffect, useRef } from 'react';
import Navigation from '../components/ui/Navigation';
import './NavigationBar.scss';

function TopMenu(props) {
    const _topMenu = useRef();
    const _bindScrollEvent = function () {
        document.addEventListener('scroll', (event) => {
            const yOffset = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            (yOffset >= 10)
                ? _topMenu.current.classList.add('on_scroll')
                : _topMenu.current.classList.remove('on_scroll');
        });
    }

    useEffect(() => {
        _bindScrollEvent();
    }, [])

    return (
        <div className="gnb_container" ref={_topMenu}>
            <Navigation/>
        </div>
    );
}

export default TopMenu;