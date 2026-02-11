import { motion } from "framer-motion";
import { IoCode } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FiDatabase } from "react-icons/fi";
import { FiBox } from "react-icons/fi";




const Skills = () => {


    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element){
            element.scrollIntoView({behavior: 'smooth'})
        }
    }



    const skillCategories = [
        {
            title: 'Backend Development',
            icon: IoCode,
            skills: [
                {name: 'Flask & Python', level: 87},
                {name: 'REST & APIs', level: 89},
                {name: 'HTTP Request', level: 87},
                {name: 'CRUD & Business', level: 82}
            ],
        },

        {
            title: 'DevOps & Tools',
            icon: IoMdSettings,
            skills: [
                {name: 'Git & Github', level: 90},
                {name: 'Github Actions', level: 89},
                {name: 'Environment Variables', level: 85},
                {name: 'Build & Deploy', level: 90}
            ],
        },

        {
            title: 'Databases',
            icon: FiDatabase,
            skills: [
                {name: 'MongoDB', level: 85},
                {name: 'SQL Queries', level: 92},
                {name: 'mySQL', level: 95},
                {name: 'Database Modeling', level: 98},
            ],

        },

        {
            title: 'Frontend',
            icon: FiBox,
            skills: [
                {name: 'React JS', level: 94},
                {name: 'Tailwind CSS', level: 85},
                {name: 'Responsive Design', level: 85},
                {name: 'JavaScript (ES6+)', level: 90}
            ]
        }
    ]

    return ( 
        <section id="skills" className="section-skills">
            <div className="skills-container">

                {/*header*/}

                <motion.div
                className="skills-header"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}>
                    <h2 className="skills-title">
                        <span className="highlight">Skills</span> & Competencies
                    </h2>

                    <p className="skills-subtitle">Technologies and skills I master</p>
                    
                </motion.div>

                {/*GRID*/}

                <div className="skills-grid">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;

                        return(
                            <motion.div
                            key={category.title}
                            className="skill-card"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.1, duration: 0.5}}
                            whileHover={{scale: 1.02}}>

                                {/*Card header*/}

                                <div className="skill-card-header">
                                    <div className="skill-icon-box">
                                        <Icon size={24} className="skill-icon" />
                                    </div>
                                    <h4 className="skill-card-title">
                                        {category.title}
                                    </h4>
                                </div>

                                {/*Skills*/}

                                

                                <div className="skill-list">
                                    {category.skills.map((skill) => (
                                        <div key={skill.name} className="skill-item">
                                            <div className="skill-info">
                                                <span className="skill-name">{skill.name}</span>
                                                <span className="skill-porcent">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="skill-bar">
                                                <motion.div
                                                className="skill-progress"
                                                initial={{width: 0}}
                                                whileInView={{width: `${skill.level}%`}}
                                                viewport={{once: true}}
                                                transition={{duration: 1}} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>


                {/*footer*/}

                <motion.div
                className="skills-footer"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}>
                    <p>
                        Interested in collaborating or learning more about my experience?
                    </p>

                    <motion.a
                    onClick={() => scrollToSection('contact')}
                    className="skills-btn"
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}>
                        Get in Touch
                    </motion.a>
                </motion.div>

            </div>
        </section>
     );
}
 
export default Skills;