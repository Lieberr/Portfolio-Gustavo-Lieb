import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { MdMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { LuBriefcase } from "react-icons/lu";
import { RiGithubLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { GoLightBulb } from "react-icons/go";
import { LuSend } from "react-icons/lu";







const Contact = () => {
    return ( 
        <section id="contact" className="contact-section">
            <div className="contact-container">
                {/*Header*/}

                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="contact-header">
                    <h2>Let's <span>Talk</span> </h2>
                    <p>
                        Estou sempre aberto para discutir novas oportunidades e projetos interessantes
                    </p>
                </motion.div>


                <div className="contact-grid">

                    {/*Left side*/}

                    <motion.div
                    className="contact-left"
                    initial={{opacity: 0, x: -30}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}>
                        <div>
                            <h3 className="title-contact-info">Contact Information</h3>
                            <p className="p-contact-info">Sinta-se à vontade para entrar em contato através de qualquer um dos canais abaixo.</p>

                            {/*Card*/}

                            <div className="contact-card">
                                <div className="contact-icon">
                                    <MdMailOutline size={20} />
                                </div>
                                <div>
                                    <p className="contact-label">Email</p>
                                    <a href="" className="contact-value">Gustavoliebfigueira@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-icon">
                                    <GrLocation size={20} />
                                </div>
                                <div>
                                    <p className="contact-label">Location</p>
                                    <p className="contact-value">Jundiai, SP - Brasil</p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-cion">
                                    <LuBriefcase size={20}/>
                                </div>
                                <div>
                                    <p className="contact-label">Status</p>
                                    <p className="contact-value">Aberto para novos projetos e colaborações</p>
                                </div>
                            </div>
                        </div>


                        {/*Social*/}

                        <div className="container-social">
                            <h3 className="title-social">Connect with me</h3>

                            <div className="container-social-links">
                                <a href="" target="_blank"><RiGithubLine size={20}/> GitHub </a>
                            </div>

                            <div className="container-social-links">
                                <a href="" target="_blank"><SlSocialLinkedin size={20} /> LinkedIn</a>
                            </div>
                        </div>

                        {/*Info box*/}

                        <div className="container-info-box">
                            <div style={{display: "flex", gap: "10px"}}>
                                <GoLightBulb />
                                <div>
                                    <h4>Interessado em colaboração?</h4>
                                    <p>Estou sempre aberto para discutir projetos interessantes, oportunidades de trabalho ou simplesmente trocar ideias sobre tecnologia.</p>
                                </div>
                            </div>
                        </div>


                    </motion.div>

                    {/*Right side*/}

                    <motion.div
                    initial={{opacity: 0, x: 30}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}>
                        <h3 className="title-contact-message">Send a Message</h3>
                        <p className="p-contact-message">Preencha o formulário abaixo e eu retornarei o mais breve possível.</p>

                        <form className="form-contact">
                            <div>
                                <label htmlFor="name">Name *</label>
                                <input type="text" name="name" placeholder="Your full name" required />
                            </div>

                            <div>
                                <label htmlFor="email">Email *</label>
                                <input type="email" name="email" placeholder="your@email.com" required/>
                            </div>
                            
                            <div>
                                <label htmlFor="subject">Subject *</label>
                                 <input type="text" name="subject" placeholder="What would you like to talk about" required />
                            </div>

                            <div>
                                <label htmlFor="message">Message *</label>
                                <textarea name="message" rows="6" placeholder="Tell me more about your project or ideia" required />
                            </div>

                            <motion.button type="submit"
                            className="contact-btn"
                            whileHover={{scale: 1.02}}
                            whileTap={{scale: 0.98}}>
                                <LuSend />{' '}
                                 Send Message
                            </motion.button>
                        </form>

                    </motion.div>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;