import React from 'react';
import './Toolbar.css';
import LogoVLI from '../../assets/logos/vli-logo.png';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import BellIcon from 'react-bell-icon';

const toolbar = props => {
    let openToolbar = '';
    if (props.collapse) {
        openToolbar = ' open';
    }

    return (
    <header className={"toolbar" + openToolbar}>
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><img src={LogoVLI} alt="" /></div>
            <div className="spacer"></div>
            <div className={"toolbar__navigation-items" + openToolbar}>
                <ul>
                    <li>
                        <a href="/">
                            <BellIcon width='30' height='30' active={false} color={'white'}/>
                            <span class="badge">3</span>
                        </a>
                        <a href="/">
                            <span class="fa fa-sign-in" aria-hidden="true"/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>);
};

export default toolbar;