import React from 'react'
import { Link } from 'react-router-dom'

function Tournaments() {
  return (
    <main className="main--area">

        {/* <!-- breadcrumb-area --> */}
        <section className="breadcrumb-area" data-background="assets/img/bg/breadcrumb_bg03.jpg">
            <div className="container">
                <div className="breadcrumb__wrapper">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7">
                            <div className="breadcrumb__content">
                                <h2 className="title">Tournament</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Tournament</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5 position-relative d-none d-lg-block">
                            <div className="breadcrumb__img">
                                <img src="assets/img/others/breadcrumb_img03.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- breadcrumb-area-end --> */}

        {/* <!-- tournament-area --> */}
        <section className="tournament-area section-pt-120 section-pb-90">
            <div className="container">
                <div className="tournament__wrapper">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-10">
                            <div className="section__title text-center mb-60">
                                <span className="sub-title tg__animate-text">our tournament</span>
                                <h3 className="title">play to earn games</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center gutter-25">
                        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                            <div className="tournament__box-wrap">
                                <svg className="main-bg" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 357 533" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.00021 63H103C103 63 114.994 62.778 128 50C141.006 37.222 168.042 13.916 176 10C183.958 6.084 193 1.9 213 2C233 2.1 345 1 345 1C347.917 1.66957 350.51 3.33285 352.334 5.70471C354.159 8.07658 355.101 11.0093 355 14C355.093 25.1 356 515 356 515C356 515 357.368 529.61 343 530C328.632 530.39 15.0002 532 15.0002 532C15.0002 532 0.937211 535.85 1.00021 522C1.06321 508.15 2.00021 63 2.00021 63Z" fill="#19222B" stroke="#4C4C4C" strokeWidth="0.25" />
                                </svg>
                                <svg className="price-bg" preserveAspectRatio="none" viewBox="0 0 166 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.00792892 55V11C0.00792892 11 -0.729072 0.988 12.0079 1C24.7449 1.012 160.008 0 160.008 0C160.008 0 172.491 1.863 161.008 10C148.995 18.512 115.008 48 115.008 48C115.008 48 110.021 55.238 90.0079 55C69.9949 54.762 0.00792892 55 0.00792892 55Z" fill="currentcolor" />
                                </svg>
                                <div className="tournament__box-price">
                                    <i className="fas fa-trophy"></i>
                                    <span>25000</span>
                                </div>
                                <div className="tournament__box-countdown">
                                    <div className="coming-time" data-countdown="2025/5/16"></div>
                                </div>
                                <div className="tournament__box-caption">
                                    <span className="sub">TOURNAMENT</span>
                                    <h4 className="title">of weekly</h4>
                                </div>
                                <div className="tournament__box-prize">
                                    <i className="fas fa-trophy"></i>
                                    <span>3 prize Places</span>
                                </div>
                                <ul className="tournament__box-list list-wrap">
                                    <li>
                                        <div className="tournament__box-list-item">
                                            <div className="tournament__player-thumb">
                                                <img src="assets/img/others/tournament01.jpg" alt="img" />
                                            </div>
                                            <h6 className="tournament__player-name">black ninja</h6>
                                            <span className="tournament__player-price">$ 75000 <i className="fas fa-bolt"></i></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="tournament__box-list-item">
                                            <div className="tournament__player-thumb">
                                                <img src="assets/img/others/tournament02.jpg" alt="img" />
                                            </div>
                                            <h6 className="tournament__player-name">Foxtie Max</h6>
                                            <span className="tournament__player-price">$ 65000 <i className="fas fa-bolt"></i></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="tournament__box-list-item">
                                            <div className="tournament__player-thumb">
                                                <img src="assets/img/others/tournament03.jpg" alt="img" />
                                            </div>
                                            <h6 className="tournament__player-name">Holam Doxe</h6>
                                            <span className="tournament__player-price">$ 55000 <i className="fas fa-bolt"></i></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                            <div className="tournament__box-wrap active">
                                <svg className="main-bg" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 357 533" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.00021 63H103C103 63 114.994 62.778 128 50C141.006 37.222 168.042 13.916 176 10C183.958 6.084 193 1.9 213 2C233 2.1 345 1 345 1C347.917 1.66957 350.51 3.33285 352.334 5.70471C354.159 8.07658 355.101 11.0093 355 14C355.093 25.1 356 515 356 515C356 515 357.368 529.61 343 530C328.632 530.39 15.0002 532 15.0002 532C15.0002 532 0.937211 535.85 1.00021 522C1.06321 508.15 2.00021 63 2.00021 63Z" fill="#19222B" stroke="#4C4C4C" strokeWidth="0.25" />
                                </svg>
                                <svg className="price-bg" preserveAspectRatio="none" viewBox="0 0 166 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.00792892 55V11C0.00792892 11 -0.729072 0.988 12.0079 1C24.7449 1.012 160.008 0 160.008 0C160.008 0 172.491 1.863 161.008 10C148.995 18.512 115.008 48 115.008 48C115.008 48 110.021 55.238 90.0079 55C69.9949 54.762 0.00792892 55 0.00792892 55Z" fill="currentcolor" />
                                </svg>
                                <div className="tournament__box-price">
                                    <i className="fas fa-trophy"></i>
                                    <span>50000</span>
                                </div>
                                <div className="tournament__box-countdown">
                                    <div className="coming-time" data-countdown="2025/5/16"></div>
                                </div>
                                <div className="tournament__box-caption">
                                    <span className="sub">TOURNAMENT</span>
                                    <h4 className="title">Lucky card</h4>
                                </div>
                                <div className="tournament__box-prize">
                                    <i className="fas fa-trophy"></i>
                                    <span>10 prize Places</span>
                                </div>
                                <ul className="tournament__box-list list-wrap">
                                    <li>
                                        <div className="tournament__box-list-item">
                                            <div className="tournament__player-thumb">
                                                <img src="assets/img/others/tournament01.jpg" alt="img" />
                                            </div>
                                            <h6 className="tournament__player-name">black ninja</h6>
                                            <span className="tournament__player-price">$ 75000 <i className="fas fa-bolt"></i></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="tournament__box-list-item">
                                            <div className="tournament__player-thumb">
                                                <img src="assets/img/others/tournament02.jpg" alt="img" />
                                            </div>
                                            <h6 className="tournament__player-name">Foxtie Max</h6>
                                            <span className="tournament__player-price">$ 65000 <i className="fas fa-bolt"></i></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="tournament__box-list-item">
                                            <div className="tournament__player-thumb">
                                                <img src="assets/img/others/tournament03.jpg" alt="img" />
                                            </div>
                                            <h6 className="tournament__player-name">Holam Doxe</h6>
                                            <span className="tournament__player-price">$ 55000 <i className="fas fa-bolt"></i></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                            <div className="tournament__box-wrap">
                                <svg className="main-bg" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 357 533" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.00021 63H103C103 63 114.994 62.778 128 50C141.006 37.222 168.042 13.916 176 10C183.958 6.084 193 1.9 213 2C233 2.1 345 1 345 1C347.917 1.66957 350.51 3.33285 352.334 5.70471C354.159 8.07658 355.101 11.0093 355 14C355.093 25.1 356 515 356 515C356 515 357.368 529.61 343 530C328.632 530.39 15.0002 532 15.0002 532C15.0002 532 0.937211 535.85 1.00021 522C1.06321 508.15 2.00021 63 2.00021 63Z" fill="#19222B" stroke="#4C4C4C" strokeWidth="0.25" />
                                </svg>
                                <svg className="price-bg" preserveAspectRatio="none" viewBox="0 0 166 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.00792892 55V11C0.00792892 11 -0.729072 0.988 12.0079 1C24.7449 1.012 160.008 0 160.008 0C160.008 0 172.491 1.863 161.008 10C148.995 18.512 115.008 48 115.008 48C115.008 48 110.021 55.238 90.0079 55C69.9949 54.762 0.00792892 55 0.00792892 55Z" fill="currentcolor" />
                                </svg>
                                <div className="tournament__box-price">
                                    <i className="fas fa-trophy"></i>
                                    <span>75000</span>
                                </div>
                                <div className="tournament__box-countdown">
                                    <div className="coming-time" data-countdown="2025/5/16"></div>
                                </div>
                                <div className="tournament__box-caption">
                                    <span className="sub">TOURNAMENT</span>
                                    <h4 className="title">of month</h4>
                                </div>
                                <div className="tournament__box-prize">
                                    <i className="fas fa-trophy"></i>
                                    <span>50 prize Places</span>
                                </div>
                                <ul className="tournament__box-list list-wrap">
                                    <li>
                                        <div className="tournament__box-list-item">
                                            <div className="tournament__player-thumb">
                                                <img src="assets/img/others/tournament01.jpg" alt="img" />
                                            </div>
                                            <h6 className="tournament__player-name">black ninja</h6>
                                            <span className="tournament__player-price">$ 75000 <i className="fas fa-bolt"></i></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="tournament__box-list-item">
                                            <div className="tournament__player-thumb">
                                                <img src="assets/img/others/tournament02.jpg" alt="img" />
                                            </div>
                                            <h6 className="tournament__player-name">Foxtie Max</h6>
                                            <span className="tournament__player-price">$ 65000 <i className="fas fa-bolt"></i></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="tournament__box-list-item">
                                            <div className="tournament__player-thumb">
                                                <img src="assets/img/others/tournament03.jpg" alt="img" />
                                            </div>
                                            <h6 className="tournament__player-name">Holam Doxe</h6>
                                            <span className="tournament__player-price">$ 55000 <i className="fas fa-bolt"></i></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- tournament-area-end --> */}

        {/* <!-- tournament-list-area --> */}
        <section className="tournament__list-area section-pb-120 section-pt-120" data-background="assets/img/bg/tournament_bg.jpg">
            <div className="container">
                <div className="tournament__wrapper">
                    <div className="row align-items-end mb-60">
                        <div className="col-lg-8">
                            <div className="section__title text-center text-lg-start title-shape-none">
                                <span className="sub-title tg__animate-text">tournament List</span>
                                <h3 className="title">Active tournament</h3>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section__title-link">
                                <a href="tournament.html">EXPLORE MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="tournament__list-item-wrapper">
                                <div className="tournament__list-item wow fadeInUp" data-wow-delay=".2s">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1116.562" height="163.37" viewBox="0 0 1116.562 163.37">
                                        <path className="background-path" d="M708,1784l28-27s4.11-5.76,18-6,702-1,702-1a37.989,37.989,0,0,1,16,9c7.47,7.08,37,33,37,33s9.02,9.47,9,18,0,42,0,42-0.19,9.43-11,19-32,30-32,30-5.53,11.76-21,12-985,0-985,0a42.511,42.511,0,0,1-26-13c-11.433-12.14-34-32-34-32s-6.29-5.01-7-17,0-43,0-43-1-5.42,12-18,34-32,34-32,10.4-8.28,19-8,76,0,76,0a44.661,44.661,0,0,1,21,11c9.268,8.95,22,22,22,22Z" transform="translate(-401.563 -1749.875)" />
                                    </svg>
                                    <div className="tournament__list-content">
                                        <div className="tournament__list-thumb">
                                            <a href="tournament-details.html"><img src="assets/img/others/tournament_thumb01.png" alt="thumb" /></a>
                                        </div>
                                        <div className="tournament__list-name">
                                            <h5 className="team-name">FoxTie Max</h5>
                                            <span className="status">Online</span>
                                        </div>
                                        <div className="tournament__list-prize">
                                            <h6 className="title">Prize</h6>
                                            <i className="fas fa-trophy"></i>
                                            <span>$75000</span>
                                        </div>
                                        <div className="tournament__list-time">
                                            <h6 className="title">Time</h6>
                                            <i className="fas fa-clock"></i>
                                            <span>10h : 15m</span>
                                        </div>
                                        <div className="tournament__list-live">
                                            <a href="https://www.twitch.tv/videos/1726788358" target="_blank">Live now <i className="far fa-play-circle"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tournament__list-item wow fadeInUp" data-wow-delay=".4s">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1116.562" height="163.37" viewBox="0 0 1116.562 163.37">
                                        <path className="background-path" d="M708,1784l28-27s4.11-5.76,18-6,702-1,702-1a37.989,37.989,0,0,1,16,9c7.47,7.08,37,33,37,33s9.02,9.47,9,18,0,42,0,42-0.19,9.43-11,19-32,30-32,30-5.53,11.76-21,12-985,0-985,0a42.511,42.511,0,0,1-26-13c-11.433-12.14-34-32-34-32s-6.29-5.01-7-17,0-43,0-43-1-5.42,12-18,34-32,34-32,10.4-8.28,19-8,76,0,76,0a44.661,44.661,0,0,1,21,11c9.268,8.95,22,22,22,22Z" transform="translate(-401.563 -1749.875)" />
                                    </svg>
                                    <div className="tournament__list-content">
                                        <div className="tournament__list-thumb">
                                            <a href="tournament-details.html"><img src="assets/img/others/tournament_thumb02.png" alt="thumb" /></a>
                                        </div>
                                        <div className="tournament__list-name">
                                            <h5 className="team-name">Hatlax TM.</h5>
                                            <span className="status">Online</span>
                                        </div>
                                        <div className="tournament__list-prize">
                                            <h6 className="title">Prize</h6>
                                            <i className="fas fa-trophy"></i>
                                            <span>$85000</span>
                                        </div>
                                        <div className="tournament__list-time">
                                            <h6 className="title">Time</h6>
                                            <i className="fas fa-clock"></i>
                                            <span>12h : 10m</span>
                                        </div>
                                        <div className="tournament__list-live">
                                            <a href="https://www.twitch.tv/videos/1726788358" target="_blank">Live now <i className="far fa-play-circle"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tournament__list-item wow fadeInUp" data-wow-delay=".6s">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1116.562" height="163.37" viewBox="0 0 1116.562 163.37">
                                        <path className="background-path" d="M708,1784l28-27s4.11-5.76,18-6,702-1,702-1a37.989,37.989,0,0,1,16,9c7.47,7.08,37,33,37,33s9.02,9.47,9,18,0,42,0,42-0.19,9.43-11,19-32,30-32,30-5.53,11.76-21,12-985,0-985,0a42.511,42.511,0,0,1-26-13c-11.433-12.14-34-32-34-32s-6.29-5.01-7-17,0-43,0-43-1-5.42,12-18,34-32,34-32,10.4-8.28,19-8,76,0,76,0a44.661,44.661,0,0,1,21,11c9.268,8.95,22,22,22,22Z" transform="translate(-401.563 -1749.875)" />
                                    </svg>
                                    <div className="tournament__list-content">
                                        <div className="tournament__list-thumb">
                                            <a href="tournament-details.html"><img src="assets/img/others/tournament_thumb03.png" alt="thumb" /></a>
                                        </div>
                                        <div className="tournament__list-name">
                                            <h5 className="team-name">Spartan iv</h5>
                                            <span className="status">Online</span>
                                        </div>
                                        <div className="tournament__list-prize">
                                            <h6 className="title">Prize</h6>
                                            <i className="fas fa-trophy"></i>
                                            <span>$45000</span>
                                        </div>
                                        <div className="tournament__list-time">
                                            <h6 className="title">Time</h6>
                                            <i className="fas fa-clock"></i>
                                            <span>10h : 15m</span>
                                        </div>
                                        <div className="tournament__list-live">
                                            <a href="https://www.twitch.tv/videos/1726788358" target="_blank">Live now <i className="far fa-play-circle"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- tournament-list-area-end --> */}

    </main>
  )
}

export default Tournaments