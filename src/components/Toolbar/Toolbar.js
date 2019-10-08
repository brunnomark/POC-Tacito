import React from 'react';
import './Toolbar.css';
import LogoVLI from '../../assets/logos/vli-logo.png';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => {
    let toolbarClasses = 'toolbar';
    if (props.collapse) {
        toolbarClasses = 'toolbar open';
    }

    return (
    <header className={toolbarClasses}>
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><img src={LogoVLI} alt="" /></div>
            <div className="spacer"></div>
            <div className="toolbar__navigation-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
        </nav>
    </header>);
};

export default toolbar;