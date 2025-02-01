import React from 'react';
import './Blog.css';

import Image1 from '../../assets/TopWebsite.png';
import Image2 from '../../assets/HandleForm.jpg';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    
                        <div className="blog__thumb">
                        <a href="https://medium.com/@pradeepvijay3568/top-10-inspiring-websites-8c0e3fd64d3f"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Top 10 Inspiration Website</h3>
                    </div>
                        
                    
                    
                </div>
                <div className="blog__card">
                    
                    <div className="blog__thumb">
                    <a href="https://medium.com/@pradeepvijay3568/handling-forms-in-react-bc1e10df73dfhttps://medium.com/@pradeepvijay3568/handling-forms-in-react-bc1e10df73df"><img src={Image2} alt="" className='blog__img' /></a>
                </div>
                <div className="blog__details">
                    <h3 className="blog__title">Handle Forms in React</h3>
                </div>
                    
                
                
            </div>
            </div>
        </section>
    )
}

export default Blog