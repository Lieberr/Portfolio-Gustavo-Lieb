const Header = () => {

    const menuItens = [
        {id: 'home', label: 'Home'},
        {id: 'about', label: 'About'},
        {id: 'skills', label: 'Skills'},
        {id: 'projects', label: 'Projects'},
        {id: 'resume', label: 'Resume'},
        {id: 'contact', label: 'Contact'},
    ];

    return ( 
        <header className="header">
            <nav className="header-container">

                {/*Logo*/}

                <button className="logo-area">
                    <span>Gustavo Lieb</span>
                </button>

                {/*Desktop menu*/}

                <div className="desktop-menu">
                    {menuItens.map((item) => (
                        <button
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