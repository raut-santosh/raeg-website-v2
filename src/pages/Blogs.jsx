import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ApiService from '../services/ApiService';
import { formatDateMonthDateYear, truncateText } from '../utils/utils';

const apiService = new ApiService()
const apiUrl = process.env.apiUrl

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [countCatsData, setCountCatsData] = useState([]);

    // Function to get category counts based on blogs
    const getCategoryCounts = (categories, blogs) => {
        const categoryMap = new Map();

        // Initialize map with categories, setting count to 0
        categories.forEach((cat) => {
            categoryMap.set(cat.id, { id: cat.id, name: cat.name, count: 0 });
        });

        // Count occurrences of each category in blogs
        blogs.forEach((blog) => {
            if (categoryMap.has(blog.category)) {
                categoryMap.get(blog.category).count += 1;
            }
        });

        // Return category counts as an array
        return Array.from(categoryMap.values());
    };

    // Fetch data and update state
    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogResponse = await apiService.get('blogs');
                const categoriesResponse = await apiService.get('categories');

                const sortedBlogs = blogResponse.data.sort((a, b) => {
                    const dateA = a.date_updated || a.date_created;
                    const dateB = b.date_updated || b.date_created;

                    if (!dateA) return 1; // If no date, place it at the end
                    if (!dateB) return -1;

                    return new Date(dateB) - new Date(dateA); // Sorting in descending order
                });

                setBlogs(sortedBlogs);
                setCategories(categoriesResponse.data);

                // Calculate category counts only when both blogs and categories are fetched
                const categoryCounts = getCategoryCounts(categoriesResponse.data, blogResponse.data);
                setCountCatsData(categoryCounts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const recentBlogs = blogs.slice(0, 3);
    return (
        <main className="main--area">

            {/* <!-- breadcrumb-area --> */}
            <section className="breadcrumb-area breadcrumb__hide-img" data-background="assets/img/bg/breadcrumb_bg02.jpg">
                <div className="container">
                    <div className="breadcrumb__wrapper">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb__content">
                                    <h2 className="title">blog standard</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">blog list</li>
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
                            {blogs.map((blog) => (
                                <div key={blog.slug} className="blog-post-item">
                                    <div className="blog-post-thumb">
                                        <Link to={'/blogs/' + blog.slug}><img src={apiUrl + '/assets/' + blog.featured_image} alt="img" /></Link>
                                    </div>
                                    <div className="blog-post-content">
                                        <div className="blog-post-meta">
                                            <ul className="list-wrap">
                                                <li>By<a href="#">Admin</a></li>
                                                <li><i className="far fa-calendar-alt"></i>{blog.date_updated ? formatDateMonthDateYear(blog.date_updated) : formatDateMonthDateYear(blog.date_created)}</li>
                                                <li><i className="far fa-comments"></i><a href="#">No comments</a></li>
                                            </ul>
                                        </div>
                                        <h2 className="title"><Link to={'/blogs/' + blog.slug}>{blog.title}</Link></h2>
                                        <div dangerouslySetInnerHTML={{ __html: truncateText(blog.post, 300) }}></div>
                                        <div className="blog-post-bottom">
                                            <div className="blog-post-read">
                                                <Link to={'/blogs/' + blog.slug}>READ MORE <i className="fas fa-arrow-right"></i></Link>
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
                            ))}

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
                                    <form className="sidebar-search-form position-relative">
                                        <input type="text" placeholder="Search here.." />
                                        <button><i className="flaticon-loupe"></i></button>
                                    </form>
                                </div>
                                <div className="blog-widget widget_categories">
                                    <h4 className="fw-title">CATEGORIES</h4>
                                    <ul className="list-wrap">
                                        {countCatsData.map(category => (
                                            <li key={category.id}><Link to="#">{category.name}</Link><span className="float-right">{category.count}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="blog-widget">
                                    <h4 className="fw-title">Recent Posts</h4>
                                    <div className="rc__post-wrapper">
                                        {recentBlogs.map((blog) => (
                                        <div key={blog.slug} className="rc__post-item">
                                            <div className="rc__post-thumb">
                                                <Link to={'/blogs/'+blog.slug}><img src={apiUrl+'/assets/'+blog.featured_image} alt="img" /></Link>
                                            </div>
                                            <div className="rc__post-content">
                                                <h6 className="title"><Link to={'/blogs/'+blog.slug}>{blog.title}</Link></h6>
                                                <span className="date">{blog.date_updated ? formatDateMonthDateYear(blog.date_updated) : formatDateMonthDateYear(blog.date_created)}</span>
                                            </div>
                                        </div>
                                        ))}
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

export default Blogs