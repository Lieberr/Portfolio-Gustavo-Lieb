import { RiGithubLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiDownload } from 'react-icons/fi';
import { IoArrowUp } from "react-icons/io5";
import { motion } from "motion/react";
import Toast  from "./Toast";
import { useState } from "react";

import { useNavigate, useLocation } from "react-router";






const Footer = () => {

    const [showToast, setShowToast] = useState(false);

    function handleInternationalCV() {
        setShowToast(true)


        setTimeout(() => {
            setShowToast(false)
        }, 4000);
    }

    const anoAtual = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element){
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    const location = useLocation();
    const navigate = useNavigate();

    const goToSection = (sectionId) => {
        if (location.pathname !== '/'){
            navigate('/');

            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if(element) {
                    element.scrollIntoView({behavior: 'smooth'});
                }
            }, 100)
        } else{
            const element = document.getElementById(sectionId);
            if(element){
                element.scrollIntoView({behavior: 'smooth'})
            }
        }
    }

    return ( 
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/*Brand*/}

                    <div>
                        <h3 className="footer-name">Gustavo Lieb Figueira</h3>
                        <p className="footer-paragraph">"Measuring programming progress by lines of code is like measuring the construction of an airplane by its weight."</p>
                        <br />
                        <span className="footer-paragraph-name">— Bill Gates</span>

                    </div>

                    {/*Navegation*/}

                    <div>
                        <h3 className="section-title">Quick Navigation</h3>
                        <ul className="nav-list">
                            <li>
                                <button onClick={() => goToSection('about')}>
                                    About
                                </button>
                            </li>

                            <li>
                                <button onClick={() => goToSection('skills')}>
                                    Skills
                                </button>
                            </li>

                            <li>
                                <button onClick={() => goToSection('projects')}>
                                    Projects
                                </button>
                            </li>

                            <li>
                                <button onClick={() => goToSection('resume')}>
                                    My Resume
                                </button>
                            </li>

                            <li>
                                <button onClick={() => goToSection('contact')}>
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/*Connection with me */}

                    <div>
                        <h3 className="section-title">Connect with Me</h3>
                        <div className="social-icons">
                            <motion.a
                            whileHover={{ scale: 1.03 }}
                            href="https://github.com/Lieberr"
                            target="_blank"
                            className="icon"
                            rel=""><RiGithubLine color="black" size={22} /></motion.a>


                            <motion.a 
                            whileHover={{ scale: 1.03 }}
                            href="https://www.linkedin.com/in/gustavo-lieb-figueira/"
                            target="_blank"
                            className="icon"
                            rel=""><SlSocialLinkedin color="black" size={22} /></motion.a>


                            <motion.a 
                            whileHover={{ scale: 1.03 }}
                            href="mailto:gustavoliebfigueira@gmail.com"
                            target="_blank"
                            className="icon"
                            rel=""><MdOutlineMail color="black" size={22} /></motion.a>

                            <motion.a 
                            whileHover={{ scale: 1.03 }}
                            href="https://www.instagram.com/gustavo.lieb/"
                            target="_blank"
                            className="icon"
                            rel=""><FaInstagram color="black" size={22} /></motion.a>
                        </div>
                        <p className="collab">
                            Sempre aberto para{' '}
                            <span className="collab-span">novos projetos</span> e{' '}
                            <span className="collab-span">colaborações</span>.
                        </p>
                    </div>
                </div>
                    {/*Dowloads*/}
                    <div className="dowloads">
                        <h4 className="dowload-title">Dowloads</h4>
                        <div className="dowloads-link">
                            <a href="/cv-gustavo.pdf" download="CV-GustavoLieb.pdf" className="dowload-btn"> <FiDownload className="dowload-icon-footer" color="black" /> Standard Resume (PT)</a>
                            <span className="span-separator-dowload">•</span>
                            <a href="/cv-gustavo-ingles.pdf" download="CV-GustavoLieb-English.pdf" className="dowload-btn"> <FiDownload className="dowload-icon-footer" color="black" /> Standard Resume (EN)</a>
                            <span className="span-separator-dowload">•</span>
                            <a onClick={handleInternationalCV} className="dowload-btn"> <FiDownload className="dowload-icon-footer" color="black" /> International Resume</a>
                        </div>
                    </div>

                    <Toast
                    isOpen={showToast}
                    onClose={() => setShowToast(false)}
                    />

                    <div className="footer-bottom">
                       <p className="direitos-reservados">© {anoAtual} Gustavo Lieb Figueira. Todos os direitos reservados.</p> 

                       <button className="scroll-to-top"
                       onClick={scrollToTop}>
                            <IoArrowUp size={16}/> Back to top
                       </button>
                    </div> 
            </div>
        </footer>
     );
}
 
export default Footer;