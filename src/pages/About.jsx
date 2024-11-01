import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <main className="main--area">

        {/* <!-- breadcrumb-area --> */}
        <section className="breadcrumb-area" data-background="assets/img/bg/breadcrumb_bg01.jpg">
            <div className="container">
                <div className="breadcrumb__wrapper">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7">
                            <div className="breadcrumb__content">
                                <h2 className="title">ABOUT US</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">ABOUT US</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5 position-relative d-none d-lg-block">
                            <div className="breadcrumb__img">
                                <img src="assets/img/others/breadcrumb_img01.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- breadcrumb-area-end --> */}

        {/* <!-- about-area --> */}
        <section className="about__area-three section-pt-130 section-pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="about__title-wrap">
                            <h2 className="title">
                                <i>WE ARE</i>
                                <span>developer</span>
                                <i>ern nft</i>
                                <i>gam<b>ing</b></i>
                            </h2>
                            <div className="about__content-circle">
                                <img src="assets/img/icons/circle.svg" alt="img" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                    <text>
                                        <textPath href="#textPath">super nft Gaming sits</textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="about__three-images">
                            <img src="assets/img/others/mask_img01.jpg" alt="img" className="left" />
                            <img src="assets/img/others/mask_img02.jpg" alt="img" className="right" />
                            <div className="about__dots">
                                <svg width="109" height="35" viewBox="0 0 109 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0H0V7H9V0Z" fill="currentcolor" />
                                    <path d="M24 0H15V7H24V0Z" fill="currentcolor" />
                                    <path d="M38 0H29V7H38V0Z" fill="currentcolor" />
                                    <path d="M53 0H44V7H53V0Z" fill="currentcolor" />
                                    <path d="M67 0H58V7H67V0Z" fill="currentcolor" />
                                    <path d="M80 0H71V7H80V0Z" fill="currentcolor" />
                                    <path d="M9 14H0V21H9V14Z" fill="currentcolor" />
                                    <path d="M24 14H15V21H24V14Z" fill="currentcolor" />
                                    <path d="M38 14H29V21H38V14Z" fill="currentcolor" />
                                    <path d="M53 14H44V21H53V14Z" fill="currentcolor" />
                                    <path d="M67 14H58V21H67V14Z" fill="currentcolor" />
                                    <path d="M80 14H71V21H80V14Z" fill="currentcolor" />
                                    <path d="M95 14H86V21H95V14Z" fill="currentcolor" />
                                    <path d="M109 14H100V21H109V14Z" fill="currentcolor" />
                                    <path d="M9 28H0V35H9V28Z" fill="currentcolor" />
                                    <path d="M24 28H15V35H24V28Z" fill="currentcolor" />
                                    <path d="M38 28H29V35H38V28Z" fill="currentcolor" />
                                    <path d="M53 28H44V35H53V28Z" fill="currentcolor" />
                                    <path d="M67 28H58V35H67V28Z" fill="currentcolor" />
                                    <path d="M80 28H71V35H80V28Z" fill="currentcolor" />
                                    <path d="M95 28H86V35H95V28Z" fill="currentcolor" />
                                    <path d="M109 28H100V35H109V28Z" fill="currentcolor" />
                                </svg>
                            </div>
                        </div>
                        <div className="about__three-paragraph">
                            <p className="tg__animate-text style2">Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis tincidunt massa venenatis. Lorem Ipsum is simply dummyd the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley.</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="big-title">online</h2>
        </section>
        {/* <!-- about-area-end --> */}

        {/* <!-- services-area --> */}
        <section className="services-area services__bg-color section-pt-120 section-pb-120">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-6">
                        <div className="section__title text-start mb-65">
                            <span className="sub-title tg__animate-text">powerful services</span>
                            <h3 className="title">Our Powerful Services Done on time</h3>
                        </div>
                        <div className="services__wrapper">
                            <div className="services__item">
                                <div className="services__icon">
                                    <i className="flaticon-diamond"></i>
                                </div>
                                <div className="services__content">
                                    <h4 className="title"><a href="services-details.html">Year Experience</a></h4>
                                    <p>Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods</p>
                                </div>
                            </div>
                            <div className="services__item">
                                <div className="services__icon">
                                    <i className="flaticon-user-profile"></i>
                                </div>
                                <div className="services__content">
                                    <h4 className="title"><a href="services-details.html">Expert Teams</a></h4>
                                    <p>Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods</p>
                                </div>
                            </div>
                            <div className="services__item">
                                <div className="services__icon">
                                    <i className="flaticon-ethereum"></i>
                                </div>
                                <div className="services__content">
                                    <h4 className="title"><a href="services-details.html">Best NFT Game</a></h4>
                                    <p>Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods</p>
                                </div>
                            </div>
                            <div className="services__item">
                                <div className="services__icon">
                                    <i className="flaticon-settings-1"></i>
                                </div>
                                <div className="services__content">
                                    <h4 className="title"><a href="services-details.html">Worldwide Client</a></h4>
                                    <p>Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services__images">
                            <div className="services__images-item active">
                                <img src="assets/img/others/services_img01.jpg" alt="img" />
                                <a href="services-details.html" className="services__link">
                                    <i className="flaticon-next"></i>
                                </a>
                            </div>
                            <div className="services__images-item">
                                <img src="assets/img/others/services_img02.jpg" alt="img" />
                                <a href="services-details.html" className="services__link">
                                    <i className="flaticon-next"></i>
                                </a>
                            </div>
                            <div className="services__images-item">
                                <img src="assets/img/others/services_img03.jpg" alt="img" />
                                <a href="services-details.html" className="services__link">
                                    <i className="flaticon-next"></i>
                                </a>
                            </div>
                            <div className="services__images-item">
                                <img src="assets/img/others/services_img04.jpg" alt="img" />
                                <a href="services-details.html" className="services__link">
                                    <i className="flaticon-next"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- services-area-end --> */}

        {/* <!-- team-area --> */}
        <section className="team__area team-bg section-pt-130 section-pb-100" data-background="assets/img/bg/team_bg.jpg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="section__title text-center mb-60">
                            <span className="sub-title tg__animate-text">our team member</span>
                            <h3 className="title">ACTIVE TEAM MEMBERS</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="assets/img/team/team01.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">killer master</a></h4>
                                <span className="designation">Blockchain Expert</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="assets/img/team/team02.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">tanu mark</a></h4>
                                <span className="designation">Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="assets/img/team/team03.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">Thompson Scot</a></h4>
                                <span className="designation">Art Director</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="assets/img/team/team04.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">Shakh Danial</a></h4>
                                <span className="designation">Crypto Advisor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- team-area-end --> */}

    </main>
  )
}

export default About