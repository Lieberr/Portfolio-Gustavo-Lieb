import { Link } from "react-router";

const PageNotFound = () => {
    return ( 
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>Oopss! The page you are looking for does not exist!</p>
            
            <Link to="/" style={styles.link}>
                ← Go Back Home
            </Link>
        </div>
     );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '80px 20px',
        color: '#000000'
    },
    title: {
        fontSize: '72px',
        marginBottom: '20px',
    },
    message: {
        fontSize: '18px',
        marginBottom: '30px',
    },
    link: {
        textDecoration: 'none',
        color: '#1f3197',
        fontWeight: 'bold',
    }
}
 
export default PageNotFound;