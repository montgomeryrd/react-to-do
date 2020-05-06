/* eslint-disable react/prop-types */
import React from 'react';

function NavLinks(props) {

    return (
        <div className="navlinks">
            <div className="navImg" style={ props.data.bgcolor }>
                <img src={ props.data.imgUrl } onClick={ props.handleView } alt=""/>
            </div>
            <div className="navInfo">
                <h4>{ props.data.link }</h4>
            </div>
        </div>
    )
}
export default NavLinks;

// consider validating props to learn more