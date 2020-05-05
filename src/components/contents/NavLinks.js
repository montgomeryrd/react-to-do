import React from 'react';

function NavLinks(props) {
    return (
        <div className="navlinks">
            <div className="navImg" style={ props.data.color }>
                <img src={ props.data.imgUrl } alt=""/>
            </div>
            <div className="navInfo">
                <h4>{ props.data.link }</h4>
                <p>{ props.data.count }</p>
            </div>
        </div>
    )
}
export default NavLinks;