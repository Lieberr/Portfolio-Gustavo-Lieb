import { useNavigate, useLocation } from "react-router";

const Header = () => {

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
            <nav className="header-container">

                {/*Logo*/}

                <button className="logo-area" onClick={() => goToSection('home')}>
                    <span>Gustavo Lieb</span>
                </button>

                {/*Desktop menu*/}

                <div className="desktop-menu">
                    {menuItens.map((item) => (
                        <button
                        onClick={() => goToSection(item.id)}
                        key={item.id}>
                            {item.label}
                        </button>
                    ))}
                </div>
            </nav>
        </header>
     );
}
 
export default Header;