import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <main className="main--area">

        {/* <!-- breadcrumb-area --> */}
        <section className="breadcrumb-area breadcrumb__hide-img" data-background="assets/img/bg/breadcrumb_bg02.jpg">
            <div className="container">
                <div className="breadcrumb__wrapper">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb__content">
                                <h2 className="title">Contact us</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">contact</li>
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
                        <div className="contact__content">
                            <h2 className="overlay-title"><span>join us</span></h2>
                            <h2 className="title">CONTACT US</h2>
                            {/* <p>Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor</p> */}
                            <div className="footer-el-widget">
                                <h4 className="title">information</h4>
                                <ul className="list-wrap">
                                    <li><a href="tel:+918308197630">+91-8308197630</a></li>
                                    <li><a href="mailto:rohitakolkar2@gmail.com">rohitakolkar2@gmail.com</a></li>
                                    <li>At.post karanji tal.pathardi, Ahmednagar, Maharashtra, PIN: 414106</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="contact__form-wrap">
                            <form id="contact-form" action="assets/mail.php" method="POST">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="input-grp">
                                            <input name="name" type="text" placeholder="Name *" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="input-grp">
                                            <input name="email" type="email" placeholder="Email *" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-grp message-grp">
                                    <textarea name="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
                                </div>
                                <button className="submit-btn">Submit Now</button>
                            </form>
                            <p className="ajax-response"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- contact-area-end --> */}

        {/* <!-- contact-map --> */}
        <div className="contact-map">
            <iframe src="https://geo-devrel-javascript-samples.web.app/samples/style-array/app/dist/" allowFullScreen="" loading="lazy"></iframe>
        </div>
        {/* <!-- contact-map-end --> */}

    </main>
  )
}

export default Contact