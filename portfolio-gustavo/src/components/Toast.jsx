const Toast = ({isOpen, onClose}) => {
    if(!isOpen) return null;
    return ( 
        <div className="toast">
            <div className="toast-container">
                <strong>Currículo em Breve! 📄</strong>
                <p>
                    O currículo internacional está sendo preparado e estará disponível em breve.
                    Fique atento às atualizações!
                </p>
            </div>

            <button
            className="toast-close"
            onClick={onClose}>
                x
            </button>
        </div>
     );
}
 
export default Toast;