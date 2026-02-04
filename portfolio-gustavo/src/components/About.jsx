import { FaCode } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";


const About = () => {

    const highlights = [
        {
            icon: FaCode,
            title: 'Clean Code',
            description: 'I write clean, testable, and easily maintainable code',
        },

        {
            icon: FaRegLightbulb,
            title: 'Creative Solutions',
            description: 'I transform complex problems into great solutions'
        },

        {
            icon: IoRocketOutline,
            title: 'Perfomance',
            description: 'Focused on creating fast and optimized applications',

        },

        {
            icon: BsPeople,
            title: 'Teamwork',
            description: 'Communicative and Collaborative in Agile Environments',
        }
    ]

    return ( 
        <section id="about" className="sobre-section">
            <div className="sobre-container">

                {/*Header*/}

                <div className="sobre-header">
                    <h2>About Me</h2>
                    <div className="sobre-underline"></div>
                </div>

                {/*Grid*/}

                <div className="sobre-grid">
                    {/*Texto*/}
                    <div className="sobre-text">
                        <p>
                           I am a full-stack developer with a passion for creating modern and scalable web applications, transforming ideas into digital products.
                        </p>


                        <p>
                            I work primarily with React, Flask, and APIs, always striving for best practices and clean code.
                        </p>


                        <p>
                            I enjoy studying new technologies, building my own projects, and constantly evolving as a developer.
                        </p>


                        {/*quote*/}

                        <div className="quote-box">
                            <span className="quote-icon">"</span>
                            <div>
                                <p className="quote-text">
                                    The only way to do great work is to love what you do.
                                </p>
                                <span className="quote-autor">— Steve Jobs</span>
                            </div>
                        </div>
              
                    </div>


                    {/*imagem*/}
                    <div className="sobre-image-wrapper">
                        <div className="sobre-image">
                            <img
                            src="/images/profile-img.jpg"
                            alt="profile" 
                            />
                        </div>

                        <div className="shape shape-primary"></div>
                        <div className="shape shape-secondary"></div>
                    </div>
                </div>

                {/*Highlights*/}

                <div className="sobre-highlights">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="highlight-card">
                            <div className="highlight-icon">
                                <highlight.icon />
                            </div>
                            <h3>{highlight.title}</h3>
                            <p>{highlight.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default About;