import React from 'react'

function ContactItem( props ) {
    const {  name, phone } = props.location.state
    return (
        <div>
            <div>{name}</div>
            <div>{phone}</div>
        </div>
    );
}

export default ContactItem;
