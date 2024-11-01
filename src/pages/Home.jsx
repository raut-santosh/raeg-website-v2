import React, { useEffect } from 'react'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
function Home() {
    
    useEffect(() => {
        
        // Initialize gallery swiper sliders
        const gallerySwipers = document.querySelectorAll('.gallery-active');
        gallerySwipers.forEach((container, index) => {
            container.classList.add('swiper-slider-' + index);

            const dragSize = container.dataset.dragSize || 200;
            const freeMode = container.dataset.freeMode === 'true';
            const loop = container.dataset.loop !== 'false';
            const slidesDesktop = parseInt(container.dataset.slidesDesktop) || 1;
            const slidesTablet = parseInt(container.dataset.slidesTablet) || 1;
            const slidesMobile = parseInt(container.dataset.slidesMobile) || 1;
            const spaceBetween = parseInt(container.dataset.spaceBetween) || 1;

            new Swiper('.swiper-slider-' + index, {
                direction: 'horizontal',
                loop: loop,
                freeMode: freeMode,
                centeredSlides: true,
                spaceBetween: spaceBetween,
                observer: true,
                observeParents: true,
                breakpoints: {
                    1920: { slidesPerView: slidesDesktop },
                    992: { slidesPerView: slidesTablet },
                    320: { slidesPerView: slidesMobile },
                },
                navigation: {
                    nextEl: `.gallery-slider-button-next-${index}`,
                    prevEl: `.gallery-slider-button-prev-${index}`,
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                    dragSize: dragSize,
                },
            });
        });

        // Initialize trending NFT swiper
        const trendSwiper = new Swiper('.trendingNft-active', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            breakpoints: {
                1500: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
                992: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                576: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
            },
            navigation: {
                nextEl: '.trend-slider-button-next',
                prevEl: '.trend-slider-button-prev',
            },
        });

        // Cleanup function to destroy Swiper instances on component unmount
        return () => {
            gallerySwipers.forEach((container) => {
                const swiperInstance = container.swiper;
                if (swiperInstance) swiperInstance.destroy(true, true);
            });
            if (trendSwiper) trendSwiper.destroy(true, true);
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
                                        <div className="slider__btn wow fadeInUp" data-wow-delay="1.2s">
                                            <a href="contact.html" className="tg-btn-1">
                                                <span>contact us</span>
                                                <svg preserveAspectRatio="none" viewBox="0 0 197 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className="cls-1" fillRule="evenodd" clipRule="evenodd"
                                                        d="M30.976 0.755987L0.75499 30.977L29.717 58.677H165.717L195.938 30.977L165.717 0.755987H30.976Z" stroke="white"
                                                        strokeWidth="1.5"></path>
                                                    <path className="cls-2" fillRule="evenodd" clipRule="evenodd"
                                                        d="M166.712 2.01899L196.933 30.98L166.712 58.68L188.118 29.719L166.712 2.01899Z" fill="white"></path>
                                                    <path className="cls-2" fillRule="evenodd" clipRule="evenodd"
                                                        d="M30.235 2.01899L0.0139923 30.977L30.235 58.677L8.82899 29.719L30.235 2.01899Z" fill="white"></path>
                                                </svg>
                                            </a>
                                        </div>
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
                        <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                            <div className="nft-item__box">
                                <div className="nft-item__thumb">
                                    <a href="shop-details.html"><img src="assets/img/nft/nft_img01.jpg" alt="img" /></a>
                                </div>
                                <div className="nft-item__content">
                                    <h4 className="title"><a href="shop-details.html">wolf gaming art</a></h4>
                                    <div className="nft-item__avatar">
                                        <div className="avatar-img">
                                            <a href="shop-details.html"><img src="assets/img/nft/nft_avatar.png" alt="img" /></a>
                                        </div>
                                        <div className="avatar-name">
                                            <h5 className="name"><a href="shop-details.html">Alax Max</a></h5>
                                            <span className="designation">Creator</span>
                                        </div>
                                    </div>
                                    <div className="nft-item__bid">
                                        <div className="nft-item__price">
                                            <p>1.002 <span className="currency">Eth</span></p>
                                            <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                            <div className="nft-item__box">
                                <div className="nft-item__thumb">
                                    <a href="shop-details.html"><img src="assets/img/nft/nft_img02.jpg" alt="img" /></a>
                                </div>
                                <div className="nft-item__content">
                                    <h4 className="title"><a href="shop-details.html">Forest Princess</a></h4>
                                    <div className="nft-item__avatar">
                                        <div className="avatar-img">
                                            <a href="shop-details.html"><img src="assets/img/nft/nft_avatar.png" alt="img" /></a>
                                        </div>
                                        <div className="avatar-name">
                                            <h5 className="name"><a href="shop-details.html">Alax Max</a></h5>
                                            <span className="designation">Creator</span>
                                        </div>
                                    </div>
                                    <div className="nft-item__bid">
                                        <div className="nft-item__price">
                                            <p>1.053 <span className="currency">Eth</span></p>
                                            <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                            <div className="nft-item__box">
                                <div className="nft-item__thumb">
                                    <a href="shop-details.html"><img src="assets/img/nft/nft_img03.jpg" alt="img" /></a>
                                </div>
                                <div className="nft-item__content">
                                    <h4 className="title"><a href="shop-details.html">girl firefly art</a></h4>
                                    <div className="nft-item__avatar">
                                        <div className="avatar-img">
                                            <a href="shop-details.html"><img src="assets/img/nft/nft_avatar.png" alt="img" /></a>
                                        </div>
                                        <div className="avatar-name">
                                            <h5 className="name"><a href="shop-details.html">Alax Max</a></h5>
                                            <span className="designation">Creator</span>
                                        </div>
                                    </div>
                                    <div className="nft-item__bid">
                                        <div className="nft-item__price">
                                            <p>1.024 <span className="currency">Eth</span></p>
                                            <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- NFT-item-area-end --> */}

            {/* <!-- area-background-start --> */}
            <div className="area-background" data-background="assets/img/bg/area_bg01.jpg">

                {/* <!-- about-area --> */}
                <section className="about__area section-pt-130 section-pb-130">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-7 col-md-10">
                                <div className="section__title text-center mb-60">
                                    <span className="sub-title tg__animate-text">know about us</span>
                                    <h3 className="title">top rated steamers</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="about__tab-wrap">
                                    <div className="about__buttons">
                                        <a href="shop.html" className="tg-btn-2">
                                            buy Hero
                                            <svg preserveAspectRatio="none" viewBox="0 0 167 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M166 1H1V52H166V1Z" strokeWidth="2"></path>
                                                <path d="M166 22L161 27L166 33" strokeWidth="2"></path>
                                                <path d="M166 14L154 28L166 40" strokeWidth="2"></path>
                                                <path d="M8 1V21" strokeWidth="2"></path>
                                                <path d="M159 1V22" strokeWidth="2"></path>
                                                <path d="M159 33V52" strokeWidth="2"></path>
                                                <path d="M8 34V52" strokeWidth="2"></path>
                                                <path d="M1 22L8 27L1 33" strokeWidth="2"></path>
                                                <path d="M1 14L15 28L1 40" strokeWidth="2"></path>
                                            </svg>
                                        </a>
                                        <a href="shop.html" className="tg-btn-2 -secondary">
                                            buy nfts
                                            <svg preserveAspectRatio="none" viewBox="0 0 167 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M166 1H1V52H166V1Z" strokeWidth="2"></path>
                                                <path d="M166 22L161 27L166 33" strokeWidth="2"></path>
                                                <path d="M166 14L154 28L166 40" strokeWidth="2"></path>
                                                <path d="M8 1V21" strokeWidth="2"></path>
                                                <path d="M159 1V22" strokeWidth="2"></path>
                                                <path d="M159 33V52" strokeWidth="2"></path>
                                                <path d="M8 34V52" strokeWidth="2"></path>
                                                <path d="M1 22L8 27L1 33" strokeWidth="2"></path>
                                                <path d="M1 14L15 28L1 40" strokeWidth="2"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="about01-tab" data-bs-toggle="tab" data-bs-target="#about01" type="button" role="tab" aria-controls="about01" aria-selected="true"><span className="img-shape"></span><img src="assets/img/others/about_tab01.png" alt="img" /></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="about02-tab" data-bs-toggle="tab" data-bs-target="#about02" type="button" role="tab" aria-controls="about02" aria-selected="false"><span className="img-shape"></span><img src="assets/img/others/about_tab02.png" alt="img" /></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="about03-tab" data-bs-toggle="tab" data-bs-target="#about03" type="button" role="tab" aria-controls="about03" aria-selected="false"><span className="img-shape"></span><img src="assets/img/others/about_tab03.png" alt="img" /></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="about04-tab" data-bs-toggle="tab" data-bs-target="#about04" type="button" role="tab" aria-controls="about04" aria-selected="false"><span className="img-shape"></span><img src="assets/img/others/about_tab04.png" alt="img" /></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="about05-tab" data-bs-toggle="tab" data-bs-target="#about05" type="button" role="tab" aria-controls="about05" aria-selected="false"><span className="img-shape"></span><img src="assets/img/others/about_tab05.png" alt="img" /></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="about06-tab" data-bs-toggle="tab" data-bs-target="#about06" type="button" role="tab" aria-controls="about06" aria-selected="false"><span className="img-shape"></span><img src="assets/img/others/about_tab06.png" alt="img" /></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane show active" id="about01" role="tabpanel" aria-labelledby="about01-tab">
                                <div className="row justify-content-center">
                                    <div className="col-xl-5 col-lg-10">
                                        <div className="about__img">
                                            <img src="assets/img/others/about_img01.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-10">
                                        <div className="about__flex-wrap">
                                            <div className="about__content-wrap">
                                                <div className="about__content">
                                                    <h4 className="title">human game</h4>
                                                    <span className="rate">rate 50%</span>
                                                    <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                                </div>
                                                <div className="about__content-list">
                                                    <ul className="list-wrap">
                                                        <li><img src="assets/img/icons/features_icon01.png" alt="img" /> Chichi Dragon Ball</li>
                                                        <li><img src="assets/img/icons/features_icon02.png" alt="img" /> Space Babe Night</li>
                                                        <li><img src="assets/img/icons/features_icon03.png" alt="img" /> Dragon Ball</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="about__btn-wrap">
                                                <ul className="list-wrap">
                                                    <li><a href="shop-details.html">Dragon Ball</a></li>
                                                    <li><a href="shop.html">nft market</a></li>
                                                    <li><a href="contact">support</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="about02" role="tabpanel" aria-labelledby="about02-tab">
                                <div className="row justify-content-center">
                                    <div className="col-xl-5 col-lg-10">
                                        <div className="about__img">
                                            <img src="assets/img/others/about_img02.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-10">
                                        <div className="about__flex-wrap">
                                            <div className="about__content-wrap">
                                                <div className="about__content">
                                                    <h4 className="title">Axie Infinity</h4>
                                                    <span className="rate">rate 60%</span>
                                                    <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                                </div>
                                                <div className="about__content-list">
                                                    <ul className="list-wrap">
                                                        <li><img src="assets/img/icons/features_icon01.png" alt="img" /> Chichi Dragon Ball</li>
                                                        <li><img src="assets/img/icons/features_icon02.png" alt="img" /> Space Babe Night</li>
                                                        <li><img src="assets/img/icons/features_icon03.png" alt="img" /> Dragon Ball</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="about__btn-wrap">
                                                <ul className="list-wrap">
                                                    <li><a href="shop-details.html">Dragon Ball</a></li>
                                                    <li><a href="shop.html">nft market</a></li>
                                                    <li><a href="contact">support</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="about03" role="tabpanel" aria-labelledby="about03-tab">
                                <div className="row justify-content-center">
                                    <div className="col-xl-5 col-lg-10">
                                        <div className="about__img">
                                            <img src="assets/img/others/about_img03.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-10">
                                        <div className="about__flex-wrap">
                                            <div className="about__content-wrap">
                                                <div className="about__content">
                                                    <h4 className="title">The Walking Dead</h4>
                                                    <span className="rate">rate 75%</span>
                                                    <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                                </div>
                                                <div className="about__content-list">
                                                    <ul className="list-wrap">
                                                        <li><img src="assets/img/icons/features_icon01.png" alt="img" /> Chichi Dragon Ball</li>
                                                        <li><img src="assets/img/icons/features_icon02.png" alt="img" /> Space Babe Night</li>
                                                        <li><img src="assets/img/icons/features_icon03.png" alt="img" /> Dragon Ball</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="about__btn-wrap">
                                                <ul className="list-wrap">
                                                    <li><a href="shop-details.html">Dragon Ball</a></li>
                                                    <li><a href="shop.html">nft market</a></li>
                                                    <li><a href="contact">support</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="about04" role="tabpanel" aria-labelledby="about04-tab">
                                <div className="row justify-content-center">
                                    <div className="col-xl-5 col-lg-10">
                                        <div className="about__img">
                                            <img src="assets/img/others/about_img04.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-10">
                                        <div className="about__flex-wrap">
                                            <div className="about__content-wrap">
                                                <div className="about__content">
                                                    <h4 className="title">The Dogami</h4>
                                                    <span className="rate">rate 65%</span>
                                                    <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                                </div>
                                                <div className="about__content-list">
                                                    <ul className="list-wrap">
                                                        <li><img src="assets/img/icons/features_icon01.png" alt="img" /> Chichi Dragon Ball</li>
                                                        <li><img src="assets/img/icons/features_icon02.png" alt="img" /> Space Babe Night</li>
                                                        <li><img src="assets/img/icons/features_icon03.png" alt="img" /> Dragon Ball</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="about__btn-wrap">
                                                <ul className="list-wrap">
                                                    <li><a href="shop-details.html">Dragon Ball</a></li>
                                                    <li><a href="shop.html">nft market</a></li>
                                                    <li><a href="contact">support</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="about05" role="tabpanel" aria-labelledby="about05-tab">
                                <div className="row justify-content-center">
                                    <div className="col-xl-5 col-lg-10">
                                        <div className="about__img">
                                            <img src="assets/img/others/about_img05.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-10">
                                        <div className="about__flex-wrap">
                                            <div className="about__content-wrap">
                                                <div className="about__content">
                                                    <h4 className="title">The Sandbox</h4>
                                                    <span className="rate">rate 75%</span>
                                                    <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                                </div>
                                                <div className="about__content-list">
                                                    <ul className="list-wrap">
                                                        <li><img src="assets/img/icons/features_icon01.png" alt="img" /> Chichi Dragon Ball</li>
                                                        <li><img src="assets/img/icons/features_icon02.png" alt="img" /> Space Babe Night</li>
                                                        <li><img src="assets/img/icons/features_icon03.png" alt="img" /> Dragon Ball</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="about__btn-wrap">
                                                <ul className="list-wrap">
                                                    <li><a href="shop-details.html">Dragon Ball</a></li>
                                                    <li><a href="shop.html">nft market</a></li>
                                                    <li><a href="contact">support</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="about06" role="tabpanel" aria-labelledby="about06-tab">
                                <div className="row justify-content-center">
                                    <div className="col-xl-5 col-lg-10">
                                        <div className="about__img">
                                            <img src="assets/img/others/about_img06.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-10">
                                        <div className="about__flex-wrap">
                                            <div className="about__content-wrap">
                                                <div className="about__content">
                                                    <h4 className="title">Pegaxy Horses</h4>
                                                    <span className="rate">rate 85%</span>
                                                    <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                                </div>
                                                <div className="about__content-list">
                                                    <ul className="list-wrap">
                                                        <li><img src="assets/img/icons/features_icon01.png" alt="img" /> Chichi Dragon Ball</li>
                                                        <li><img src="assets/img/icons/features_icon02.png" alt="img" /> Space Babe Night</li>
                                                        <li><img src="assets/img/icons/features_icon03.png" alt="img" /> Dragon Ball</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="about__btn-wrap">
                                                <ul className="list-wrap">
                                                    <li><a href="shop-details.html">Dragon Ball</a></li>
                                                    <li><a href="shop.html">nft market</a></li>
                                                    <li><a href="contact">support</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- about-area-end --> */}

                {/* <!-- gallery-area --> */}
                <section className="gallery__area fix section-pb-130">
                    <div className="gallery__slider">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-9 col-lg-10 col-md-11">
                                    <div className="swiper-container gallery-active">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="gallery__item">
                                                    <div className="gallery__thumb">
                                                        <a href="assets/img/gallery/gallery01.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" className="popup-image" title="PUBG Tournament"><img src="assets/img/gallery/gallery01.jpg" alt="img" /></a>
                                                    </div>
                                                    <div className="gallery__content">
                                                        <h3 className="title">pubg tournament</h3>
                                                        <span className="rate">rate 50%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="gallery__item">
                                                    <div className="gallery__thumb">
                                                        <a href="assets/img/gallery/gallery02.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" className="popup-image" title="Assassin's Creed"><img src="assets/img/gallery/gallery02.jpg" alt="img" /></a>
                                                    </div>
                                                    <div className="gallery__content">
                                                        <h3 className="title">Assassin's Creed</h3>
                                                        <span className="rate">rate 65%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="gallery__item">
                                                    <div className="gallery__thumb">
                                                        <a href="assets/img/gallery/gallery03.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" className="popup-image" title="World of Warcraft"><img src="assets/img/gallery/gallery03.jpg" alt="img" /></a>
                                                    </div>
                                                    <div className="gallery__content">
                                                        <h3 className="title">World of Warcraft</h3>
                                                        <span className="rate">rate 60%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="gallery__item">
                                                    <div className="gallery__thumb">
                                                        <a href="assets/img/gallery/gallery04.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" className="popup-image" title="The Chant 2"><img src="assets/img/gallery/gallery04.jpg" alt="img" /></a>
                                                    </div>
                                                    <div className="gallery__content">
                                                        <h3 className="title">The Chant s.2</h3>
                                                        <span className="rate">rate 70%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="gallery__item">
                                                    <div className="gallery__thumb">
                                                        <a href="assets/img/gallery/gallery05.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" className="popup-image" title="Dota 2 tournament"><img src="assets/img/gallery/gallery05.jpg" alt="img" /></a>
                                                    </div>
                                                    <div className="gallery__content">
                                                        <h3 className="title">Dota 2 tournament</h3>
                                                        <span className="rate">rate 85%</span>
                                                    </div>
                                                </div>
                                            </div>
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

            {/* <!-- video-area --> */}
            <section className="video__area video-bg tg-jarallax" data-background="assets/img/bg/video_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-11">
                            <div className="video__content text-center">
                                <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className="popup-video"><i className="flaticon-play"></i></a>
                                <h2 className="title">JOIN THE <span>COMMUNITY</span></h2>
                                <p>Join our Discord community and choosec onsteur</p>
                                <a href="https://discord.com/" target="_blank" className="video__btn tg-btn-1">
                                    <span>join discord</span>
                                    <svg preserveAspectRatio="none" viewBox="0 0 197 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="cls-1" fillRule="evenodd" clipRule="evenodd"
                                            d="M30.976 0.755987L0.75499 30.977L29.717 58.677H165.717L195.938 30.977L165.717 0.755987H30.976Z" stroke="white"
                                            strokeWidth="1.5"></path>
                                        <path className="cls-2" fillRule="evenodd" clipRule="evenodd"
                                            d="M166.712 2.01899L196.933 30.98L166.712 58.68L188.118 29.719L166.712 2.01899Z" fill="white"></path>
                                        <path className="cls-2" fillRule="evenodd" clipRule="evenodd"
                                            d="M30.235 2.01899L0.0139923 30.977L30.235 58.677L8.82899 29.719L30.235 2.01899Z" fill="white"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- video-area-end --> */}

            {/* <!-- roadMap-area --> */}
            <section className="roadMap__area roadMap-bg section-pt-150 section-pb-150" data-background="assets/img/bg/roadmap_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="roadMap__inner">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-6">
                                        <div className="roadMap__content">
                                            <h2 className="title">a look into roadmaps seasons</h2>
                                            <p>With Season 1 Ending with our play and Duis elementum sollicitudin is yaugue euismods Nulla ulla Player-focused updates games from Mobile App and Enjoy.</p>
                                            <a href="contact.html" className="tg-btn-1 -btn-yellow">
                                                <span>roadmap</span>
                                                <svg preserveAspectRatio="none" viewBox="0 0 197 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className="cls-1" fillRule="evenodd" clipRule="evenodd"
                                                        d="M30.976 0.755987L0.75499 30.977L29.717 58.677H165.717L195.938 30.977L165.717 0.755987H30.976Z" stroke="white"
                                                        strokeWidth="1.5"></path>
                                                    <path className="cls-2" fillRule="evenodd" clipRule="evenodd"
                                                        d="M166.712 2.01899L196.933 30.98L166.712 58.68L188.118 29.719L166.712 2.01899Z" fill="white"></path>
                                                    <path className="cls-2" fillRule="evenodd" clipRule="evenodd"
                                                        d="M30.235 2.01899L0.0139923 30.977L30.235 58.677L8.82899 29.719L30.235 2.01899Z" fill="white"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="roadMap__img">
                                            <img src="assets/img/others/roadmap.png" className="tg-parallax" data-scale="1.5" data-orientation="down" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-6">
                                        <div className="roadMap__steps-wrap">
                                            <div className="roadMap__steps-item active">
                                                <h3 className="title">season 1</h3>
                                                <ul className="roadMap__list list-wrap">
                                                    <li className="active tg__animate-text style2">Battle Practice Mode</li>
                                                    <li className="active tg__animate-text style2">Android Mobile</li>
                                                    <li className="active tg__animate-text style2">iOS Open Beta</li>
                                                    <li className="active tg__animate-text style2">Land Creation & Building</li>
                                                </ul>
                                                <img src="assets/img/others/roadmap_img.png" alt="img" className="roadMap__steps-img" />
                                            </div>
                                            <div className="roadMap__steps-item">
                                                <h3 className="title">season 2</h3>
                                                <ul className="roadMap__list list-wrap">
                                                    <li className="active tg__animate-text style2">Land Creation & Building</li>
                                                    <li className="active tg__animate-text style2">Android Mobile</li>
                                                    <li className="tg__animate-text style2">iOS Open Beta</li>
                                                    <li className="tg__animate-text style2">Land Creation & Building</li>
                                                </ul>
                                                <img src="assets/img/others/roadmap_img.png" alt="img" className="roadMap__steps-img" />
                                            </div>
                                            <div className="roadMap__steps-item">
                                                <h3 className="title">season 3</h3>
                                                <ul className="roadMap__list list-wrap">
                                                    <li className="tg__animate-text style2">Switch to 3D gameplay</li>
                                                    <li className="tg__animate-text style2">Android Mobile</li>
                                                    <li className="tg__animate-text style2">iOS Open Beta</li>
                                                    <li className="tg__animate-text style2">Land Creation & Building</li>
                                                </ul>
                                                <img src="assets/img/others/roadmap_img.png" alt="img" className="roadMap__steps-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- roadMap-area-end --> */}

            {/* <!-- trending-nft-area --> */}
            <section className="trendingNft-area section-pt-120 section-pb-90">
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
            </section>
            {/* <!-- trending-nft-end --> */}

        </main>
    )
}

export default Home