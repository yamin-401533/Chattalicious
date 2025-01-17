import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const scroll = (direction) => {
        const container = document.querySelector('.menu-list');
        const scrollAmount = 300;
        
        if (container) {
            if (direction === 'left') {
                container.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
                setScrollPosition(Math.max(0, scrollPosition - scrollAmount));
            } else {
                container.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
                setScrollPosition(scrollPosition + scrollAmount);
            }
        }
    };

    return (
        <div className="explore-menu" id="explore-menu">
            <h1>Explore Our Menu</h1>
            <p className="explore-menu-text">
                Discover our delicious selection of dishes and find your new favorite meal!
            </p>
            
            <div className="menu-container">
                <button 
                    onClick={() => scroll('left')}
                    className="slider-button left-button"
                    style={{
                        opacity: scrollPosition <= 0 ? 0.5 : 1,
                        cursor: scrollPosition <= 0 ? 'default' : 'pointer'
                    }}
                >
                    <ChevronLeft className="chevron" />
                </button>

                <div className="menu-list">
                    {menu_list.map((item, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => setCategory(item.menu_name)}
                                className={`menu-item ${
                                    category === item.menu_name ? 'active' : ''
                                }`}
                            >
                                <img src={item.menu_image} alt={item.menu_name} />
                                <p>{item.menu_name}</p>
                            </div>
                        );
                    })}
                </div>

                <button 
                    onClick={() => scroll('right')}
                    className="slider-button right-button"
                >
                    <ChevronRight className="chevron" />
                </button>
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;