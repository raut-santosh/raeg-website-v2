import React, { useState } from 'react'
import ApiService from '../services/ApiService'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const apiService = new ApiService()


function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [userId, setUserId] = useState({});
    const [showOtp, setShowOtp] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await apiService.auth('register', formData)
            if (response.data) {
                setUserId(response.data);
                const sendOtp = await apiService.auth('sendotp', { email: formData.email, userId: response.data })
                if (sendOtp) {
                    Swal.fire({
                        text: 'Otp is sent to your email address',
                        icon: 'info',
                        showConfirmButton: false,
                        timer: 3000,
                    });
                    setShowOtp(true);
                }
            }

        } catch (err) {
            console.log(err);
        }
    }

    const sendOtp = async () => {
        await this.apiService.auth('sendotp', { email: formData.email, userId })
    }

    const verifyOtp = async () => {
        const otpData = await apiService.auth('verifyotp', { otp: Number(formData.otp), userId })
        console.log(otpData)
        if (otpData) {
            Swal.fire({
                text: 'Otp verified',
                icon: 'success',
                showConfirmButton: false,
                timer: 3000,
            })
            navigate('/login')
        }
    }

    return (
        <main className="main--area">
            {/* <!-- breadcrumb-area --> */}
            <section className="breadcrumb-area breadcrumb__hide-img" data-background="assets/img/bg/breadcrumb_bg02.jpg">
                <div className="container">
                    <div className="breadcrumb__wrapper">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb__content">
                                    <h2 className="title">Register</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Register</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumb-area-end --> */}

            {/* <!-- contact-area --> */}
            <section className="contact-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="contact__form-wrap">
                                <form id="contact-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="input-grp">
                                                <input type="text" name="first_name" placeholder="First Name *" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="input-grp">
                                                <input type="text" placeholder="Last Name *" name="last_name" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="input-grp">
                                                <input type="text" placeholder="Location" name="location" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="input-grp">
                                                <input type="text" placeholder="Mobile *" name="mobile" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="input-grp">
                                                <input type="text" placeholder="Email *" name="email" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="input-grp">
                                                <input type="password" placeholder="Password *" name="password" onChange={handleChange} />
                                            </div>
                                        </div>
                                        {showOtp && (
                                            <div className="col-sm-12 col-md-6 col-lg-6">
                                                <div className="input-grp">
                                                    <input type="number" placeholder="Otp *" name="otp" onChange={handleChange} />
                                                </div>
                                            </div>
                                        )}

                                        {showOtp && (
                                            <div className="col-sm-12 col-md-6 col-lg-6">
                                                <button className="resendOtp" type="button" onClick={sendOtp}>Resend Otp</button>
                                            </div>
                                        )}
                                    </div>
                                    {showOtp && (
                                        <button className="submit-btn" type="button" onClick={verifyOtp}>Verify Otp</button>
                                    )}
                                    {!showOtp && (
                                        <button className="submit-btn" type="submit">Register</button>
                                    )}
                                </form>
                                {/* <p className="response-msg"></p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- contact-area-end --> */}
        </main>
    )
}

export default Register