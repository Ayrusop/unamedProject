import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-phone-input-2/lib/style.css'; 
import PhoneInput from 'react-phone-input-2';
import emailjs from 'emailjs-com'; // Import EmailJS
import '../Styles/ContactPage.css'; 

const ContactPage = () => {
    const [phone, setPhone] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
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
        if (!phone) validationErrors.phone = 'Phone number is required';
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

    return (
        <div className="contact-page-container">
            <div className="contact-form-container">
                <h2>Contact Us</h2>
                <p className='text-center'>You can reach us at anytime</p>
                <form onSubmit={sendEmail}>
                    <div className="form-row d-flex">
                        <div className="form-group col-md-6">
                            <input 
                                type="text" 
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} 
                                id="firstName" 
                                name="firstName" 
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                        </div>
                        <div className="form-group col-md-6">
                            <input 
                                type="text" 
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} 
                                id="lastName" 
                                name="lastName" 
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                        </div>
                    </div>

                    <div className="form-group">
                        <input 
                            type="email" 
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                            id="email" 
                            name="email" 
                            placeholder="Email" 
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div className="form-group col-md-12">
                        <PhoneInput
                            country={'in'}
                            value={phone}
                            onChange={phone => setPhone(phone)}
                            inputClass={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                            inputProps={{
                                name: 'mobile',
                                required: true,
                                autoFocus: true
                            }}
                        />
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>

                    <div className="form-group">
                        <textarea 
                            className={`form-control ${errors.message ? 'is-invalid' : ''}`} 
                            id="message" 
                            name="message" 
                            rows="4" 
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>

                    <div className="form-group d-flex">
                        <input 
                            type="checkbox" 
                            className={`form-check-input ${errors.termsAccepted ? 'is-invalid' : ''}`} 
                            id="terms" 
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="terms">
                            By contacting us, you agree to our <a href="#terms">Terms of Service</a> & <a href="#privacy">Privacy Policy</a>
                        </label>
                        {errors.termsAccepted && <div className="invalid-feedback d-block">{errors.termsAccepted}</div>}
                    </div>

                    <button type="submit" className="btn btn-submit btn-block mt-2">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
