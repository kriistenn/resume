import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './card.module.css'


function Card( {contact} ) {
    return (
        <div 
        className={styles.card}
        style={{display: 'block'}}
        to = {{
            pathname: `/portfolio/contact-list/${contact.id}`,
            state: {name: contact.name, phone: contact.phone, addres: contact.addres}
        }}
        key={contact.id}
        >
      <div>     
       <div className={styles.name}> Name:{contact.name}</div>
       <div className={styles.phone}> Phone: {contact.phone}</div>
       <div className={styles.phone}> Addres: {contact.addres}</div>
      </div>
        </div>
    );
}

export default Card;
