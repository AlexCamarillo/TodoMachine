import  ReactDOM  from "react-dom";
import './Modal.css';
function Modal ({ children }) {
    return ReactDOM.createPortal(
        //Indicamos cuál es el contenido que queremos teletransportar
        <div className="Modal">
            <div className="ModalBackground">
                {children}
            </div>
        </div>,
        //y luego a dónde queremos hacer la teletransportación
        document.getElementById('modal')
    );
}

export { Modal };