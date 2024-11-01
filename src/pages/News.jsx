import React from 'react'
import { Link } from 'react-router-dom'

function News() {
  return (
    <main className="main--area">

        {/* <!-- breadcrumb-area --> */}
        <section className="breadcrumb-area breadcrumb__hide-img" data-background="assets/img/bg/breadcrumb_bg02.jpg">
            <div className="container">
                <div className="breadcrumb__wrapper">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb__content">
                                <h2 className="title">News</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">news list</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- breadcrumb-area-end --> */}

        {/* <!-- blog-area --> */}
        <section className="blog-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="blog-post-wrapper">
                        <div className="blog-post-item">
                            <div className="blog-post-thumb">
                                <a href="blog-details.html"><img src="assets/img/blog/blog_post01.jpg" alt="img" /></a>
                            </div>
                            <div className="blog-post-content">
                                <div className="blog-post-meta">
                                    <ul className="list-wrap">
                                        <li>By<a href="#">Admin</a></li>
                                        <li><i className="far fa-calendar-alt"></i> Aug 19, 2024</li>
                                        <li><i className="far fa-comments"></i><a href="#">No comments</a></li>
                                    </ul>
                                </div>
                                <h2 className="title"><a href="blog-details.html">zombie land TOURNAMENT max</a></h2>
                                <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                <div className="blog-post-bottom">
                                    <div className="blog-post-read">
                                        <a href="blog-details.html">READ MORE <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                    <div className="blog-post-share">
                                        <h5 className="share">share :</h5>
                                        <ul className="list-wrap">
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li>
                                                <a href="#">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.33192 5.92804L13.5438 0H12.3087L7.78328 5.14724L4.16883 0H0L5.46575 7.78353L0 14H1.2351L6.01407 8.56431L9.83119 14H14L8.33192 5.92804ZM6.64027 7.85211L6.08648 7.07704L1.68013 0.909771H3.57718L7.13316 5.88696L7.68694 6.66202L12.3093 13.1316H10.4123L6.64027 7.85211Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-post-item">
                            <div className="blog-post-thumb">
                                <a href="blog-details.html"><img src="assets/img/blog/blog_post02.jpg" alt="img" /></a>
                            </div>
                            <div className="blog-post-content">
                                <div className="blog-post-meta">
                                    <ul className="list-wrap">
                                        <li>By<a href="#">Admin</a></li>
                                        <li><i className="far fa-calendar-alt"></i> Aug 16, 2024</li>
                                        <li><i className="far fa-comments"></i><a href="#">No comments</a></li>
                                    </ul>
                                </div>
                                <h2 className="title"><a href="blog-details.html">play to earn crypto games place</a></h2>
                                <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                <div className="blog-post-bottom">
                                    <div className="blog-post-read">
                                        <a href="blog-details.html">READ MORE <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                    <div className="blog-post-share">
                                        <h5 className="share">share :</h5>
                                        <ul className="list-wrap">
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li>
                                                <a href="#">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.33192 5.92804L13.5438 0H12.3087L7.78328 5.14724L4.16883 0H0L5.46575 7.78353L0 14H1.2351L6.01407 8.56431L9.83119 14H14L8.33192 5.92804ZM6.64027 7.85211L6.08648 7.07704L1.68013 0.909771H3.57718L7.13316 5.88696L7.68694 6.66202L12.3093 13.1316H10.4123L6.64027 7.85211Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-post-item">
                            <div className="blog-post-thumb">
                                <a href="blog-details.html"><img src="assets/img/blog/blog_post03.jpg" alt="img" /></a>
                            </div>
                            <div className="blog-post-content">
                                <div className="blog-post-meta">
                                    <ul className="list-wrap">
                                        <li>By<a href="#">Admin</a></li>
                                        <li><i className="far fa-calendar-alt"></i> Aug 16, 2024</li>
                                        <li><i className="far fa-comments"></i><a href="#">No comments</a></li>
                                    </ul>
                                </div>
                                <h2 className="title"><a href="blog-details.html">nft games android no investment</a></h2>
                                <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                <div className="blog-post-bottom">
                                    <div className="blog-post-read">
                                        <a href="blog-details.html">READ MORE <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                    <div className="blog-post-share">
                                        <h5 className="share">share :</h5>
                                        <ul className="list-wrap">
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li>
                                                <a href="#">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.33192 5.92804L13.5438 0H12.3087L7.78328 5.14724L4.16883 0H0L5.46575 7.78353L0 14H1.2351L6.01407 8.56431L9.83119 14H14L8.33192 5.92804ZM6.64027 7.85211L6.08648 7.07704L1.68013 0.909771H3.57718L7.13316 5.88696L7.68694 6.66202L12.3093 13.1316H10.4123L6.64027 7.85211Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pagination__wrap">
                            <ul className="list-wrap d-flex flex-wrap justify-content-center">
                                <li><a href="#" className="page-numbers">01</a></li>
                                <li><span className="page-numbers current">02</span></li>
                                <li><a href="#" className="page-numbers">03</a></li>
                                <li><a href="#" className="page-numbers">04</a></li>
                                <li><a href="#" className="page-numbers">....</a></li>
                                <li>
                                    <a href="#" className="next page-numbers">
                                        <i className="fas fa-angle-double-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog-post-sidebar">
                        <aside className="blog-sidebar">
                            <div className="blog-widget">
                                <div className="sidebar__author">
                                    <div className="sidebar__author-thumb">
                                        <img src="assets/img/blog/avatar.jpg" alt="img" />
                                    </div>
                                    <div className="sidebar__author-content">
                                        <h4 className="name">Kaceytron G.</h4>
                                        <p>Lorem ipsum sitamet conteur adipiscing Duis elementum solliciin</p>
                                        <div className="sidebar__author-social">
                                            <a href="#">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.33192 5.92804L13.5438 0H12.3087L7.78328 5.14724L4.16883 0H0L5.46575 7.78353L0 14H1.2351L6.01407 8.56431L9.83119 14H14L8.33192 5.92804ZM6.64027 7.85211L6.08648 7.07704L1.68013 0.909771H3.57718L7.13316 5.88696L7.68694 6.66202L12.3093 13.1316H10.4123L6.64027 7.85211Z" fill="currentColor" />
                                                </svg>
                                            </a>
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-widget">
                                <form className="sidebar-search-form position-relative">
                                    <input type="text" placeholder="Search here.." />
                                    <button><i className="flaticon-loupe"></i></button>
                                </form>
                            </div>
                            <div className="blog-widget widget_categories">
                                <h4 className="fw-title">CATEGORIES</h4>
                                <ul className="list-wrap">
                                    <li><a href="#">gaming</a><span className="float-right">(11)</span></li>
                                    <li><a href="#">ELECTRONIC</a><span className="float-right">(4)</span></li>
                                    <li><a href="#">online</a><span className="float-right">(21)</span></li>
                                    <li><a href="#">TOURNAMENT</a><span className="float-right">(15)</span></li>
                                    <li><a href="#">controller</a><span className="float-right">(2)</span></li>
                                    <li><a href="#">live</a><span className="float-right">(7)</span></li>
                                </ul>
                            </div>
                            <div className="blog-widget">
                                <h4 className="fw-title">Recent Posts</h4>
                                <div className="rc__post-wrapper">
                                    <div className="rc__post-item">
                                        <div className="rc__post-thumb">
                                            <a href="blog-details.html"><img src="assets/img/blog/rc_post01.jpg" alt="img"/></a>
                                        </div>
                                        <div className="rc__post-content">
                                            <h6 className="title"><a href="blog-details.html">zombie TOURNAMENT
                                            land max</a></h6>
                                            <span className="date">aug 19, 2024</span>
                                        </div>
                                    </div>
                                    <div className="rc__post-item">
                                        <div className="rc__post-thumb">
                                            <a href="blog-details.html"><img src="assets/img/blog/rc_post02.jpg" alt="img" /></a>
                                        </div>
                                        <div className="rc__post-content">
                                            <h6 className="title"><a href="blog-details.html">play to earn crypto games</a></h6>
                                            <span className="date">aug 19, 2024</span>
                                        </div>
                                    </div>
                                    <div className="rc__post-item">
                                        <div className="rc__post-thumb">
                                            <a href="blog-details.html"><img src="assets/img/blog/rc_post03.jpg" alt="img" /></a>
                                        </div>
                                        <div className="rc__post-content">
                                            <h6 className="title"><a href="blog-details.html">nft games android
                                            land max</a></h6>
                                            <span className="date">aug 19, 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-widget">
                                <h4 className="fw-title">Newsletter</h4>
                                <div className="sidebar__newsletter">
                                    <p>Lorem ipsum sitamet conteur adipiscin</p>
                                    <form action="#" className="sidebar__newsletter-form">
                                        <input type="email" name="email" placeholder="Enter Your Email" />
                                        <button type="submit"><i className="fas fa-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="blog-widget">
                                <h4 className="fw-title">INSTAGRAM</h4>
                                <div className="sidebar__insta">
                                    <div className="sidebar__insta-item">
                                        <a href="https://www.instagram.com/" target="_blank"><img src="assets/img/instagram/insta01.jpg" alt="img" /></a>
                                    </div>
                                    <div className="sidebar__insta-item">
                                        <a href="https://www.instagram.com/" target="_blank"><img src="assets/img/instagram/insta02.jpg" alt="img" /></a>
                                    </div>
                                    <div className="sidebar__insta-item">
                                        <a href="https://www.instagram.com/" target="_blank"><img src="assets/img/instagram/insta03.jpg" alt="img" /></a>
                                    </div>
                                    <div className="sidebar__insta-item">
                                        <a href="https://www.instagram.com/" target="_blank"><img src="assets/img/instagram/insta04.jpg" alt="img" /></a>
                                    </div>
                                    <div className="sidebar__insta-item">
                                        <a href="https://www.instagram.com/" target="_blank"><img src="assets/img/instagram/insta05.jpg" alt="img" /></a>
                                    </div>
                                    <div className="sidebar__insta-item">
                                        <a href="https://www.instagram.com/" target="_blank"><img src="assets/img/instagram/insta06.jpg" alt="img" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-widget">
                                <h4 className="fw-title">Tag Cloud</h4>
                                <div className="tagcloud">
                                    <a href="#">E-sports</a>
                                    <a href="#">Fantasy</a>
                                    <a href="#">game</a>
                                    <a href="#">Tournaments</a>
                                    <a href="#">Matches</a>
                                    <a href="#">Streamers</a>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- blog-area-end --> */}

    </main>
  )
}

export default News