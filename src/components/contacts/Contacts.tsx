import { ReactElement } from 'react';
import styles from './Contacts.module.scss';
import ContactsInfo from './ContactsInfo';
import { useContactsStore } from '../../store/contacts-store';
import { IContacts } from '../../interfaces/interfaces';


function Contacts(): ReactElement {

    const contactsList = useContactsStore((state) => state.contactsList);

  return (
    <div className={styles.contacts}>
        <div className={styles.contactsContainer}>
            <p className={styles.contactsPlace}>Игры в США</p>
            <h1 className={styles.contactsTitle}>Контакты</h1>
        </div>
        <div className={styles.contactsInfoWrapper}>
            <div className={styles.contactsInfoContainer}>
                {
                    contactsList.map((el:IContacts): ReactElement => {
                        return(<ContactsInfo title={el.title} text={el.text}/>)
                    })
                }
            </div>
            <div className={styles.contactsMap}>
                <iframe title='map' style={{border: 'none', borderRadius: '5px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.998324713829!2d24.0326081!3d49.842489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6d03cf8511%3A0x74310635f5da0be!2z0JrQsNC8J9GP0L3QuNGG0Y8g0JLRltC70YzRh9C60ZbQsiwg0L_Qu9C-0YnQsCDQoNC40L3QvtC6LCAzLCDQm9GM0LLRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc5MDAw!5e0!3m2!1suk!2sua!4v1713382887850!5m2!1suk!2sua" width="649" height="299" loading="lazy"></iframe>
            </div>
        </div>
    </div>
  );
}

export default Contacts;
