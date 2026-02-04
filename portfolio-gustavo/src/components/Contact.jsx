import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { MdMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { LuBriefcase } from "react-icons/lu";
import { RiGithubLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { GoLightBulb } from "react-icons/go";
import { LuSend } from "react-icons/lu";
import { LuAsterisk } from "react-icons/lu";








const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''

    })

    async function handleSubmit(e) {
        e.preventDefault();

        try{
            const response = await fetch('/api/send-email', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if(response.ok){
                alert("Entraremos em contato em Breve !")
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
            });
            } else{
                alert("Erro ao enviar mensagem")
            }
        } catch(err){
            alert("Servidor fora do ar")
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        
    }

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
                    <h2 className="title-lets-talk">Let's <span>Talk</span> </h2>
                    <p>
                        Let's talk about your next project.
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
                            <p className="p-contact-info">Feel free to contact us through any of the channels below.</p>

                            {/*Card*/}

                            <div className="contact-card">
                                <div className="contact-icon">
                                    <MdMailOutline size={20} />
                                </div>
                                <div>
                                    <p className="contact-label">Email</p>
                                    <a href="mailto:gustavoliebfigueira@gmail.com" className="contact-value">Gustavoliebfigueira@gmail.com</a>
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
                                <div className="contact-icon">
                                    <LuBriefcase size={20}/>
                                </div>
                                <div>
                                    <p className="contact-label">Status</p>
                                    <p className="contact-value">Open to new Projects and Collaborations</p>
                                </div>
                            </div>
                        </div>


                        {/*Social*/}

                        <div className="container-social">
                            <h3 className="title-social">Connect with me</h3>

                            <div className="container-social-links">
                                <a href="https://github.com/Lieberr" target="_blank"><RiGithubLine size={20}/> GitHub </a>
                                <a href="https://www.linkedin.com/in/gustavo-lieb-figueira/" target="_blank"><SlSocialLinkedin size={20} /> LinkedIn</a>

                            </div>

                        </div>

                        {/*Info box*/}

                        <div className="container-info-box">
                            <div style={{display: "flex", gap: "10px"}}>
                                <GoLightBulb size={35} color="#1f3197" />
                                <div>
                                    <h4>Interested in collaborating?</h4>
                                    <p style={{fontSize: '15px'}}>I'm always open to discussing interesting projects, job opportunities, or simply exchanging ideas about technology.</p>
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
                        <p className="p-contact-message">Please fill out the form below and I will get back to you as soon as possible..</p>

                        <form onSubmit={handleSubmit} className="form-contact">
                            <div>
                                <label htmlFor="name">Name <LuAsterisk color="red" size={12} /></label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                            </div>

                            <div>
                                <label htmlFor="email">Email <LuAsterisk color="red" size={12} /></label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required/>
                            </div>
                            
                            <div>
                                <label htmlFor="subject">Subject <LuAsterisk color="red" size={12} /></label>
                                 <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="What would you like to talk about" required />
                            </div>

                            <div>
                                <label htmlFor="message">Message <LuAsterisk color="red" size={12} /></label>
                                <textarea name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Tell me more about your project or ideia" required />
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