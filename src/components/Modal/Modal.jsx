import { createPortal } from "react-dom";
import { useContext } from "react";
import Button from "../Button/Button";

import StatesContext from "../../store/states-context";

const Modal = ({message, buttonText, func}) => {

  let {modal, setShowModal, fetchData} = useContext(StatesContext);

  const confirm = () => {
    setShowModal(false)
    fetchData();
  }

  if(modal == false) return null;

  return createPortal( 
    <section className="modal">
      <div className="modal-inner">
        <h2 className="modal-header">
             {message}
        </h2>
        <Button text={buttonText ? buttonText : "ok"} func={func ? func : () => confirm()}/>

      </div>

    </section>,
    document.getElementById("root-modal-container")
  
   );
}
 
export default Modal;