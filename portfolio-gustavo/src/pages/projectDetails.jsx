import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import { useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { GoArrowLeft } from "react-icons/go";
import { GiProcessor } from "react-icons/gi";
import { LuGithub } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineCube } from "react-icons/hi";
import { SiMusicbrainz } from "react-icons/si";


import styles from "../styles/ProjectDetails.module.css"




const ProjectDetailsPage = () => {


    const navigate = useNavigate();
    const location = useLocation();

    const goToSection = (sectionId) => {
        if(location.pathname !== '/'){
            navigate('/');

            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({behavior: 'smooth'})
                }
            }, 100)
        } else{
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({behavior: 'smooth'})
            } 
        }
    };

    const {id} = useParams();


    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { 
        const fetchProject = async () => {
            try{
                const res = await fetch(`/api/projects/${id}`);
                if (!res.ok) throw new Error('Failed to fetch Project');
                const data = await res.json();
                console.log(data);
                setProject(data);
            } catch (err){
                setError(err.message);
                console.log(err);
            } finally{
                setLoading(false)
            }
        }

        fetchProject();
     }, [id])

     if(!project){
        return(
            <div className={styles.project_page}>
                <div className={styles.not_found}>
                    <h1>Project not Found</h1>
                    <Link to="/">Back to Home Page</Link>
                </div>
            </div>
        );
     }


    return ( 

        <div className={styles.project_page}>
            <div className={styles.project_container}>

                {/*VOLTAR*/}

                <motion.button
                onClick={() => goToSection('projects')}
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                className={styles.back_button}>
                    <GoArrowLeft size={20} />
                    Back to projects
                </motion.button>

                

                {/*ICON E BADGE*/}

                <motion.div
                className={styles.project_header}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}>
                    <div className={styles.icon_project}>
                        <GiProcessor size={32} />
                    </div>

                    <div className={styles.category}>
                        <span>{project.badge}</span>
                    </div>
                </motion.div>


            {/*Titulo*/}
            <motion.h1
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.1}}
            className={styles.project_title}>
                {project.title}
            </motion.h1>

            {/*Subtitulo*/}

            <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
            className={styles.project_subtitle}>
                {project.subtitle}
            </motion.p>

            {/*Descricao*/}

            <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3}}
            className={styles.project_description}>
                {project.description}
            </motion.p>

            {/*Botoes*/}

            <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.4}}
            className={styles.action_buttons}>
                {project.githubURL && (
                    <a
                    href={project.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btn_outline}>
                        <LuGithub size={18} />
                        <span>View on github</span>
                    </a>
                )}

                {project.liveURL && (
                    <a
                    href={project.liveURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btn_primary}>
                        <LuExternalLink size={18} />
                        <span>View live demo</span>
                    </a>
                )}
            </motion.div>


            {/*GRID*/}

            <div className={styles.two_columns}>

                {/*Funcionalidades*/}
                <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 20}}
                transition={{delay: 0.5}}
                className={styles.card}>
                    <div className={styles.card_title}>
                        <FaRegStar size={35}/>
                        <h2
                        style={{color: 'black', fontSize: '25px'}}
                        className={styles.title_principais_funcionalidades}>
                            Main Features
                        </h2>
                    </div>
                    <ul className={styles.ul}>
                        {project.features?.map((feature, index) => (
                            <li key={index} className={styles.li}>
                                <FaRegCircleCheck size={18} className={styles.cirlce_check} />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/*Tecnologias utilizadas*/}

                <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 20}}
                transition={{delay: 0.6}}
                className={styles.card}>
                    <div className={styles.card_title}>
                        <HiOutlineCube size={35}/>
                        <h2
                        style={{color: 'black', fontSize: '25px'}} className={styles.tecnologias_utilizadas}>
                            Technologies Used
                        </h2>
                    </div>
                    <div className={styles.tech_list}>
                        {project.technologies?.map((tech, index) => (
                            <span key={index} className={styles.tech_badge}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>


            </div>
            {/*Sobre projeto*/}

            <motion.div
            className={styles.container_sobre_projeto}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.7}}>
                <div className={styles.card_title}>
                    <SiMusicbrainz size={35} />
                    <h2 className={styles.title_sobre_projeto}>About Project</h2>
                </div>

                <div className={styles.section_content}>
                    <div>
                        <h3 className={styles.title_visao_geral}>Overview</h3>
                        <p className={styles.project_description} style={{ marginBottom: 0 }}>
                            {project.description}
                        </p>
                    </div>

                    {project.desafios_solucoes && (
                        <div>
                            <h3 className={styles.title_visao_geral}>Challenges and Solutions</h3>
                            <p className={styles.project_description} style={{marginBottom: 0}}>
                                {project.desafios_solucoes}
                            </p>
                        </div>
                    )}

                    {project.resultado_impacto && (
                        <div>
                            <h3 className={styles.title_visao_geral}>Results and Impact</h3>
                            <p className={styles.project_description} style={{marginBottom: 0}}>
                                {project.resultado_impacto}
                            </p>
                        </div>
                    )}
                </div>
            </motion.div>

            <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.8}}
            className={styles.cta_footer}>
                <p className={styles.cta_description}>Did you like this project? Check out my other work!</p>

                
                        <motion.button
                        onClick={() => goToSection('projects')}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        className={styles.btn_footer}>
                            <GoArrowLeft size={18}/>
                            <span>See all projects</span>
                        </motion.button>
                
            </motion.div>
            </div>
        </div>
        
     );
}
 
export default ProjectDetailsPage;