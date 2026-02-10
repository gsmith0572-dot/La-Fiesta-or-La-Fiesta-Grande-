import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => (
    <section className="testimonials-section">
        <div className="container">
            <div className="testimonials-header">
                <span className="pink-subtitle">OUR TESTIMONIALS</span>
            </div>
            <div className="testimonial-content">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="testimonial-image left"
                >
                    <img src="https://storage.googleapis.com/msgsndr/D9Ds50PE4uqbk7RnmNqn/media/68f1595af9ab537d966f7338.jpeg" alt="Margarita" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="testimonial-text"
                >
                    <p className="testimonial-quote">
                        "Before finding your restaurant, I thought I knew Mexican food, but I was wrong. This is, without a doubt, the most <span className="highlight">authentic and vibrant cuisine</span> I've tasted outside of Mexico City. We started with the <span className="highlight">Ricky's Dip</span>—they were creamy and perfectly spiced—and then moved on to the main event. My partner raved about the <span className="highlight">Barbacoa Tacos</span>; the meat was unbelievably tender and smoky. I had the <span className="highlight">Chile Relleno</span>, and the balance of the fresh pepper, cheese, and delicate sauce was pure perfection. The atmosphere is warm, the service is friendly, and you can tell every ingredient is chosen with care. If you are looking for the <em>real deal</em>, you need to make this your next dinner reservation. We are already planning our next visit to try the Mole!"
                    </p>
                    <p className="testimonial-author">— Miguel R. (Local Food Enthusiast)</p>
                    <button className="btn-birthday">Claim Your Free Birthday Desert</button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="testimonial-image right"
                >
                    <img src="https://storage.googleapis.com/msgsndr/D9Ds50PE4uqbk7RnmNqn/media/68f156d4ec764f72c1c3840d.jpeg" alt="Guacamole" />
                </motion.div>
            </div>
        </div>
    </section>
);

export default Testimonials;
