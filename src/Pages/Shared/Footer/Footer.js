import React from 'react';
import icon from '../../../images/icon/favicon.ico'

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <>
            <footer class="footer p-10 bg-base-200 text-base-content font-bold">
                <div>
                    <img src={icon} alt="" />
                    <p>Computer Parts World Ltd.</p>
                    <p>Copyright &copy; {year} - All right reserved by MD NAZMUL ISLAM</p>
                </div>
                <div>
                    <span class="footer-title">Services</span>
                    <a href=' ' class="link link-hover">Branding</a>
                    <a href=' ' class="link link-hover">Design</a>
                    <a href=' ' class="link link-hover">Marketing</a>
                    <a href=' ' class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a href=' ' class="link link-hover">About us</a>
                    <a href=' ' class="link link-hover">Contact</a>
                    <a href=' ' class="link link-hover">Jobs</a>
                    <a href=' ' class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a href=' ' class="link link-hover">Terms of use</a>
                    <a href=' ' class="link link-hover">Privacy policy</a>
                    <a href=' ' class="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </>
    );
};

export default Footer;