import { motion } from "framer-motion";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { FiDownload } from 'react-icons/fi';
import { useState } from "react";
import Toast from "./Toast";
import { PiReadCvLogo } from "react-icons/pi";





const Resume = () => {

    const [showToast, setShowToast] = useState(false);
    function handleInternationalCV(){
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false)
        }, 4000)
    }


    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element){
            element.scrollIntoView({behavior: 'smooth'})
        }
    }




    const [selectLanguage, setSelectLanguage] = useState('pt')


    return (
        
        <section id="resume" className="section-resume"> 
            <div className="resume-container">
                <motion.div
                className="resume-header"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}>
                    <h2 className="title-resume"> 
                        My <span className="highlight">Resume</span>
                    </h2>
                    <p className="subtitle-resume">
                        Choose between my standard resume (available in Portuguese and English) or my international version optimized for the global market.
                    </p>
                </motion.div>

                {/*GRID*/}
                

                <div className="resume-grid">

                    {/*Standard resume*/}

                    <motion.div
                    className="resume-card"
                    initial={{opacity: 0, x: -30}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}>
                        <div className="resume-card-content">
                            <div className="resume-card-header">
                                <div className="resume-icon-box">
                                    <FaRegFileAlt className="resume-icon" />
                                </div>


                                <div>
                                    <h3 className="resume-card-title">Standard Resume</h3>
                                    <p className="resume-card-subtitle">Full Version</p>
                                </div>


                            </div>

                        {/*Previw*/}

                        <div className="resume-preview">

                            <div className="preview-container">
                                <PiReadCvLogo color="gray" size={200} />
                            </div>

                        </div>

                        <p className="resume-description">A complete and detailed version of my resume, including professional background, projects, and technical skills.</p>


                        {/*Language Switch*/}

                        <div className="language-switch">
                            <button className={`language-btn ${selectLanguage === 'pt' ? 'active' : ''}`}
                            onClick={() => setSelectLanguage('pt')}>
                                <RiGlobalLine size={22} /> em PT
                            </button>

                            <button className={`language-btn ${selectLanguage === 'en' ? 'active' : ''}`}
                            onClick={() => setSelectLanguage('en')}>
                                <RiGlobalLine size={22} /> in EN
                            </button>
                        </div>

                        <motion.a
                        href={
                            selectLanguage === 'pt' ? '/cv-gustavo.pdf' : '/cv-gustavo-ingles.pdf'
                        }

                        download={
                            selectLanguage === 'pt' ? 'CV-GustavoLieb.pdf' : 'CV-GustavoLieb-English.pdf'
                        }
                        className="dowload-btn"
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}>
                            <FiDownload /> Dowload PDF
                        </motion.a>
                        </div>
                    </motion.div>


                    {/*International resume*/}

                    <motion.div
                    className="resume-card"
                    initial={{opacity: 0, x: 30}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}>
                        <div className="resume-card-content">
                            <div className="resume-card-header">
                                <div className="resume-icon-box">
                                    <RiGlobalLine className="resume-icon" />
                                </div>

                                <div>
                                    <h3 className="resume-card-title">International Resume</h3>
                                    <p className="resume-card-subtitle">Full Inglish</p>
                                </div>
                            </div>

                            {/*Preview*/}

                            <div className="resume-preview">
                                <div className="preview-column">
                                    <div className="preview-line line-lg"></div>
                                    <div className="preview-line line-md"></div>
                                    <div className="preview-line line-md"></div>
                                    <div className="preview-line line-sm"></div>


                                    <div className="preview-divider"></div>


                                    
                                        <div className="preview-line line-lg"></div>
                                         <div className="preview-line line-md"></div>
                                         <div className="preview-line line-md"></div>
                                         <div className="preview-line line-sm"></div>
                                    

                                        <div className="preview-footer" >
                                            <RiGlobalLine size={40} color="gray" />
                                            <span style={{color: 'gray'}}> International </span>
                                        </div>
                                </div>
                            </div>

                            <p className="resume-description">
                                Optimized version for the global market, specially adapted to follow international curriculum standards
                            </p>

                            <motion.a
                            onClick={handleInternationalCV}
                            className="dowload-btn"
                            whileHover={{scale: 1.02}}
                            whileTap={{scale: 0.98}}>
                                <FiDownload /> Dowload PDF
                            </motion.a>
                        </div>
                    </motion.div>

                     <Toast
                    isOpen={showToast}
                    onClose={() => setShowToast(false)}
                    />

                </div>

                {/*Notes*/}

                <motion.div
                className="resume-note"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: 0.3}}>
                    <p>
                       💡 Resumes may be outdated. For more recent information about my experience and projects,{' '}
                        <a onClick={() => scrollToSection('contact')} style={{fontWeight: '600'}}>get in contact.</a>
                    </p>
                </motion.div>
            </div>
        </section>

     );
}
 
export default Resume;