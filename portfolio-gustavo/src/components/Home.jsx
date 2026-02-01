import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "motion/react";




const Home = () => {

    const scrollToSection = (sectionID) => {
        const element = document.getElementById(sectionID);

        if(element){
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    return ( 
        <section id="home" className="home-section">
            <div home-container>
                <div className="home-content">

                    {/*text*/}

                    <motion.div
                    className="home-text"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}>
                        <h1>Hello, I'm</h1>
                        <h2>Gustavo Lieb</h2>

                    <motion.div
                    className="home-role"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.3}}>
                        <span>⚡</span>
                        Software Engineer
                    </motion.div>   


                    </motion.div>

                    {/*Profile card*/}

                    <motion.div
                    className="profile-card"
                    initial={{opacity: 0, scale: 0.0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{delay: 0.5}}
                    whileHover={{scale: 1.02}}>
                        <div className="profile-image-wrapper">
                            <img src="/images/profile-img.jpg" alt="Profile" />
                            <div className="status-dot"></div>
                        </div>

                        <div className="profile-info">
                            <p className="profile-name">Gustavo Lieb Figueira</p>
                            <p className="profile-job">Software Engineering</p>

                            <div className="profile-status">
                                <p>Voluntario</p>
                            </div>
                        </div>
                    </motion.div>


                    {/*Descricao*/}

                    <motion.p
                    className="home-description"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.7}}>
                        Apaixonado por Frontend, Banco de dados e construção de Software.
                        Transformando ideias em sistemas inteligentes que impactam muitos usuários.
                    </motion.p>

                    {/*botoes*/}

                    <motion.div
                    className="home-btns"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.9}}>
                        <motion.button
                        onClick={() => scrollToSection('projects')}
                        className="home-btn-primary"
                        whileHover={{scale: 1.03}}
                        whileTap={{scale: 0.96}}>
                            Ver Projetos
                        </motion.button>

                        <motion.button
                        onClick={() => scrollToSection('contact')}
                        className="home-btn-outline"
                        whileHover={{scale: 1.03}}
                        whileTap={{scale: 0.96}}>
                            Entre em Contato
                        </motion.button>
                    </motion.div>


                    {/*Social*/}

                    <motion.div
                    className="home-social"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1.1}}>
                        <a href="https://github.com/Lieberr" target="_blank">
                            <FiGithub />
                        </a>

                        <a href="https://www.linkedin.com/in/gustavo-lieb-figueira/" target="_blank">
                            <SlSocialLinkedin />
                        </a>

                        <a onClick={() => scrollToSection('contact')}>
                            <MdMailOutline />
                        </a>
                    </motion.div>
                    
                    {/*Scroll*/}

                    <motion.button
                    className="scroll-down"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1.3}}>
                        <motion.div
                        animate={{y: [0, 10, 0]}}
                        transition={{duration: 1.5, repeat: Infinity}}>
                            <FaArrowDown size={24} />
                        </motion.div>
                    </motion.button>

                </div>
            </div>
        </section>
     );
}
 
export default Home;