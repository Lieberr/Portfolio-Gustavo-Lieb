import { useState, useEffect } from "react";
import { GiProcessor } from "react-icons/gi";
import { LuGithub } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiInformationLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const Project = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const MotionLink = motion(Link);


    useEffect(() => { 
        const fetchProjects = async () => {
            try {
                const res = await fetch('/data/db.json');
                if(!res.ok) throw new Error("Failed to fetch Projects");
                const data = await res.json();
                console.log(data)
                setProjects(data.projects)
            } catch (err) {
                setError(err.message)
                console.log(err)
            } finally{
                setLoading(false)
            }
        }
        fetchProjects();


     }, [])



    return ( 
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <section id="projects" className="projects-section">
                <div className="projects-container">

                    {/*HEader*/}

                    <motion.div
                    className="projects-header"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}>
                        <h2 className="projects-title">
                            <span className="highlight">Featured</span> Projects
                        </h2>

                        <p className="projects-subtitle">
                            Solutions I developed to solve real problems.
                        </p>

                    </motion.div>

                    {/*grid*/}

                    <div className="projects-grid">

                        {projects.map((project) => (
                            <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: project.id * 0.1, duration: 0.5}}>
                                {/*Card header*/}

                                <div className="project-header">

                                    <div className="project-icon-box">
                                        <GiProcessor size={24} className="project-icon" />
                                    </div>

                                    <div className="project-info">
                                        <span className="project-badge">
                                            {project.badge}
                                        </span>

                                        <h3 className="project-title">
                                            {project.title}
                                        </h3>

                                        <p className="project-subtitle">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/*description*/}
                                <p className="project-description">
                                    {project.description}
                                </p>

                                {/*features*/}
                                
                                <div className="project-features">

                                    <h4 className="project-section-title">
                                        Key Features: 
                                    </h4>

                                    <div className="features-list">
                                        {project.features.map((feature, i) => (
                                            <div key={i} className="feature-item">
                                                <span className="feature-dot">•</span>
                                                <span className="feature-text">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>


                                {/*tecnologies*/}

                                <div className="project-tech">
                                    <h4 className="project-section-title">
                                        Technologies: 
                                    </h4>

                                    <div className="tech-list">
                                        {project.technologies.map((tech, j) => (
                                            <span className="tech-badge" key={j}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/*actions*/}

                                <div className="project-actions">

                                    {project.githubURL && (
                                        <motion.a
                                        href={project.githubURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-secondary"
                                        whileHover={{scale: 1.02}}
                                        whileTap={{scale: 0.98}}>
                                            <LuGithub size={14}/>
                                            GitHub
                                        </motion.a>
                                    )}

                                    {project.liveURL && (
                                        <motion.a
                                        href={project.liveURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                        whileHover={{scale: 1.02}}
                                        whileTap={{scale: 0.98}}>
                                            <MdOutlineRemoveRedEye size={14}/>
                                            Demo
                                        </motion.a>
                                    )}


                                    <MotionLink 
                                    onClick={() => window.scrollTo(0, 0)}
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    to={`projects/${project.id}`}
                                    className="btn btn-saiba-mais">                                
                                            <RiInformationLine size={14}/>
                                            Looking more
                                    </MotionLink>

                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>
           
        </div>
     );
}
 
export default Project;