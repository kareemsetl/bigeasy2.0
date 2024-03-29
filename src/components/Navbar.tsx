import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { staggerReveal, staggerRevealClose, onHover, onHoverOut } from './Animations';
import { SignInButton } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import { useUser } from "node_modules/@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Button } from './ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "~/components/ui/select"
  

const Navbar = () => {
    const [isEditionOpen, setIsEditionOpen] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [isMobileNavOpen, setMobileNavIsOpen] = useState(false);
    const editionRef = useRef(null);
    const categoriesRef = useRef(null);
    const router = useRouter();
    const user = useUser();

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
        "Culture Lifestyle", "Art", "Film", "Food", "Music",
        "The Progressives Weekend", "The Progressives Lifestyle In New Orleans",
        "Environment", "Air And Water Quality", "Coastal Restoration", "Op Ed Lagniappe", "Sports"
    ];
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            const textBlock = document.querySelector('.text-block');
            const mobileTextBlock = document.querySelector('.mobile-text-block');
            const mobileItems = document.querySelector('.mobile-items');
            const navItems = document.querySelector('.nav-items');
            const logo = document.querySelector('.logo');

            if (window.scrollY > 100) {
                if (navbar) navbar.classList.add('scrolled');
                if (textBlock) textBlock.classList.add('fade-out');
                if (mobileTextBlock) mobileTextBlock.classList.add('fade-out');
                if (mobileItems) mobileItems.classList.add('scrolled');
                if (navItems) navItems.classList.add('centered');
                if (logo) logo.classList.add('scrolled');
            } else {
                if (navbar) navbar.classList.remove('scrolled');
                if (textBlock) textBlock.classList.remove('fade-out');
                if (mobileTextBlock) mobileTextBlock.classList.remove('fade-out');
                if (navItems) navItems.classList.remove('centered');
                if (mobileItems) mobileItems.classList.remove('scrolled');
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
        <nav className="bg-purple-950 text-slate-200 flex items-center justify-center p-1 navbar shadow-2xl"
            style={{
                backgroundImage: 'url(https://bigeasymagazine.b-cdn.net/wp-content/uploads/2018/05/big-easy-magazine-in-new-orleans-50-1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: '50% 35%',
                position: 'fixed',
                top: 0,
                width: '100%'
            }}>
            <div className="border-none hidden sm:block">
                <Image
                    className="logo"
                    src="https://www.bigeasymagazine.com/wp-content/uploads/2018/05/big-easy-main-logo-1.png"
                    alt="Big Easy Magazine Logo"
                    width={300} // Replace with the actual width of your image
                    height={300} // Replace with the actual height of your image
                    layout="fixed" // or 'fill', 'fixed', 'intrinsic', etc., based on your layout needs
                    onClick={() => navigateTo('/')}
                    style={{ maxHeight: '100%' }}
                />
            </div>


            {/** DESKTOP NAVBAR */}
            <div className="hidden text-center sm:flex sm:flex-col sm:flex-grow">
                <ul className="flex flex-grow justify-between text-base md:text-lg lg:text-lg nav-items">
                    <li></li>
                    <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut}>
                        <Link href="/">
                            <u>Home</u>
                        </Link>
                    </li>
                    <li className="navbar-item relative text-shadow-xl"
                        onMouseEnter={handleEditionHover}
                        onMouseLeave={handleEditionLeave}>
                        <u>Editions</u>
                        <ul ref={editionRef} className={`nav-items rounded shadow-2xl absolute bg-purple-950 ${isEditionOpen ? 'block' : 'hidden'} left-1/2 transform -translate-x-1/2 whitespace-nowrap`}>
                            {editions.map((edition) => (
                                <Link href={`/category/monthly/${edition.replace(/\s+/g, '-')}`}>
                                    <li key={edition}
                                        className="edition-item rounded shadow-2xl hover:bg-purple-900 text-sm p-2 whitespace-nowrap"
                                        onMouseEnter={onHover}
                                        onMouseLeave={onHoverOut}>

                                        {edition}

                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </li>
                    <li className="navbar-item rounded relative shadow-2xl"
                        onMouseEnter={handleCategoriesHover}
                        onMouseLeave={handleCategoriesLeave}>
                        <u>Categories</u>
                        <ul ref={categoriesRef} className={`w-auto h-auto nav-items rounded shadow-2xl absolute bg-purple-950 ${isCategoriesOpen ? 'block' : 'hidden'} left-1/2 transform -translate-x-1/2`}>
                            {categories.map((category) => (
                                <Link href={`/category/${category.replace(/\s+/g, '-')}`} >
                                    <li key={category}
                                        className="category-item rounded shadow-2xl hover:bg-purple-900 text-sm p-2 whitespace-nowrap"
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
                            <u>Shop</u>
                        </Link>
                    </li>
                    <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut}>
                        <Link href="/support">
                            <u>Support Us</u>
                        </Link>
                    </li>
                    <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut}>
                        <Link href="/advertise">
                            <u>Advertise</u>
                        </Link>
                    </li>
                    <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut}>
                        <Link href="/about">
                            <u>About Us</u>
                        </Link>
                    </li>
                    <li className="navbar-item" onMouseEnter={onHover} onMouseLeave={onHoverOut}>
                        <Link href="/contact">
                            <u>Contact</u>
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
                <div className="block text-center font-extrabold tracking-wider mt-10 text-lg sm:text-2xl text-block">
                    <p>UNAPOLOGETICALLY PROGRESSIVE.</p>
                    <p><strong>UNIQUELY NEW ORLEANS.</strong></p>
                </div>
            </div>

            {/** MOBILE NAVBAR */}
            <div className="sm:hidden flex flex-col items-center justify-center">
                <div className="flex items-center justify-center mobile-items">
                    <div>
                        <Image
                            className="logo"
                            src="https://www.bigeasymagazine.com/wp-content/uploads/2018/05/big-easy-main-logo-1.png"
                            alt="Big Easy Magazine Logo"
                            width={150}
                            height={150}
                            layout="fixed"
                            onClick={() => navigateTo('/')}
                            style={{ maxHeight: '100%' }}
                        />
                    </div>
                    {/* Toggle Icon/Button */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="bg-purple-950">Menu</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 overflow-auto bg-slate-950 border-slate-950">
                            <DropdownMenuGroup>
                                <Link href="/" passHref>
                                    <DropdownMenuItem>
                                        Home
                                    </DropdownMenuItem>
                                </Link>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger className="bg-purple-950 text-slate-200">Editions</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent className="bg-purple-950">
                                            {editions.map((edition) => (
                                                <Link href={`/category/monthly/${edition.replace(/\s+/g, '-')}`}>
                                                    <DropdownMenuItem key={edition}
                                                        className="w-[100px] h-auto edition-item rounded shadow-2xl bg-purple-950 hover:bg-purple-900 text-xs p-1 whitespace-nowrap">
                                                        {edition}
                                                    </DropdownMenuItem>
                                                </Link>
                                            ))}

                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger  className="side-bottom bg-purple-950 text-slate-200">Categories</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent className="bg-purple-950">
                                            {categories.map((categories) => (
                                                <Link href={`/category/${categories.replace(/\s+/g, '-')}`}>
                                                    <DropdownMenuItem key={categories}
                                                        className="w-[100px] h-auto side-bottom overflow-auto edition-item rounded shadow-2xl bg-purple-950 hover:bg-purple-900 text-xs p-1">
                                                        {categories}
                                                    </DropdownMenuItem>
                                                </Link>
                                            ))}

                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <Link href="/shop" passHref>
                                    <DropdownMenuItem>
                                        Shop
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/support" passHref>
                                    <DropdownMenuItem>
                                        Support Us
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/advertise" passHref>
                                    <DropdownMenuItem>
                                        Advertise
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/about" passHref>
                                    <DropdownMenuItem>
                                        About Us
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/contact" passHref>
                                    <DropdownMenuItem>
                                        Contact
                                    </DropdownMenuItem>
                                </Link>

                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="flex flex-col items-center ml-4">
                        {!user.isSignedIn && (
                            <div className="flex justify-center">
                                <SignInButton />
                            </div>
                        )}
                        {user.isSignedIn && (
                            <div className="flex flex-col items-center justify-center">
                                <div className="mb-2">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <SignOutButton />
                            </div>
                        )}
                    </div>
                </div>
                <div className="mobile-text-block text-center font-extrabold tracking-wider mt-10 text-lg mt-4">
                    <p>UNAPOLOGETICALLY PROGRESSIVE.</p>
                    <p>UNIQUELY NEW ORLEANS.</p>
                </div>
            </div>



        </nav>
    );
};

export default Navbar;
