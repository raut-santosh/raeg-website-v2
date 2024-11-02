import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import ApiService from '../services/ApiService';
import { useUser } from '../contexts/UserContext';

const apiService = new ApiService();

function Login() {
    const { currentUser, setCurrentUser } = useUser();
    const navigate = useNavigate();

    // useEffect(() => {

    // }, []);

    const [model, setModel] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setModel((prevModel) => ({
            ...prevModel,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiService.auth('login', model)
            if (response.access_token) {
                localStorage.setItem('currentUser', JSON.stringify({session:response}))
                const user = await apiService.get('/users/me')
                setCurrentUser({ ...user.data, session: response });
            }
            navigate('/')
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    return (
        <main className="main--area">

            {/* <!-- breadcrumb-area --> */}
            <section className="breadcrumb-area breadcrumb__hide-img" data-background="assets/img/bg/breadcrumb_bg02.jpg">
                <div className="container">
                    <div className="breadcrumb__wrapper">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb__content">
                                    <h2 className="title">LogIn</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">LogIn</li>
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
                                        <div className="col-sm-6 col-md-12 col-lg-12">
                                            <div className="input-grp">
                                                <input type="text" placeholder="Email *" name="email" value={model.email} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-12 col-lg-12">
                                            <div className="input-grp">
                                                <input type="password" placeholder="Password *" name="password" value={model.password} onChange={handleChange} required />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="submit-btn" type='submit'>Login</button>
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

export default Login