import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import emailjs from 'emailjs-com'; // Import EmailJS
import '../Styles/ContactPage.css';
import { Link } from "react-router-dom";


const ContactPage = () => {
    const [phone, setPhone] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        phone: '',
        termsAccepted: false
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let validationErrors = {};
        if (!formData.firstName) validationErrors.firstName = 'First Name is required';
        if (!formData.lastName) validationErrors.lastName = 'Last Name is required';
        if (!formData.email) validationErrors.email = 'Email is required';
        if (!formData.message) validationErrors.message = 'Message is required';
        if (!formData.termsAccepted) validationErrors.termsAccepted = 'You must accept the terms';
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
            emailjs.sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id')
                .then((result) => {
                    console.log(result.text);
                    alert('Message sent successfully!');
                }, (error) => {
                    console.log(error.text);
                    alert('Failed to send message. Try again.');
                });
        } else {
            setErrors(validationErrors);
        }
    };
    const handlePhoneChange = (phone) => {
        setFormData({ ...formData, phone });
    };
    const handleCheckboxChange = (e) => {
        setFormData({ ...formData, privacy: e.target.checked });
    };

    const handleSubmit = (e) => {
        e.preventDefault();



        emailjs
            .sendForm('service_lyfqebm', 'template_izyyodh', e.target, '7LZ7Pyk8u84wlH4qs')
            .then(
                () => {


                },
                () => {
                    console.log('Failed to submit the form. Please try again.');
                }
            );
    };
    return (
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
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
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
                </div>

            </div>
            <div className="form-row row">
                <div className="form-group col-lg-12 phone-input-group">
                    <PhoneInput
                        country={'in'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputProps={{
                            name: 'phone',
                            required: true,
                            placeholder: 'Phone Number',
                        }}
                    />
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
                </div>
            </div>
            
            <div className="form-row row full-width">
            <label className="form-check-label text-center" htmlFor="terms">
                            By contacting us, you agree to our <b >Terms of Service</b> & <b >Privacy Policy</b>
                        </label>
                        {errors.termsAccepted && <div className="invalid-feedback d-block">{errors.termsAccepted}</div>}
 
            </div>

            <button type="submit" className="btn btn-submit btn-block mt-2">Submit</button>




        </form>
        </div>
        
    );
};

export default ContactPage;
