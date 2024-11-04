import React, { useEffect, useState } from 'react'
import ApiService from '../services/ApiService';
import { useLoader } from '../contexts/LoaderContext';

const apiService = new ApiService();
const apiUrl = process.env.apiUrl

function Profile() {
    const { showLoader, hideLoader } = useLoader();
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                showLoader()
                const response = await apiService.get('/users/me')
                setUser(response.data)
            } catch (err) {
                console.log(err)
            } finally {
                hideLoader()
            }
        }
        fetchData();
    }, []);
    return (
        <main className="main--area">

            <section className="breadcrumb-area" data-background="assets/img/bg/breadcrumb_bg01.jpg">
                <div className="container">
                    <div className="breadcrumb__wrapper">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7">
                                <div className="breadcrumb__content">
                                    <h2 className="title">{user.first_name + ' ' + user.last_name}</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Profile</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5 position-relative d-none d-lg-block">
                                <div className="breadcrumb__img">
                                    <img className='profile-avatar' src={apiUrl + '/assets/' + user.avatar + '?fit=cover&width=224&height=224&quality=80'} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team__info-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="team__info-wrap">
                                <div className="team__info-discord">
                                    <div className="about__content-circle">
                                        <img src="assets/img/icons/circle02.svg" alt="img" />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                            <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                            <text>
                                                <textPath href="#textPath">super nft Gaming sits</textPath>
                                            </text>
                                        </svg>
                                        <i className="flaticon-discord"></i>
                                    </div>
                                    <div className="team__info-discord-info">
                                        <span className="sub">Join Us</span>
                                        <h5 className="title"><a href="https://discord.com/" target="_blank">DISCORD</a></h5>
                                    </div>
                                </div>
                                <div className="team__info-list">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="team__info-item">
                                                <div className="team__info-icon">
                                                    <img src="assets/img/others/team_vs02.png" alt="img" />
                                                </div>
                                                <div className="team__info-content">
                                                    <span className="sub">Member</span>
                                                    <h5 className="title">Black ninja</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="team__info-item">
                                                <div className="team__info-icon">
                                                    <i className="flaticon-swords-1"></i>
                                                </div>
                                                <div className="team__info-content">
                                                    <span className="sub">Game play</span>
                                                    <h5 className="title">Pubg Mobile</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="team__info-item">
                                                <div className="team__info-icon">
                                                    <i className="flaticon-diamond"></i>
                                                </div>
                                                <div className="team__info-content">
                                                    <span className="sub">Win Time</span>
                                                    <h5 className="title">04</h5>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="checkout__area section-pt-120 section-pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="coupon__code-wrap">
                                <div className="coupon__code-info">
                                    <span><i className="far fa-bookmark"></i> Have a coupon?</span>
                                    <a href="#" id="another-element">Click here to enter your code</a>
                                </div>
                                <form action="#" className="coupon__code-form">
                                    <p>If you have a coupon code, please apply it below.</p>
                                    <input type="text" placeholder="Coupon code" />
                                    <button type="submit" className="btn">Apply coupon</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <form action="#" className="customer__form-wrap">
                                <div className='row'>
                                    <div className="col-lg-12 d-flex justify-content-center mb-3">
                                        <img className='profile-avatar' src={apiUrl + '/assets/' + user.avatar + '?fit=cover&width=224&height=224&quality=80'} alt="" />
                                    </div>
                                </div>
                                <span className="title">Billing Details</span>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <label htmlFor="first-name">First name *</label>
                                            <input type="text" id="first-name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <label htmlFor="last-name">Last name *</label>
                                            <input type="text" id="last-name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-grp">
                                    <label htmlFor="company-name">Company name (optional)</label>
                                    <input type="text" id="company-name" />
                                </div>
                                <div className="form-grp select-grp">
                                    <label htmlFor="country-name">Country / Region *</label>
                                    <select id="country-name" name="country-name" className="country-name">
                                        <option value="United Kingdom (UK)">United Kingdom (UK)</option>
                                        <option value="United States (US)">United States (US)</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Portugal">Portugal</option>
                                    </select>
                                </div>
                                <div className="form-grp">
                                    <label htmlFor="street-address">Street address *</label>
                                    <input type="text" id="street-address" placeholder="House number and street name" />
                                </div>
                                <div className="form-grp">
                                    <input type="text" id="street-address-two" placeholder="Apartment, suite, unit, etc. (optional)" />
                                </div>
                                <div className="form-grp">
                                    <label htmlFor="town-name">Town / City *</label>
                                    <input type="text" id="town-name" />
                                </div>
                                <div className="form-grp select-grp">
                                    <label htmlFor="district-name">District *</label>
                                    <select id="district-name" name="district-name" className="district-name">
                                        <option value="Alabama">Alabama</option>
                                        <option value="Alaska">Alaska</option>
                                        <option value="Arizona">Arizona</option>
                                        <option value="California">California</option>
                                        <option value="New York">New York</option>
                                    </select>
                                </div>
                                <div className="form-grp">
                                    <label htmlFor="zip-code">ZIP Code *</label>
                                    <input type="text" id="zip-code" />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <label htmlFor="phone">Phone *</label>
                                            <input type="number" id="phone" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <label htmlFor="email">Email address *</label>
                                            <input type="email" id="email" />
                                        </div>
                                    </div>
                                </div>
                                <span className="title title-two">Additional Information</span>
                                <div className="form-grp">
                                    <label htmlFor="note">Order notes (optional)</label>
                                    <textarea id="note" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                </div>
                                <button className="btn">Place order</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </main>
    )
}

export default Profile