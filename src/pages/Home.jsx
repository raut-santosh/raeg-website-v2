import React, { useEffect, useState } from 'react'
import 'swiper/swiper-bundle.css';
import ApiService from '../services/ApiService';
import { useLoader } from '../contexts/LoaderContext';
import { Link } from 'react-router-dom';

const apiService = new ApiService();
const apiUrl = process.env.apiUrl;

function Home() {
    const { showLoader, hideLoader } = useLoader();
    const [members, setMembers] = useState([]);
    const [games, setGames] = useState([]);
    const [contests, setContests] = useState([]);

    useEffect(() => {
        

        const fetchData = async () => {
            try {
                showLoader();
                // Make each API call and await its completion
                const membersResponse = await apiService.get('members');
                setMembers(membersResponse.data);
    
                const gamesResponse = await apiService.get('games');
                setGames(gamesResponse.data);
    
                const contestsResponse = await apiService.get('contests');
                setContests(contestsResponse.data);
            } catch (error) {
                console.error("Error fetching data", error);
            } finally {
                hideLoader();
            }
        };
    
        fetchData();
    

        const script = document.createElement("script");
        script.src = "/assets/js/main.js"; // Path to your JavaScript file
        script.async = true;

        document.body.appendChild(script);

        // Clean up by removing the script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <main className="main--area">
            {/* <!-- slider-area --> */}
            <section className="slider__area slider__bg" data-background="assets/img/slider/slider_bg.jpg">
                <div className="slider-activee">
                    <div className="single-slider">
                        <div className="container custom-container">
                            <div className="row justify-content-between">
                                <div className="col-lg-6">
                                    <div className="slider__content">
                                        <h6 className="sub-title wow fadeInUp" data-wow-delay=".2s">tournaments</h6>
                                        <h2 className="title wow fadeInUp" data-wow-delay=".5s">raeg</h2>
                                        <p className="wow fadeInUp" data-wow-delay=".8s">E-sports matches</p>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-5 col-lg-6">
                                    <div className="slider__img text-center">
                                        <img src="assets/img/slider/slider.png" data-magnetic alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider__shapes">
                    <img src="assets/img/slider/slider_shape01.png" alt="shape" />
                    <img src="assets/img/slider/slider_shape02.png" alt="shape" />
                    <img src="assets/img/slider/slider_shape03.png" alt="shape" />
                    <img src="assets/img/slider/slider_shape04.png" alt="shape" />
                </div>
            </section>
            {/* <!-- slider-area-end --> */}

            {/* <!-- NFT-item-area --> */}
            <section className="nft-item__area">
                <div className="container custom-container">
                    <div className="row justify-content-center">
                        {games.map((game) => (
                            <div key={game.id} className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                                <div className="nft-item__box">
                                    <div className="nft-item__thumb">
                                        <Link to={apiUrl + '/assets/' + game.image}><img src={apiUrl + '/assets/' + game.image + '?fit=cover&width=187&height=191&quality=80'} alt="img" /></Link>
                                    </div>
                                    <div className="nft-item__content">
                                        <h4 className="title"><Link to={'/tournaments/' + game.id}>{game.name}</Link></h4>
                                        <div className="nft-item__bid">
                                            <div className="nft-item__price">
                                                <Link to={'/tournaments/' + game.id} className="bid-btn">Join Tournaments <i className="fas fa-long-arrow-alt-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- NFT-item-area-end --> */}

            {/* <!-- area-background-start --> */}
            <div className="area-background" data-background="assets/img/bg/area_bg01.jpg">


                {/* <!-- gallery-area --> */}
                <div className="section-pb-130"></div>
                <section className="gallery__area fix section-pb-130">
                    <div className="gallery__slider">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-9 col-lg-10 col-md-11">
                                    <div className="swiper-container gallery-active">
                                        <div className="swiper-wrapper">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <div className="swiper-slide">
                                                <div className="gallery__item">
                                                    <div className="gallery__thumb">
                                                        <a href="assets/img/slider/cs.png" data-cursor="-theme" data-cursor-text="View <br> Image" className="popup-image" title="PUBG Tournament"><img src="assets/img/slider/cs.png" alt="img" /></a>
                                                    </div>
                                                    <div className="gallery__content">
                                                        <h3 className="title">Contests</h3>
                                                        <span className="rate">rate 50%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                        {/* <!-- scrollbar --> */}
                                        <div className="swiper-scrollbar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- gallery-area-end --> */}

            </div>
            {/* <!-- area-background-end --> */}

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
                        {members.map(member => (
                            <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="team__item">
                                    <div className="team__thumb">
                                        <a href="team-details.html"><img src={apiUrl+'/assets/'+member.image+ '?fit=cover&width=224&height=224&quality=80'} alt="img" /></a>
                                    </div>
                                    <div className="team__content">
                                        <h4 className="name"><a href="team-details.html">{member.name}</a></h4>
                                        <span className="designation">{member.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- team-area-end --> */}


            {/* <!-- trending-nft-area --> */}
            {/* <section className="trendingNft-area section-pt-120 section-pb-90">
                <div className="container">
                    <div className="trendingNft__title-wrap">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="trendingNft__title">
                                    <h2 className="title">top Trending <img src="assets/img/icons/fire.png" width="35" alt="icon" /></h2>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="trendingNft__nav">
                                    <button className="slider-button-prev"><i className="fas fa-angle-left"></i></button>
                                    <button className="slider-button-next"><i className="fas fa-angle-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-container trendingNft-active">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="trendingNft__item">
                                    <div className="trendingNft__item-top">
                                        <div className="trendingNft__item-avatar">
                                            <div className="image">
                                                <a href="shop-details.html"><img src="assets/img/nft/nft_avatar01.png" alt="img" /></a>
                                            </div>
                                            <div className="info">
                                                <h6 className="name">Crypto Max</h6>
                                                <a href="shop-details.html" className="userName">@Jon Max</a>
                                            </div>
                                        </div>
                                        <div className="trendingNft__item-wish">
                                            <a href="#"><i className="far fa-heart"></i></a>
                                        </div>
                                    </div>
                                    <div className="trendingNft__item-image">
                                        <a href="shop-details.html"><img src="assets/img/nft/nft_img04.jpg" alt="img" /></a>
                                    </div>
                                    <div className="trendingNft__item-bottom">
                                        <div className="trendingNft__item-price">
                                            <span className="bid">Last Bid</span>
                                            <h6 className="eth"><i className="fab fa-ethereum"></i> 1.002 <span>Eth</span></h6>
                                        </div>
                                        <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="trendingNft__item">
                                    <div className="trendingNft__item-top">
                                        <div className="trendingNft__item-avatar">
                                            <div className="image">
                                                <a href="shop-details.html"><img src="assets/img/nft/nft_avatar02.png" alt="img" /></a>
                                            </div>
                                            <div className="info">
                                                <h6 className="name">Golden Crypto</h6>
                                                <a href="shop-details.html" className="userName">@Jon Max</a>
                                            </div>
                                        </div>
                                        <div className="trendingNft__item-wish">
                                            <a href="shop-details.html"><i className="far fa-heart"></i></a>
                                        </div>
                                    </div>
                                    <div className="trendingNft__item-image">
                                        <a href="shop-details.html"><img src="assets/img/nft/nft_img05.jpg" alt="img" /></a>
                                    </div>
                                    <div className="trendingNft__item-bottom">
                                        <div className="trendingNft__item-price">
                                            <span className="bid">Last Bid</span>
                                            <h6 className="eth"><i className="fab fa-ethereum"></i> 1.004 <span>Eth</span></h6>
                                        </div>
                                        <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="trendingNft__item">
                                    <div className="trendingNft__item-top">
                                        <div className="trendingNft__item-avatar">
                                            <div className="image">
                                                <a href="shop-details.html"><img src="assets/img/nft/nft_avatar03.png" alt="img" /></a>
                                            </div>
                                            <div className="info">
                                                <h6 className="name">Black Crypto</h6>
                                                <a href="shop-details.html" className="userName">@Jon Max</a>
                                            </div>
                                        </div>
                                        <div className="trendingNft__item-wish">
                                            <a href="shop-details.html"><i className="far fa-heart"></i></a>
                                        </div>
                                    </div>
                                    <div className="trendingNft__item-image">
                                        <a href="shop-details.html"><img src="assets/img/nft/nft_img06.jpg" alt="img" /></a>
                                    </div>
                                    <div className="trendingNft__item-bottom">
                                        <div className="trendingNft__item-price">
                                            <span className="bid">Last Bid</span>
                                            <h6 className="eth"><i className="fab fa-ethereum"></i> 1.005 <span>Eth</span></h6>
                                        </div>
                                        <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="trendingNft__item">
                                    <div className="trendingNft__item-top">
                                        <div className="trendingNft__item-avatar">
                                            <div className="image">
                                                <a href="shop-details.html"><img src="assets/img/nft/nft_avatar02.png" alt="img" /></a>
                                            </div>
                                            <div className="info">
                                                <h6 className="name">Luck Crypto</h6>
                                                <a href="shop-details.html" className="userName">@Jon Max</a>
                                            </div>
                                        </div>
                                        <div className="trendingNft__item-wish">
                                            <a href="shop-details.html"><i className="far fa-heart"></i></a>
                                        </div>
                                    </div>
                                    <div className="trendingNft__item-image">
                                        <a href="shop-details.html"><img src="assets/img/nft/nft_img07.jpg" alt="img" /></a>
                                    </div>
                                    <div className="trendingNft__item-bottom">
                                        <div className="trendingNft__item-price">
                                            <span className="bid">Last Bid</span>
                                            <h6 className="eth"><i className="fab fa-ethereum"></i> 1.005 <span>Eth</span></h6>
                                        </div>
                                        <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="trendingNft__item">
                                    <div className="trendingNft__item-top">
                                        <div className="trendingNft__item-avatar">
                                            <div className="image">
                                                <a href="shop-details.html"><img src="assets/img/nft/nft_avatar03.png" alt="img" /></a>
                                            </div>
                                            <div className="info">
                                                <h6 className="name">King Crypto</h6>
                                                <a href="shop-details.html" className="userName">@Jon Max</a>
                                            </div>
                                        </div>
                                        <div className="trendingNft__item-wish">
                                            <a href="shop-details.html"><i className="far fa-heart"></i></a>
                                        </div>
                                    </div>
                                    <div className="trendingNft__item-image">
                                        <a href="shop-details.html"><img src="assets/img/nft/nft_img08.jpg" alt="img" /></a>
                                    </div>
                                    <div className="trendingNft__item-bottom">
                                        <div className="trendingNft__item-price">
                                            <span className="bid">Last Bid</span>
                                            <h6 className="eth"><i className="fab fa-ethereum"></i> 1.005 <span>Eth</span></h6>
                                        </div>
                                        <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <!-- trending-nft-end --> */}

        </main>
    )
}

export default Home