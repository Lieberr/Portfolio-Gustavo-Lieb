import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, spring } from "framer-motion";
import styles from "../styles/ThemeToggle.module.css"


const ThemeToggle = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return ( 
        <motion.button
        onClick={toggleTheme}
        className={styles.theme_toggle}
        whileTap={{scale: 0.95}}>
            <motion.div
            className={styles.toggle_circle}
            animate={{
                x: theme === "dark" ? 32 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
            }}>
                {theme === "dark" ? (
                    <FiMoon size={14} className={styles.moon_icon} />
                ) : (
                    <IoSunnyOutline size={14} className={styles.sun_icon} />
                )}

            </motion.div>
        </motion.button>
     );
}
 
export default ThemeToggle;