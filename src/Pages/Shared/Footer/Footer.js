import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../../../assets/images/footer.png'
const Footer = () => {
    return (
        <div style={{
            background: `url(${footerImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} className='py-16'>
            <footer class="footer p-10 text-neutral-content mt-10 text-black justify-around">
                <div>
                    <span class="footer-title">Services</span>
                    <Link to='/home' class="link link-hover">Branding</Link>
                    <Link to='/home' class="link link-hover">Design</Link>
                    <Link to='/home' class="link link-hover">Marketing</Link>
                    <Link to='/home' class="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <Link to='/home' class="link link-hover">About us</Link>
                    <Link to='/home' class="link link-hover">Contact</Link>
                    <Link to='/home' class="link link-hover">Jobs</Link>
                    <Link to='/home' class="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <Link to='/home' class="link link-hover">Terms of use</Link>
                    <Link to='/home' class="link link-hover">Privacy policy</Link>
                    <Link to='/home' class="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <p className='text-center mt-5'>All right reserve by &copy; Antu</p>
        </div>
    );
};

export default Footer;