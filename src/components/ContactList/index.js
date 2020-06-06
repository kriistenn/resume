import React from 'react'
import shortid from 'shortid'
import Card from './Card'
import style from './contact-item.module.css'

function ContactList() {
    const initialState = {
        contacts: [],
        name: '',
        phone: '',
        addres: ''
    }

    
    const reducer = (state, action) => {
        switch (action.type) {
            case 'CHANGE_NAME':
                return {...state, name: action.payload };
            case 'CHANGE_PHONE':
                return {...state, phone: action.payload };
            case 'CHANGE_ADDRES':
                return {...state, addres: action.payload };
            case 'ADD_NEW_CONTACT':
                return {
                    ...state,
                    name: '',
                    phone: '',
                    addres: '',
                    contacts: [...state.contacts, action.payload] 
                };
            default:
            throw new Error();
        }
    }
    


    const [state, dispatch] = React.useReducer(reducer, initialState)
    const { name, phone, addres, contacts } = state
    
    
    const handleAdd = (e) => {
        e.preventDefault()
        if (!name || !phone || !addres) {
            alert('заполните все поля')
            return
        }
        const newContact = { id: shortid.generate(), name, phone, addres }

        dispatch({ type: 'ADD_NEW_CONTACT', payload: newContact })
    }
    
        return (
        <div className={style.container}>
        <div className={style.page}>
            <form className={style.form}>
            <span className={style['form-title']}>New contact</span>
            <input 
                type="text" 
                placeholder="Имя" 
                value={name}
                onChange={(e) => dispatch({ type: 'CHANGE_NAME', payload: e.target.value })}
            />
            <input 
                type="text" 
                placeholder="Телефон" 
                value={phone}
                onChange={(e) => dispatch({ type: 'CHANGE_PHONE', payload: e.target.value })}
            />
            <input 
                type="text" 
                placeholder="Адрес" 
                value={addres}
                onChange={(e) => dispatch({ type: 'CHANGE_ADDRES', payload: e.target.value })}
            />
           <div className={style.btn}>
           <button className={style.btnAdd} onClick={handleAdd} >
            Добавить
            </button>
           </div>
            </form>
            <div className={style.list}>
                { contacts.map(c => <Card  key={c.id} contact={c}/>) }
            </div>
        </div>
        </div>
    )
}

export default ContactList