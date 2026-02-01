import { FaCode } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";


const About = () => {

    const highlights = [
        {
            icon: FaCode,
            title: 'Código Limpo',
            description: 'Escrevo código limpo, testável e de fãcil manutenção'
        },

        {
            icon: FaRegLightbulb,
            title: 'Soluções Criativas',
            description: 'Trasnformo problemas complexos em grandes soluções'
        },

        {
            icon: IoRocketOutline,
            title: 'Perfomace',
            description: 'Focado em criar aplicações rápidas e otimizadas'

        },

        {
            icon: BsPeople,
            title: 'Trabalho em equipe',
            description: 'Comunicativo e Colaborativo em ambientes ágeis'
        }
    ]

    return ( 
        <section id="about" className="sobre-section">
            <div className="sobre-container">

                {/*Header*/}

                <div className="sobre-header">
                    <h2>Sobre Mim</h2>
                    <div className="sobre-underline"></div>
                </div>

                {/*Grid*/}

                <div className="sobre-grid">
                    {/*Texto*/}
                    <div className="sobre-text">
                        <p>
                            Sou um desenvolvedor full stack com paixão por criar aplicações web
                            modernas e escaláveis, transformando ideias em produtos digitais.
                        </p>


                        <p>
                            Trabalho principalmente com React, Flask e APIs, sempre buscando
                            boas práticas e código limpo.
                        </p>


                        <p>
                            Gosto de estudar novas tecnologias, construir projetos próprios e
                             evoluir constantemente como desenvolvedor.
                        </p>


                        {/*quote*/}

                        <div className="quote-box">
                            <span className="quote-icon">"</span>
                            <div>
                                <p className="quote-text">
                                 A única maneira de fazer um excelente trabalho é amar o que você faz.
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