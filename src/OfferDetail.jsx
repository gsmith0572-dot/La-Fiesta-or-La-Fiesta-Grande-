import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { OFFERS_DATA } from './data';

const OfferDetail = () => {
    const { id } = useParams();
    const offer = OFFERS_DATA.find(o => o.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!offer) return <div>Offer not found</div>;

    return (
        <div className="offer-detail-page">
            <nav className="detail-nav">
                <div className="container">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={20} /> Back to Home
                    </Link>
                </div>
            </nav>

            <section className="detail-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="detail-wrapper"
                    >
                        <div className="detail-image-box">
                            <img src={offer.image} alt={offer.title} />
                        </div>
                        <div className="detail-text-box">
                            <span className="pink-subtitle">WHAT WE OFFER</span>
                            <h1>{offer.title}</h1>
                            <p className="lead">{offer.shortDesc}</p>
                            <div className="full-desc">
                                {offer.longDesc.split('\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            <button className="btn-birthday">Order Now</button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2025 La Fiesta Grande Natchez. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default OfferDetail;
