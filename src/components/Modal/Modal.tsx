import React from "react";
import styles from "./Modal.module.css";

interface ModalProps{
    message:string
    onClose:()=>void
}
const Modal:React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>{message}</p>

        <button onClick={onClose} className={styles.button}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;