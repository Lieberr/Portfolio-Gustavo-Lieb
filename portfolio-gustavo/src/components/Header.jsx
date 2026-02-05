import { useNavigate, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoClose } from "react-icons/io5";



const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false);

    const menuItens = [
        {id: 'home', label: 'Home'},
        {id: 'about', label: 'About'},
        {id: 'skills', label: 'Skills'},
        {id: 'projects', label: 'Projects'},
        {id: 'resume', label: 'Resume'},
        {id: 'contact', label: 'Contact'},
    ];



    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element){
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

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
    }



    return ( 
        <header className="header">
            <nav className="nav">
                <div className="nav_content">

                    {/*Logo*/}

                    <button className="logo_button" onClick={() => goToSection('home')}>
                        <span>Gustavo Lieb</span>
                    </button>

                    {/*Desktop menu*/}

                    <div className="desktop_menu">
                        {menuItens.map((item) => (
                            <button
                            className="menu_item"
                            onClick={() => goToSection(item.id)}
                            key={item.id}>
                                {item.label}
                            </button>
                        ))}
                    </div>


                    {/*Mobile menu*/}

                    <div className="mobile_controls">
                        <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className="mobile_menu_button">
                            {mobileMenu ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
                        </button>
                    </div>



                </div>




                {mobileMenu && (
                    <div className="mobile_menu">
                        <div className="mobile_menu_content">
                            {menuItens.map((item) => (
                                <button
                                key={item.id}
                                onClick={() => goToSection(item.id)}
                                className="mobile_menu_item">
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
     );
}
 
export default Header;