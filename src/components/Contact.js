// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({data}) => {
    return (
        <div className='wrapper'>
            <div className='row'>
                <div className='col-4'>
                    <img src={data.photo} alt={data.name} className="photo" />
                </div>
                <div className='col-6'>
                    <h3 className='name'>{data.name}</h3>
                    <h3 className='email'>{data.email}</h3>
                    <h3 className='phone'>{data.phone}</h3>
                </div>
            </div>
        </div>
    );
}

export default Contact;