import React, { useContext, useState, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import { UPDATE_CONTACT } from '../../context/types';

const ContactForm = () => {

    const contactContext = useContext(ContactContext); 

    //d-structuring
    const { addContact, updateContact , clearCurrent ,current } = contactContext;

    useEffect(() => {
        if(current !== null)
        {
            setContact(current);
        }
        else
        {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            });
        }
    }, [contactContext, current]);

    const[contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    //D-structuring
    const { name, email, phone, type } = contact;

    //onChange method
    const onChange = e => setContact({...contact, [e.target.name]: e.target.value });

    //onSubmit method
    const onSubmit = e => {
        e.preventDefault();
        if(current === null)
        {
            addContact(contact);
        }
        else
        {
            updateContact(contact);
        }
        clearAll();
        // setContact({
        //     name: '',
        //     email: '',
        //     phone: '',
        //     type: 'personal'
        // });
    };

    const clearAll = () => {
        clearCurrent();
    };  

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ? 'Edit Contact' : 'Add Contact'}</h2>
            <input type="text" placeholder="Name" name="name" value={name} onChange={onChange}/>
            <input type="email" placeholder="Email" name="email" value={email} onChange={onChange}/>
            <input type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange}/>
            <h5>Contact Type</h5>
            <input type="radio" name="type" value="personal" onChange={onChange} checked={type === 'personal'} /> Personal{ ' ' }
            <input type="radio" name="type" value="professional" onChange={onChange} checked={type === 'professional'} /> Professional
            <div>
                <input type="submit" value={current ? 'Update Contact' : 'Add Contact'} className="btn btn-primary btn-block" />
            </div>
            {current && <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
            </div>}
        </form>
    )
}

export default ContactForm;
