import React from 'react';

const Header = (props) => {
    let {title} = props;

    return (
        <div>
            <h1 style={{fontWeight: "350", color: "whitesmoke", borderBottom: "2px solid white"}}>{title}</h1>
        </div>
    );
};

export default Header;