import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import emailjs from 'emailjs-com'; // Import EmailJS
import '../Styles/ContactPage.css';
import { Link } from "react-router-dom";
import MetaData from '../MetaData';

const ContactPage = () => {
    const [phone, setPhone] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        phone: '',
        // termsAccepted: false
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let validationErrors = {};
        if (!formData.firstName) validationErrors.firstName = 'First Name is required';
        if (!formData.lastName) validationErrors.lastName = 'Last Name is required';
        if (!formData.email) validationErrors.email = 'Email is required';
        if (!formData.message) validationErrors.message = 'Message is required';
        // if (!formData.termsAccepted) validationErrors.termsAccepted = 'You must accept the terms';
        if (!phone && !formData.phone) validationErrors.phone = 'Phone number is required';
        return validationErrors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            const emailData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: phone,
                message: formData.message,
            };

            emailjs
                .send(
                    'service_062p7zk', // Replace with your service ID
                    'template_ylbfum8', // Replace with your template ID
                    emailData,
                    'lo7NpcAZRXrxyPDyE' // Replace with your user ID
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        alert('Message sent successfully!');
                        setFormData({
                            firstName: '',
                            lastName: '',
                            email: '',
                            message: '',
                            phone: '',
                            termsAccepted: false,
                        });
                        setPhone('');
                    },
                    (error) => {
                        console.log(error.text);
                        alert('Failed to send message. Try again.');
                    }
                );
        } else {
            setErrors(validationErrors);
        }
    };

    const handlePhoneChange = (value) => {
        setPhone(value);
        setFormData({ ...formData, phone: value });
    };

    const handleCheckboxChange = (e) => {
        setFormData({ ...formData, privacy: e.target.checked });
    };

    return (
        <Fragment>
            <MetaData title={"Contact | SVARG | Smart way to Build and Design your dream Home"} />
            <div className='contact-page-container'>
                <form className="contact-form col-lg-6 contact-form-container" onSubmit={sendEmail}>
                    <div className='text-center'>
                        <h1 className='' style={{ fontSize: '3rem' }}>Get In Touch</h1>
                        <span className='' style={{ fontSize: '1rem' }}>
                            You can reach us at anytime
                        </span>
                    </div>
                    <div className="form-row row mt-3">
                        <div className="form-group col-lg-6">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            {errors.firstName && <div className="invalid-feedback d-block">{errors.firstName}</div>}
                        </div>
                        <div className="form-group col-lg-6">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                            {errors.lastName && <div className="invalid-feedback d-block">{errors.lastName}</div>}
                        </div>
                    </div>
                    <div className="form-row row">
                        <div className="form-group col-lg-12">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                        </div>
                    </div>
                    <div className="form-row row">
                        <div className="form-group col-lg-12 phone-input-group">
                            <PhoneInput
                                country={'in'}
                                value={phone}
                                onChange={handlePhoneChange}
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    placeholder: 'Phone Number',
                                }}
                            />
                            {errors.phone && <div className="invalid-feedback d-block">{errors.phone}</div>}
                        </div>
                    </div>
                    <div className="form-row row">
                        <div className="form-group col-lg-12">
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={{ resize: "none" }}
                            ></textarea>
                            {errors.message && <div className="invalid-feedback d-block">{errors.message}</div>}
                        </div>
                    </div>
                    <div className="form-row row full-width">
                        {/* <input
                            type="checkbox"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                        /> */}
                        <label className="form-check-label text-center" htmlFor="terms">
                            By contacting us, you agree to our <b>Terms of Service</b> & <b>Privacy Policy</b>
                        </label>
                        {/* {errors.termsAccepted && <div className="invalid-feedback d-block">{errors.termsAccepted}</div>} */}
                    </div>
                    <button type="submit" className="btn btn-submit btn-block mt-2">Submit</button>
                </form>
            </div>
        </Fragment>
    );
};

export default ContactPage;
