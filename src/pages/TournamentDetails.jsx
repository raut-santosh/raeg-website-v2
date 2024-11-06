import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ApiService from '../services/ApiService'
import { useLoader } from '../contexts/LoaderContext'
import { formatDateMonthDateYear } from '../utils/utils'
const apiService = new ApiService()

function TournamentDetails() {
    const { id } = useParams();
    const [tournament, setTournament] = useState({});
    const {showLoader, hideLoader} = useLoader();

    useEffect(() => {
        const fetchData = async () => {
            const response = await apiService.get('tournaments', {filter: {id}, fields:"*.*"});
            setTournament(response.data[0])
        }

        fetchData();
    },[])
  return (
    <main className="main--area">

        <section className="breadcrumb-area breadcrumb__hide-img" data-background="assets/img/bg/breadcrumb_bg01.jpg">
            <div className="container">
                <div className="breadcrumb__wrapper">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb__content">
                                <h2 className="title">Tournament Details</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Tournament Details</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="tournament__details-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="blog-post-wrapper">
                        <div className="tournament__details-content">
                            <h2 className="title">{tournament.title}</h2>
                            <div className="blog-post-meta">
                                <ul className="list-wrap">
                                    <li>By<a href="#">Admin</a></li>
                                    <li><i className="far fa-calendar-alt"></i>{formatDateMonthDateYear(tournament.date_updated)}</li>
                                    <li><i className="far fa-comments"></i><a href="#">No comments</a></li>
                                </ul>
                            </div>
                            <div>{tournament.post}</div>
                            <div className="tournament__details-form">
                                <h4 className="tournament__details-form-title">join tournament</h4>
                                
                                <form action="#">
                                    <input type="text" placeholder="Name *" />
                                    <input type="text" placeholder="Player ID *" required />
                                    <input type="email" placeholder="Email *" required />
                                    <button className="tournament__details-form-btn">Join Now</button>
                                </form>
                            </div>
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
                                                            <path
                                                                d="M8.33192 5.92804L13.5438 0H12.3087L7.78328 5.14724L4.16883 0H0L5.46575 7.78353L0 14H1.2351L6.01407 8.56431L9.83119 14H14L8.33192 5.92804ZM6.64027 7.85211L6.08648 7.07704L1.68013 0.909771H3.57718L7.13316 5.88696L7.68694 6.66202L12.3093 13.1316H10.4123L6.64027 7.85211Z"
                                                                fill="currentColor" />
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
                    <div className="blog-post-sidebar">
                        <aside className="blog-sidebar tournament__sidebar">
                            <div className="shop__widget">
                                <h4 className="shop__widget-title">search</h4>
                                <div className="shop__widget-inner">
                                    <div className="shop__search">
                                        <input type="text" placeholder="Search here" />
                                        <button className="p-0 border-0"><i className="flaticon-search"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="shop__widget">
                                <h4 className="shop__widget-title">TRENDING MATCHES</h4>
                                <div className="shop__widget-inner">
                                    <div className="trending__matches-list">
                                        <div className="trending__matches-item">
                                            <div className="trending__matches-thumb">
                                                <a href="#"><img src="assets/img/others/trend_match01.png" alt="img" /></a>
                                            </div>
                                            <div className="trending__matches-content">
                                                <div className="info">
                                                    <h5 className="title"><a href="#">FoxTie Max</a></h5>
                                                    <span className="price">$ 7500</span>
                                                </div>
                                                <div className="play">
                                                    <a href="https://www.youtube.com/watch?v=a3_o4SpV1vI" className="popup-video"><i className="far fa-play-circle"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="trending__matches-item">
                                            <div className="trending__matches-thumb">
                                                <a href="#"><img src="assets/img/others/trend_match02.png" alt="img" /></a>
                                            </div>
                                            <div className="trending__matches-content">
                                                <div className="info">
                                                    <h5 className="title"><a href="#">hatax ninja</a></h5>
                                                    <span className="price">$ 5500</span>
                                                </div>
                                                <div className="play">
                                                    <a href="https://www.youtube.com/watch?v=a3_o4SpV1vI" className="popup-video"><i className="far fa-play-circle"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="trending__matches-item">
                                            <div className="trending__matches-thumb">
                                                <a href="#"><img src="assets/img/others/trend_match03.png" alt="img" /></a>
                                            </div>
                                            <div className="trending__matches-content">
                                                <div className="info">
                                                    <h5 className="title"><a href="#">spartan ii</a></h5>
                                                    <span className="price">$ 3500</span>
                                                </div>
                                                <div className="play">
                                                    <a href="https://www.youtube.com/watch?v=a3_o4SpV1vI" className="popup-video"><i className="far fa-play-circle"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop__widget">
                                <h4 className="shop__widget-title">ADVERTISEMENT</h4>
                                <div className="shop__widget-inner">
                                    <div className="tournament__advertisement">
                                        <a href="#"><img src="assets/img/others/tournament_ad.jpg" alt="img" /></a>
                                    </div>
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

export default TournamentDetails