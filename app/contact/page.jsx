'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

function MyForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };

    return (
        <>
            <section className='container mx-auto py-12 contact-form'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-3xl font-bold mb-6'>Contact Us </h2>
                    <p className='mb-6'>We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.</p>

                    <input type="text" placeholder="Your Name" {...register('name', { required: 'Name is required', minLength: { value: 3, message: 'Minimum 3 characters' } })} />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}


                    <input type="email" placeholder="Email" {...register('email', { required: 'Email is required' })} />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    );
}

export default MyForm;
