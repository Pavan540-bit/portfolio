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
            <section className='container mx-auto py-4 contact-form'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-3xl font-bold mb-4'>Contact Us </h2>
                    <p className='mb-6'>We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.</p>

                    <div className="form-fields-e">
                        {/* Name */}

                        <div className="name-inpt cmm">
                            <input type="text" placeholder="Your Name" {...register('name', { required: 'Name is required', minLength: { value: 3, message: 'Minimum 3 characters' } })} />
                            {errors.name && <p className='error-p' style={{ color: 'red' }}>{errors.name.message}</p>}

                        </div>

                        {/* Email */}
                        <div className="eml cmm">
                            <input className='ml-3 email-input' type="email" placeholder="Email" {...register('email', {
                                required: 'Email is required', pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Enter a valid email',
                                },
                            })} />
                            {errors.email && <p className='error-p ml-3' style={{ color: 'red' }}>{errors.email.message}</p>}

                        </div>


                        {/* Phone */}
                        <div className="phone-inpt mt-4 cmm">
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                {...register('phone', {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Enter a valid 10-digit phone number',
                                    }
                                })}
                            />
                            {errors.phone && <p className='error-p' style={{ color: 'red' }}>{errors.phone.message}</p>}
                        </div>

                        {/* Subject */}
                        <div className="subject-inpt mt-4 ml-3 cmm">
                            <input
                                type="text"
                                placeholder="Subject"
                                {...register('subject', {
                                    required: 'Subject is required',
                                })}
                            />
                            {errors.subject && <p className='error-p ml-3' style={{ color: 'red' }}>{errors.subject.message}</p>}
                        </div>

                        {/* Inquiry Type (Dropdown) */}
                        <div className="inquiry-type mt-4">
                            <select {...register('inquiryType', { required: 'Please select an inquiry type' })}>
                                <option value="">Select Inquiry Type</option>
                                <option value="general">General</option>
                                <option value="support">Support</option>
                                <option value="sales">Sales</option>
                                <option value="feedback">Feedback</option>
                            </select>
                            {errors.inquiryType && <p className='error-p' style={{ color: 'red' }}>{errors.inquiryType.message}</p>}
                        </div>

                        {/* Message */}
                        <div className="message-box mt-4 ">
                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                {...register('message', {
                                    required: 'Message is required',
                                    minLength: {
                                        value: 10,
                                        message: 'Message should be at least 10 characters',
                                    }
                                })}
                            ></textarea>
                            {errors.message && <p className='error-p ' style={{ color: 'red' }}>{errors.message.message}</p>}
                        </div>

                        {/* Terms Agreement */}
                        <div className="terms-check mt-4">
                            <label>
                                <input
                                    type="checkbox"
                                    {...register('terms', { required: 'You must agree to the terms' })}
                                />{' '}
                                I agree to the terms and conditions
                            </label>
                            {errors.terms && <p className='error-p' style={{ color: 'red' }}>{errors.terms.message}</p>}
                        </div>

                    </div>
                    <button className='mt-4' type="submit">Submit</button>
                </form>
            </section>
        </>
    );
}

export default MyForm;
