import React from 'react'
import ApiService from '../services/ApiService'
import { Link } from 'react-router-dom';

const apiService = new ApiService()

function Register() {
    const [formData, setFormData] = React.useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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
                                <form id="contact-form">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="input-grp">
                                                <input type="text" placeholder="First Name *" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="input-grp">
                                                <input type="text" placeholder="Last Name *" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="input-grp">
                                                <input type="text" placeholder="Location" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="input-grp">
                                                <input type="text" placeholder="Mobile *" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="input-grp">
                                                <input type="text" placeholder="Email *" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="input-grp">
                                                <input type="password" placeholder="Password *" required />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="submit-btn">Register</button>
                                </form>
                                <p className="ajax-response"></p>
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