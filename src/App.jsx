import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Clock, MapPin, Phone, Utensils, Star, Instagram, Facebook, ChevronDown } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import OfferDetail from './OfferDetail';
import { OFFERS_DATA } from './data';
import './App.css';
import './FAQs.css';
import Testimonials from './Testimonials';
import GetInTouch from './GetInTouch';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => (
  <nav className="navbar banner-background">
    <div className="container nav-content">
      <div className="logo-container">
        <Link to="/">
          <img src="https://storage.googleapis.com/msgsndr/D9Ds50PE4uqbk7RnmNqn/media/68f04f28cb9454ac98b4baef.png" alt="La Fiesta Grande Logo" className="header-logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-btn">Menu</Link>
        <Link to="/" className="nav-btn">About</Link>
        <button className="btn-order">Order Online</button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="culinary-hero">
    <div className="culinary-content">
      <div className="text-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Savor Authentic Mexican Flavors:<br />Our Culinary Masterpieces
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience the vibrant and rich tapestry of Mexican cuisine with every bite at our restaurant. Our talented chefs craft each dish with care, using traditional recipes passed down through generations. From savory tacos to zesty salsas, our menu is a symphony of flavors that will transport your taste buds straight to Mexico.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="btn-birthday">Claim Your Free Birthday Desert</button>
        </motion.div>
      </div>
    </div>
  </section>
);

const AboutDetail = () => (
  <section className="about-detail">
    <div className="detail-content">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="detail-text"
      >
        <span className="pink-subtitle">MORE ABOUT US</span>
        <h3>Our Passion for Authentic Mexican Cuisine</h3>
        <p>Our culinary adventure is a reflection of our commitment to authenticity. We believe that the essence of Mexican cuisine lies in the use of fresh, locally sourced ingredients, time-honored recipes, and a dedication to preserving the rich culinary heritage of Mexico. Our chefs, who are not just culinary experts but also keepers of tradition, pour their hearts into each dish they create.</p>
        <button className="btn-birthday">Claim Your Free Birthday Desert</button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="detail-image"
      >
        <img src="https://storage.googleapis.com/msgsndr/D9Ds50PE4uqbk7RnmNqn/media/68f156164711d59095d441ff.jpeg" alt="Authentic Mexican Dish" />
      </motion.div>
    </div>
  </section>
);

const WhatWeOffer = () => (
  <section className="offers-section">
    <div className="container">
      <div className="offers-header">
        <span className="pink-subtitle">WHAT WE OFFER</span>
      </div>
      <div className="offers-grid">
        {OFFERS_DATA.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="offer-card"
          >
            <div className="offer-image">
              <img src={offer.image} alt={offer.title} />
            </div>
            <div className="offer-content">
              <h3>{offer.title}</h3>
              <p>{offer.shortDesc}</p>
              <Link to={`/offer/${offer.id}`} className="read-more">Read More</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="feature-card glass-panel"
  >
    <div className="icon-box">
      <Icon size={24} />
    </div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </motion.div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="faq-answer"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  const faqs = [
    {
      question: "Do you take reservations, or is it walk-in only?",
      answer: "We welcome both! To guarantee your table—especially on weekends or during events—we recommend reserving ahead of time through our online booking form or by calling us directly. Walk-ins are always welcome when space allows."
    },
    {
      question: "Do you offer vegetarian or gluten-free options?",
      answer: "Absolutely. Our menu includes several vegetarian and gluten-free dishes, from grilled vegetable fajitas to fresh guacamole prepared tableside. Just let your server know about any dietary preferences, and we'll be happy to guide you through the best options."
    },
    {
      question: "Can I order online for pickup or delivery?",
      answer: "Yes! You can place your order right here on our website for fast pickup or delivery. We prepare every dish fresh—so you'll get the same bold flavors you'd enjoy in the restaurant, ready to enjoy at home or the office."
    },
    {
      question: "Do you host private events or large groups?",
      answer: "We love celebrations! Whether it's a birthday, anniversary, or company gathering, we can accommodate groups of all sizes. Our private dining area and special group menus make hosting easy. Just contact our events team to plan your fiesta."
    },
    {
      question: "Where do you source your ingredients?",
      answer: "We believe authentic flavor starts with quality. Our chefs use locally sourced produce and imported Mexican spices, chilies, and cheeses to ensure every dish reflects the true spirit of Mexico—fresh, vibrant, and full of life."
    }
  ];

  return (
    <section className="faqs-section">
      <div className="container">
        <div className="faqs-header">
          <span className="pink-subtitle">FAQS</span>
        </div>
        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => (
  <main>
    <Hero />
    <AboutDetail />
    <WhatWeOffer />
    <FAQs />
    <Testimonials />
    <GetInTouch />
  </main>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<OfferDetail />} />
        </Routes>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="https://storage.googleapis.com/msgsndr/D9Ds50PE4uqbk7RnmNqn/media/68f04f28cb9454ac98b4baef.png" alt="La Fiesta Grande Logo" />
            </div>
            <div className="footer-info">
              <p><strong>Email:</strong> info@lafiestanatchez.com</p>
              <p><strong>Phone:</strong> (601) 445 0720</p>
              <p><strong>Address:</strong> 288 John R Junkin Dr, Natchez, MS 39120</p>
            </div>
            <div className="footer-social">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 La Fiesta Grande Natchez. All rights reserved.</p>
            <p className="footer-credit">
              Website by <a href="https://klickifyagency.com/" target="_blank" rel="noopener noreferrer">Klickify Agency™</a>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
