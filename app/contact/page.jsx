'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import countriesData from 'world-countries';

function MyForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    clearErrors
  } = useForm();

  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://formspree.io/f/xovlelyl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
         console.log("Submitted Form Data:", data);
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    }
  };

  useEffect(() => {
    if (submitStatus) {
      const timeout = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timeout);
    }
  }, [submitStatus]);

  const countries = countriesData.map(c => ({ name: c.name.common, code: c.cca2 }));

  const renderError = (fieldName) => {
    const fieldError = errors[fieldName];
    if (!fieldError) return null;

    return (
      <div className="relative mt-1 bg-red-100 border-l-4 border-red-600 text-red-700 p-2 pl-3 pr-8 rounded shadow-md">
        <span>{fieldError.message}</span>
        <button
          type="button"
          onClick={() => clearErrors(fieldName)}
          className="absolute top-1 right-2 text-red-700 font-bold hover:text-red-900"
        >
          ×
        </button>
      </div>
    );
  };

  return (
    <>
      <section className='container mx-auto py-4 contact-form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
          <p className='mb-6'>We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.</p>

          <div className="form-fields-e">
            {/* Name */}
            <div className="name-inpt cmm">
              <input
                type="text"
                placeholder="Your Name"
                {...register('name', {
                  required: 'Name is required',
                  minLength: { value: 3, message: 'Minimum 3 characters' }
                })}
              />
              {renderError('name')}
            </div>

            {/* Email */}
            <div className="eml cmm ml-3">
              <input
                className='email-input'
                type="email"
                placeholder="Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Enter a valid email',
                  },
                })}
              />
              {renderError('email')}
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
              {renderError('phone')}
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
              {renderError('subject')}
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
              {renderError('inquiryType')}
            </div>

            {/* Country Dropdown */}
            <div className="mt-4 fdfdf ml-3">
              <select
                id="country"
                {...register('country', { required: 'Country is required' })}
                className="w-full border border-gray-300 p-2 rounded "
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              {renderError('country')}
            </div>

            {/* Message */}
            <div className="message-box mt-4">
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
              {renderError('message')}
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
              {renderError('terms')}
            </div>
          </div>

          <button className='mt-4 submit' type="submit">Submit</button>

          {/* Status message */}
          <div className="mt-4">
            {submitStatus === 'success' && (
              <p className="text-green-600 font-semibold">✅ Your message was sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 font-semibold">❌ Something went wrong. Please try again later.</p>
            )}
          </div>
        </form>
      </section>
    </>
  );
}

export default MyForm;
