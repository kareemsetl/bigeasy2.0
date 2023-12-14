import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { staggerReveal, staggerRevealClose, onHover, onHoverOut } from './Animations';

const Navbar = () => {
    const [isEditionOpen, setIsEditionOpen] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const editionRef = useRef(null);
    const categoriesRef = useRef(null);
    const router = useRouter();

    // Editions array
    const editions = [
        "December 2019", "October 2019", "September 2019", "August 2019",
        "July 2019", "June 2019", "May 2019", "April 2019", "March 2019",
        "February 2019", "January 2019", "December 2018", "November 2018",
        "October 2018", "September 2018", "August 2018", "July 2018", "June 2018"
    ];
    const categories = [
        "Politics", "Economy", "Health Care", "Social Issues",
        "Culture-Lifestyle", "Art", "Film", "Food", "Music",
        "The Progressive's Weekend", "The Progressive's Lifestyle in New Orleans",
        "Environment", "Air & Water Quality", "Coastal Restoration", "Op-Ed-Lagniappe", "Sports"
    ];
    const handleEditionHover = () => {
        setIsEditionOpen(true);
        staggerReveal(editionRef.current);
    };

    const handleEditionLeave = () => {
        setIsEditionOpen(false);
        staggerRevealClose(editionRef.current);
    };
    const handleCategoriesHover = () => {
        setIsCategoriesOpen(true);
        staggerReveal(categoriesRef.current);
    };

    const handleCategoriesLeave = () => {
        setIsCategoriesOpen(false);
        staggerRevealClose(categoriesRef.current);
    };

    const navigateTo = (path: string) => {
        void router.push(path);
    };

    return (
        <nav className="bg-purple-950 text-slate-400 flex items-center justify-between p-4">
            <div className="logo mr-12">LOGO</div>
            <ul className="flex flex-grow justify-between">
                <li></li>
                <li></li>
                <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut} onClick={() => navigateTo('/')}>Home</li>
                <li className="navbar-item relative"
                    onMouseEnter={handleEditionHover}
                    onMouseLeave={handleEditionLeave}>
                    Editions
                    <ul ref={editionRef} className={`absolute bg-purple-950 ${isEditionOpen ? 'block' : 'hidden'} left-1/2 transform -translate-x-1/2 whitespace-nowrap`}>
                        {editions.map((edition) => (
                            <li key={edition}
                                className="edition-item hover:bg-purple-900 text-sm p-2 whitespace-nowrap"
                                onMouseEnter={onHover}
                                onMouseLeave={onHoverOut}
                                onClick={() => navigateTo(`/category/monthly/${edition.replace(/\s+/g, '-')}`)}>
                                {edition}
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="navbar-item relative"
                    onMouseEnter={handleCategoriesHover}
                    onMouseLeave={handleCategoriesLeave}>
                    Categories
                    <ul ref={categoriesRef} className={`absolute bg-purple-950 ${isCategoriesOpen ? 'block' : 'hidden'} left-1/2 transform -translate-x-1/2 whitespace-nowrap`}>
                        {categories.map((category) => (
                            <li key={category}
                                className="category-item hover:bg-purple-900 text-sm p-2 whitespace-nowrap"
                                onMouseEnter={onHover}
                                onMouseLeave={onHoverOut}
                                onClick={() => navigateTo(`/category/${category.replace(/\s+/g, '-')}`)}>
                                {category}
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut} onClick={() => navigateTo('/shop')}>Shop</li>
                <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut} onClick={() => navigateTo('/support-us')}>Support Us</li>
                <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut} onClick={() => navigateTo('/advertise')}>Advertise</li>
                <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut} onClick={() => navigateTo('/about-us')}>About Us</li>
                <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut} onClick={() => navigateTo('/contact')}>Contact</li>
                <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut} onClick={() => navigateTo('/things-to-do')}>Things to Do</li>
            </ul>
        </nav>
    );
};

export default Navbar;
