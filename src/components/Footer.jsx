import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '/assets/book-logo.png';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setIsSubscribed(true);
        setEmail('');
    };

    return (
        <>
            <footer className='flex flex-wrap justify-between p-4 bg-black text-white w-full px-[100px]  '>
                {/* Logo image section */}
                <div className="font-bold text-3xl tracking-wider font-serif cursor-pointer">
                    <Link to={"/home"} className=''>
                        <img src={logo} alt="" className='w-14' />
                    </Link>
                </div>

                {/* Page Nav Link section */}
                <div className='space-y-1'>
                    <Link to='' className='block hover:text-blue-500'>Book</Link>
                    <Link to='' className='block hover:text-blue-500'>Author</Link>
                    <Link to='' className='block hover:text-blue-500'>Collection</Link>
                    <Link to='' className='block hover:text-blue-500'>Contact Us</Link>
                </div>

                {/* NewsLetter Subscription section */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Subscribe to our Newsletter!</h2>
                    <form onSubmit={ handleSubscribe } className="flex justify-center items-center">
                        { !isSubscribed && (
                            <>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="p-2 rounded-l-lg text-black focus:outline-none"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
                                >
                                    Subscribe
                                </button>
                            </>
                        )}
                    </form>
                    {isSubscribed && <p className="text-grey-500">Thank you for subscribing in our website!</p>}
                </div>


                {/* Social Media Icon section */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Follow Us on :</h2>
                    <div className="flex justify-center space-x-6">
                        <a href="https://instagram.com" target="_blank">
                            <FaInstagram className="text-2xl hover:text-pink-500" />
                        </a>
                        <a href="https://facebook.com" target="_blank">
                            <FaFacebook className="text-2xl hover:text-blue-500" />
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <FaTwitter className="text-2xl hover:text-blue-400" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer