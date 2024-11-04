import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ApiService from '../services/ApiService';
import { useUser } from '../contexts/UserContext';

const apiService = new ApiService();

function Login() {
    const [passwordType, setPasswordType] = useState("password");
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
            if (response.data.access_token) {
                localStorage.setItem('currentUser', JSON.stringify({ session: response.data }))
                const user = await apiService.get('/users/me')
                setCurrentUser({ ...user.data, session: response.data });
                navigate('/')
            }
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    const hideShowPassword = (event) => {
        setPasswordType(event.target.checked ? "text" : "password");
    };

    return (
        <main className="main--area">

            <section className="breadcrumb-area" data-background="assets/img/bg/breadcrumb_bg01.jpg">
                <div className="container">
                    <div className="breadcrumb__wrapper">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 d-flex justify-content-center">
                                <div className="breadcrumb__content">
                                    <h2 className="title">Login</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Sign In</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="signup__area team-bg section-pt-120 section-pb-120" data-background="assets/img/bg/team_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="singUp-wrap">
                                <h2 className="title">Welcome back!</h2>
                                <p>Login by Google will available soon for now login with email.</p>
                                <div className="account__social">
                                    <a href="#" className="account__social-btn">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20.16 12.1932C20.16 11.5905 20.1059 11.011 20.0055 10.4546H12V13.7425H16.5746C16.3775 14.8051 15.7786 15.7053 14.8784 16.308V18.4407H17.6255C19.2327 16.961 20.16 14.7819 20.16 12.1932Z" fill="#4285F4" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.0002 20.5C14.2952 20.5 16.2193 19.7389 17.6257 18.4407L14.8786 16.3079C14.1175 16.8179 13.1439 17.1193 12.0002 17.1193C9.78635 17.1193 7.91248 15.6241 7.24407 13.615H4.4043V15.8173C5.80294 18.5952 8.67749 20.5 12.0002 20.5Z" fill="#34A853" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.24387 13.6151C7.07387 13.1051 6.97728 12.5604 6.97728 12.0001C6.97728 11.4399 7.07387 10.8951 7.24387 10.3851V8.18286H4.40409C3.82841 9.33036 3.5 10.6285 3.5 12.0001C3.5 13.3717 3.82841 14.6699 4.40409 15.8174L7.24387 13.6151Z" fill="#FBBC05" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.0002 6.88069C13.2482 6.88069 14.3686 7.30955 15.2495 8.15183L17.6875 5.71387C16.2155 4.34227 14.2914 3.5 12.0002 3.5C8.67748 3.5 5.80294 5.40478 4.4043 8.18273L7.24407 10.385C7.91248 8.37592 9.78635 6.88069 12.0002 6.88069Z" fill="#EA4335" />
                                        </svg>
                                        Continue with google
                                    </a>
                                </div>
                                <div className="account__divider">
                                    <span>OR</span>
                                </div>
                                <form className="account__form" onSubmit={handleSubmit}>
                                    <div className="form-grp">
                                        <label htmlFor="email">Email</label>
                                        <input id="email" type="text" placeholder="email" name='email' onChange={handleChange} />
                                    </div>
                                    <div className="form-grp">
                                        <label htmlFor="password">Password</label>
                                        <input id="password" type={passwordType} placeholder="password" name='password' onChange={handleChange} />
                                    </div>
                                    <div className="account__check">
                                        <div className="account__check-remember">
                                            <input type="checkbox" className="form-check-input" value="" id="terms-check" onChange={hideShowPassword} />
                                            <label htmlFor="terms-check" className="form-check-label">Show Password</label>
                                        </div>
                                        <div className="account__check-forgot">
                                            <Link to="/reset-password">Forgot Password?</Link>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-two arrow-btn">Login</button>
                                </form>
                                <div className="account__switch">
                                    <p>Don't have an account?<Link to="/register">Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Login