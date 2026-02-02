import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Project from '../components/Project';
import Skills from '../components/Skills';
import About from '../components/About';
import Home from '../components/Home';


const HomePage = () => {
    return ( 
        <>
            <Home />
            <About />
            <Skills />
            <Project />
            <Resume />
            <Contact />
            <Footer />
        </>
     );
}
 
export default HomePage;