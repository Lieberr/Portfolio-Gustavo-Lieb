import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { GoArrowLeft } from "react-icons/go";
import { GiProcessor } from "react-icons/gi";
import { LuGithub } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineCube } from "react-icons/hi";

import styles from "../styles/ProjectDetails.module.css"




const ProjectDetailsPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();

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
                    <h1>Projeto não encontrado</h1>
                    <Link to="/">Voltar para página inicial</Link>
                </div>
            </div>
        );
     }


    return ( 

        <div className={styles.project_page}>
            <div className={styles.project_container}>

                {/*VOLTAR*/}

                <motion.button
                onClick={() => navigate('/')}
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                className={styles.back_button}>
                    <GoArrowLeft size={20} />
                    Voltar para projetos
                </motion.button>

                {/*BADGE*/}

            <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            className={styles.category}>
                <span>{project.badge}</span>
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
                        <span>Ver no GitHub</span>
                    </a>
                )}

                {project.liveURL && (
                    <a
                    href={project.liveURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btn_primary}>
                        <LuExternalLink size={18} />
                        <span>Ver Demo ao Vivo</span>
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
                        <FaRegStar size={20} color="black"/>
                        <h2 className={styles.title_principais_funcionalidades}>
                            Principais Funcionalidades
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
                        <HiOutlineCube size={20}/>
                        <h2 className={styles.tecnologias_utilizadas}>
                            Tecnologias Utilizadas
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
            </div>
        </div>
        
     );
}
 
export default ProjectDetailsPage;