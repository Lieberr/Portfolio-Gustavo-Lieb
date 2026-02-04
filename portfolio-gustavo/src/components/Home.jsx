import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "motion/react";
import styles from "../styles/Home.module.css"




const Home = () => {

    const scrollToSection = (sectionID) => {
        const element = document.getElementById(sectionID);

        if(element){
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <section id="home" className={styles.home_section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/*Left side*/}
                    <div className={styles.content}>
                    <motion.div
                    className={styles.home_text}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.2}}>
                        <motion.p
                        className={styles.subtitle}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.3}}>
                            <span className={styles.subtitle_accent}>⚡</span>
                            Software Engineer
                        </motion.p>
                        <h1 className={styles.main_title}>
                            Hi, I'm
                        </h1>
                        <h2 className={styles.name_title}>
                            Gustavo Lieb
                        </h2>
                    </motion.div>

                    {/*Description*/}

                    <motion.p
                    className={styles.description}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.5}}>
                        Apaixonado por Frontend, Banco de dados & backend. Transformando ideias em sistemas inteligentes que impactam milhares de usuários.
                    </motion.p>

                    {/*btns*/}
                    <motion.div
                    className={styles.cta_buttons}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.7}}>
                        <motion.button
                        onClick={() => scrollToSection('projects')}
                        className={styles.btn_outline}
                        whileHover={{scale: 1.03}}
                        whileTap={{scale: 0.97}}>
                            Ver Projetos
                        </motion.button>

                        <motion.button
                        onClick={() => scrollToSection('contact')}
                        className={styles.btn_primary}
                        whileHover={{scale: 1.03}}
                        whileTap={{scale: 0.97}}>
                            Entre em Contato
                        </motion.button>
                    </motion.div>


                    {/*Social icons*/}

                    <motion.div
                    className={styles.social_icons}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.9}}>
                        <motion.a
                        href="https://github.com/Lieberr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.social_link}
                        whileHover={{scale: 1.1, y: -2}}
                        whileTap={{scale: 0.97}}>
                            <FiGithub size={20} className={styles.social_icon}/>
                        </motion.a>

                        <motion.a
                        href="https://www.linkedin.com/in/gustavo-lieb-figueira/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.social_link}
                        whileHover={{scale: 1.1, y: -2}}
                        whileTap={{scale: 0.97}}>
                            <SlSocialLinkedin size={20} className={styles.social_icon}/>
                        </motion.a>

                        <motion.a
                        href="mailto:gustavoliebfigueira@gmail.com"                        rel="noopener noreferrer"
                        className={styles.social_link}
                        whileHover={{scale: 1.1, y: -2}}
                        whileTap={{scale: 0.97}}>
                            <MdMailOutline size={20} className={styles.social_icon}/>
                        </motion.a>
                    </motion.div>
                </div>

                {/*Profile img right side*/}
                <motion.div
                initial={{opacity: 0, x: 50}}
                animate={{opacity: 1, x: 0}}
                className={styles.image_container}>
                    <div className={styles.image_wrapper}>
                        <motion.img
                        src="/images/profile-img.jpg"
                        alt="Profile"
                        className={styles.profile_image}
                        whileHover={{scale: 1.02}}
                        transition={{duration: 0.3}} />
                    </div>
                </motion.div>
                </div>

                {/*Scroll*/}

                <motion.button
                className={styles.scroll_container}
                onClick={() => scrollToSection('about')}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.1}}>
                    <motion.div
                    animate={{y: [0, 10, 0]}}
                    className={styles.scoll_icon}
                    transition={{duration: 1.5, repeat: Infinity}}>
                        <FaArrowDown color="gray" size={32}/>
                    </motion.div>
                </motion.button>

                

            </div>
        </section>
    )
        
}
 
export default Home;