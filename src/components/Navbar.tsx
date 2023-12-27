import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { staggerReveal, staggerRevealClose, onHover, onHoverOut } from './Animations';
import { SignIn } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import { useUser } from "node_modules/@clerk/nextjs";
import Link from "next/link"

const Navbar = () => {
    const [isEditionOpen, setIsEditionOpen] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);


    const editionRef = useRef(null);
    const categoriesRef = useRef(null);
    const router = useRouter();
    const user = useUser();
    const [isScrolled, setIsScrolled] = useState(false);

    // Editions array
    const editions = [
        "December 2019", "October 2019", "September 2019", "August 2019",
        "July 2019", "June 2019", "May 2019", "April 2019", "March 2019",
        "February 2019", "January 2019", "December 2018", "November 2018",
        "October 2018", "September 2018", "August 2018", "July 2018", "June 2018"
    ];
    //Categories array
    const categories = [
        "Politics", "Economy", "Health Care", "Social Issues",
        "Culture-Lifestyle", "Art", "Film", "Food", "Music",
        "The Progressives Weekend", "The Progressives Lifestyle In New Orleans",
        "Environment", "Air And Water Quality", "Coastal Restoration", "Op Ed Lagniappe", "Sports"
    ];

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            const textBlock = document.querySelector('.text-block');
            const navItems = document.querySelector('.nav-items');
            const logo = document.querySelector('.logo');

            if (window.scrollY > 100) {
                if (navbar) navbar.classList.add('scrolled');
                if (textBlock) textBlock.classList.add('fade-out');
                if (navItems) navItems.classList.add('centered');
                if (logo) logo.classList.add('scrolled');
            } else {
                if (navbar) navbar.classList.remove('scrolled');
                if (textBlock) textBlock.classList.remove('fade-out');
                if (navItems) navItems.classList.remove('centered');
                if (logo) logo.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
        <nav className="bg-purple-950 text-slate-200 flex items-center justify-between p-1 navbar"
            style={{
                backgroundImage: 'url(https://bigeasymagazine.b-cdn.net/wp-content/uploads/2018/05/big-easy-magazine-in-new-orleans-50-1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: '50% 35%',
                position: 'fixed',
                top: 0,
                width: '100%'
            }}>
            <div style={{ height: '275px' }} className="ml-14 border-none">
                <img className="logo" style={{ maxHeight: '100%' }} src="https://www.bigeasymagazine.com/wp-content/uploads/2018/05/big-easy-main-logo-1.png" alt="Big Easy Magazine Logo" onClick={() => navigateTo('/')} />
            </div>
            <div className="flex flex-col flex-grow">
                <ul className="flex flex-grow justify-between text-base md:text-lg lg:text-lg nav-items">
                    <li></li>
                    <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut}>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="navbar-item relative"
                        onMouseEnter={handleEditionHover}
                        onMouseLeave={handleEditionLeave}>
                        Editions
                        <ul ref={editionRef} className={`nav-items absolute bg-purple-950 ${isEditionOpen ? 'block' : 'hidden'} left-1/2 transform -translate-x-1/2 whitespace-nowrap`}>
                            {editions.map((edition) => (
                                <Link href={`/category/monthly/${edition.replace(/\s+/g, '-')}`}>
                                <li key={edition}
                                    className="edition-item hover:bg-purple-900 text-sm p-2 whitespace-nowrap"
                                    onMouseEnter={onHover}
                                    onMouseLeave={onHoverOut}>
                                    
                                        {edition}
                                    
                                </li>
                                </Link>
                            ))}
                        </ul>
                    </li>
                    <li className="navbar-item relative"
                        onMouseEnter={handleCategoriesHover}
                        onMouseLeave={handleCategoriesLeave}>
                        Categories
                        <ul ref={categoriesRef} className={`nav-items absolute bg-purple-950 ${isCategoriesOpen ? 'block' : 'hidden'} left-1/2 transform -translate-x-1/2 whitespace-nowrap`}>
                            {categories.map((category) => (
                                <Link href={`/category/${category.replace(/\s+/g, '-')}`}>
                                <li key={category}
                                    className="category-item hover:bg-purple-900 text-sm p-2 whitespace-nowrap"
                                    onMouseEnter={onHover}
                                    onMouseLeave={onHoverOut}>
                                    
                                        {category}
                                    
                                </li>
                                </Link>
                            ))}
                        </ul>
                    </li>
                    <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut}>
                        <Link href="/shop">
                            Shop
                        </Link>
                    </li>
                    <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut}>
                        <Link href="/support">
                            Support Us
                        </Link>
                    </li>
                    <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut}>
                        <Link href="/advertise">
                            Advertise
                        </Link>
                    </li>
                    <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut}>
                        <Link href="/about">
                            About Us
                        </Link>
                    </li>
                    <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut}>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                    {!user.isSignedIn && <div className="flex justify-center">
                        <SignInButton /></div>}
                    {user.isSignedIn &&
                        <div className="flex justify-center">
                            <SignOutButton />
                        </div>
                    }
                    <li></li>
                    <li></li>
                </ul>
                <div className="text-center tracking-wider mt-10 text-2xl text-block">
                    <p>UNAPOLOGETICALLY PROGRESSIVE.</p>
                    <p><strong>UNIQUELY NEW ORLEANS.</strong></p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
