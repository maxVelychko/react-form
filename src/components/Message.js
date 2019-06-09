import React from 'react';

const Message = (props) => {
    return (
        <div>
            <h3 className="text-center message">{props.text}</h3>
        </div>
    )
}

export default Message;
