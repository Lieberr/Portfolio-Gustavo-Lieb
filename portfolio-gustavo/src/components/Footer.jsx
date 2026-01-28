import { RiGithubLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiDownload } from 'react-icons/fi';
import { IoArrowUp } from "react-icons/io5";





const Footer = () => {

    const anoAtual = new Date().getFullYear();

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
                        <h3 className="section-title">Quick Navegation</h3>
                        <ul className="nav-list">
                            <li>
                                <button>
                                    About
                                </button>
                            </li>

                            <li>
                                <button>
                                    Skills
                                </button>
                            </li>

                            <li>
                                <button>
                                    Projects
                                </button>
                            </li>

                            <li>
                                <button>
                                    My Resume
                                </button>
                            </li>

                            <li>
                                <button>
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/*Connection with me */}

                    <div>
                        <h3 className="section-title">Connect with Me</h3>
                        <div className="social-icons">
                            <a href="https://github.com/Lieberr"
                            target="_blank"
                            className="icon"
                            rel=""><RiGithubLine size={25} /></a>


                            <a href="https://www.linkedin.com/in/gustavo-lieb-figueira/"
                            target="_blank"
                            className="icon"
                            rel=""><SlSocialLinkedin size={25} /></a>


                            <a href="mailto:gustavoliebfigueira@gmail.com"
                            target="_blank"
                            className="icon"
                            rel=""><MdOutlineMail size={25} /></a>

                            <a href="https://www.instagram.com/gustavo.lieb/"
                            target="_blank"
                            className="icon"
                            rel=""><FaInstagram size={25} /></a>
                        </div>
                        <p className="collab">
                            Sempre aberto para{' '}
                            <span className="collab-span">novos projetos</span> e
                            <span className="collab-span">colaborações</span>.
                        </p>
                    </div>
                </div>
                    {/*Dowloads*/}
                    <div className="dowloads">
                        <h4 className="dowload-title">Dowloads</h4>
                        <div className="dowloads-link">
                            <button className="dowload-btn"> <FiDownload /> Standard Resume (PT)</button>
                            <span className="span-separator-dowload">•</span>
                            <button className="dowload-btn"> <FiDownload /> Standard Resume (EN)</button>
                            <span className="span-separator-dowload">•</span>
                            <button className="dowload-btn"> <FiDownload /> International Resume</button>
                        </div>
                    </div>

                    <div className="footer-bottom">
                       <p className="direitos-reservados">© {anoAtual} Gustavo Lieb Figueira. Todos os direitos reservados.</p> 

                       <button className="scroll-to-top">
                            <IoArrowUp size={16}/> Back to top
                       </button>
                    </div> 
            </div>
        </footer>
     );
}
 
export default Footer;