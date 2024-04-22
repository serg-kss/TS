import { ReactElement } from 'react';
import styles from './Modal.module.scss';
import { useModaltStore } from '../../store/modal-store';


function Modal({children}:{children: ReactElement}): ReactElement {

  const [setModal, title] = useModaltStore((state) => [state.setModal, state.title]);

  return (
    <div className={styles.modalBackGround}>
      <div className={styles.modal}>
        <div className={styles.modalCloseContainer}>
          <svg onClick={setModal} className={styles.modalClose} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M1 15L15 1.00003" stroke="#A6A6A6" stroke-width="2"/>
            <path d="M1 1L15 15" stroke="#A6A6A6" stroke-width="2"/>
          </svg>
        </div>
        <h1 className={styles.modalTitle}>{title}</h1>
        {children}
      </div> 
    </div>
  );
}

export default Modal;