import React from 'react';
import { motion } from 'framer-motion';
import './GetInTouch.css';

const GetInTouch = () => (
    <section className="get-in-touch-section">
        <div className="get-in-touch-content">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="contact-info"
            >
                <h2 className="contact-title">Get In Touch</h2>
                <div className="contact-details">
                    <p className="contact-item"><strong>Phone:</strong> (601) 445 0720</p>
                    <p className="contact-item"><strong>Email:</strong> info@lafiestanatchez.com</p>
                    <p className="contact-hours"><strong>Monday to Sunday: 11:00am – 10:00pm</strong></p>
                    <p className="contact-subtext">Fridays and Saturdays we are open until 11:00pm</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="contact-image"
            >
                <img src="https://storage.googleapis.com/msgsndr/D9Ds50PE4uqbk7RnmNqn/media/68f1528bd82b8e1f4de19e45.jpeg" alt="Delicious Mexican Tacos" />
            </motion.div>
        </div>
    </section>
);

export default GetInTouch;
