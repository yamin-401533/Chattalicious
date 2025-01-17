import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import LoginPopup from '../../components/LoginPopup/LoginPopup';
import Navbar from '../../components/Navbar/Navbar';
import Contact from '../../components/Contact/Contact'; // Import the Contact component

const Home = () => {
    const [category, setCategory] = useState("All");
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div>
            {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
            <Navbar setShowLogin={setShowLogin} />
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            <AppDownload />
            <Contact /> {/* Add the Contact component */}
        </div>
    );
}

export default Home;