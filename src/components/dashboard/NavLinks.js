/* eslint-disable react/prop-types */
import React from 'react';
import '../../styles/nav.css';

function NavLinks(props) {
    return (
        <div className="navlinks">
            <div className="navImg" style={ props.data.bgcolor }>
                <img src={ props.data.imgUrl } alt=""/>
            </div>
        </div>
    )
}
export default NavLinks;

// consider validating props to learn more