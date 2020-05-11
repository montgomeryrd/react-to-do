/* eslint-disable react/prop-types */
import React from 'react';
import '../../styles/nav.css';

function NavigationLinks(props) {
    return (
        <div className="navigation-image" onClick={() => {props.toggle(props.data.page)}} style={props.data.bgcolor}>
            <img src={props.data.imgUrl} alt=""/>
        </div>
    )
}
export default NavigationLinks;