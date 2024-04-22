import { ReactElement } from 'react';
import styles from './ContactsInfo.module.scss';
import { IContactsInfo } from '../../interfaces/interfaces';


function ContactsInfo({title, text}:IContactsInfo): ReactElement {

  return (
    <div className={styles.contactsInfo}>
        <p className={styles.contactsInfoTitle}>{title}</p>
        <p className={styles.contactsInfoText}>{text}</p>
    </div>
  );
}

export default ContactsInfo;