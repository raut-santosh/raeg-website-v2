import React, { useEffect } from 'react'
import ApiService from '../services/ApiService'
import { useParams } from 'react-router-dom';

const apiService = new ApiService()

function BlogDetails() {
    const {id} = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await apiService.get('blogs', { filter: {id}, fields:"*.*"});
            setBlog(response.data[0])
        }
    })
    return (
        <main className="main--area">

            <section className="breadcrumb-area breadcrumb__hide-img" data-background="assets/img/bg/breadcrumb_bg02.jpg">
                <div className="container">
                    <div className="breadcrumb__wrapper">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb__content">
                                    <h2 className="title">Blog Details</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">blog details</li>
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
            <section className="blog-area blog-details-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="blog-post-wrapper">
                            <div className="blog-post-item">
                                <div className="blog-post-thumb">
                                    <img src="assets/img/blog/blog_post03.jpg" alt="img" />
                                </div>
                                <div className="blog-post-content blog-details-content">
                                    <div className="blog-post-meta">
                                        <ul className="list-wrap">
                                            <li>By<a href="#">Admin</a></li>
                                            <li><i className="far fa-calendar-alt"></i> Aug 16, 2024</li>
                                            <li><i className="far fa-comments"></i><a href="#">No comments</a></li>
                                        </ul>
                                    </div>
                                    <h2 className="title">play to earn crypto games place</h2>
                                    <p>Excepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of  printing and typeetting industry. Lorem Ipsum has been the industry's standsaard sipiscing Duis elementum solliciin. Duis aute irure dolor in repderit in voluptate velit esse cillum dolorliquip ex ea commodo repderit in voluptate consequat nulla ullaorper.</p>
                                    <blockquote>
                                        <p>Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of printing and typeetting industry.</p>
                                    </blockquote>
                                    <p>Axcepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of printing and typeetting industry. Lorem Ipsum has been the industry's standsaard sipiscing Duis elementum solliciin. Duis aute irure dolor in repderit.</p>
                                    <p>Simply dummy text of printing and typeetting industry. Lorem Ipsum has been the industry's standsaard sipiscing Duis elementum solliciin.Duis aute irure dolor in repderit.</p>
                                    <div className="blog-details-inner">
                                        <h4 className="inner-title">nft games android no investment</h4>
                                        <p>Axcepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of  printing and typeetting industry. Lorem Ipsum has been the industry's standsaard sipiscing Duis elementum solliciin.Duis aute irure dolor in repderit.</p>
                                    </div>
                                    <div className="blog-details-inner-img">
                                        <img src="assets/img/blog/blog_post02.jpg" alt="img" />
                                    </div>
                                    <p>Axcepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of  printing and typeetting industry.</p>
                                    <div className="blog-details-bottom">
                                        <div className="row">
                                            <div className="col-xl-6 col-md-7">
                                                <div className="tg-post-tags">
                                                    <h5 className="tags-title">tags :</h5>
                                                    <ul className="list-wrap d-flex flex-wrap align-items-center m-0">
                                                        <li><a href="#">Esports</a>,</li>
                                                        <li><a href="#">Fantasy</a>,</li>
                                                        <li><a href="#">game</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-5">
                                                <div className="blog-post-share justify-content-start justify-content-md-end">
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
                                </div>
                            </div>
                            <div className="blog__avatar-wrap mb-65">
                                <div className="blog__avatar-img">
                                    <a href="#"><img src="assets/img/blog/avatar.jpg" alt="img" /></a>
                                </div>
                                <div className="blog__avatar-info">
                                    <span className="designation">Written by</span>
                                    <h4 className="name"><a href="#">Kaceytron G.</a></h4>
                                    <p>Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor.</p>
                                </div>
                            </div>
                            <div className="comments-wrap">
                                <h4 className="comments-wrap-title">3 Comments</h4>
                                <div className="latest-comments">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="comments-box">
                                                <div className="comments-avatar">
                                                    <img src="assets/img/blog/comment01.png" alt="img" />
                                                </div>
                                                <div className="comments-text">
                                                    <div className="avatar-name">
                                                        <h6 className="name">John William <a href="#" className="comment-reply-link"><i className="fas fa-reply"></i> Reply</a></h6>
                                                        <span className="date">September 6, 2024</span>
                                                    </div>
                                                    <p>Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor uni enim ad minim veniam quis nostrud today.</p>
                                                </div>
                                            </div>
                                            <ul className="children">
                                                <li>
                                                    <div className="comments-box">
                                                        <div className="comments-avatar">
                                                            <img src="assets/img/blog/comment02.png" alt="img" />
                                                        </div>
                                                        <div className="comments-text">
                                                            <div className="avatar-name">
                                                                <h6 className="name">Hanry Foul <a href="#" className="comment-reply-link"><i className="fas fa-reply"></i> Reply</a></h6>
                                                                <span className="date">September 6, 2024</span>
                                                            </div>
                                                            <p>Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor enim ad minim veniam quis nostrud today.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="comments-box">
                                                <div className="comments-avatar">
                                                    <img src="assets/img/blog/comment03.png" alt="img" />
                                                </div>
                                                <div className="comments-text">
                                                    <div className="avatar-name">
                                                        <h6 className="name">Luna Rose <a href="#" className="comment-reply-link"><i className="fas fa-reply"></i> Reply</a></h6>
                                                        <span className="date">September 6, 2024</span>
                                                    </div>
                                                    <p>Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor eam enim ad minim veniam quis nostrud today.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="comment-respond">
                                <h3 className="comment-reply-title">Leave a Reply</h3>
                                <form className="comment-form" action="#">
                                    <p className="comment-notes">Email address will not be published. Required fields are marked *</p>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-grp">
                                                <input type="text" placeholder="Name *" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-grp">
                                                <input type="email" placeholder="Email *" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-grp">
                                        <textarea name="message" placeholder="Comment *"></textarea>
                                    </div>
                                    <button type="submit">Post Comment</button>
                                </form>
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
                                                <a href="blog-details.html"><img src="assets/img/blog/rc_post01.jpg" alt="img" /></a>
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

        </main>
    )
}

export default BlogDetails