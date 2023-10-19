import React from 'react';

const ButtonBox = props => {
    return (
        <div className="button-box">
            {props.children}
            
        </div>
    );
};

export default ButtonBox;