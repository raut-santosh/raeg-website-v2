import React from 'react'

function Register() {
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
                                <form id="contact-form" action="assets/mail.php" method="POST">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-12 col-lg-12">
                                            <div className="input-grp">
                                                <input type="text" placeholder="Email *" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-12 col-lg-12">
                                            <div className="input-grp">
                                                <input type="password" placeholder="Password *" required />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="submit-btn">Login</button>
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