
import { IQuestsData } from '../../interfaces/interfaces';
import { useModaltStore } from '../../store/modal-store';
import { useQuestStore } from '../../store/quest-store';
import { setLevel } from '../../utils/utils';
//import FormOrder from '../form/FormOrder';
import FormOrderHook from '../form/FormOrderHook';
import Modal from '../modal/Modal';
import styles from './Quest.module.scss';

function Quest() {

  const questsFilteredById = useQuestStore((state) => state.questsFilteredById);
  const quest: IQuestsData = questsFilteredById[0];
  const level: string = setLevel(quest.level);

  const [modal, setModal] = useModaltStore((state) => [state.modal, state.setModal]);

  return (
    <div className={styles.quest} style={
      {
        backgroundImage: `url(${require("../../assets/"+quest.coverImg)})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
      <div className={styles.questTitleContainer}>
        <p className={styles.questLevel}>{level}</p>
        <h1 className={styles.questTitle}>{quest.title}</h1>
      </div>
      <div className={styles.questInfoContainer}>
        <div className={styles.questInfoWrapper}>

        </div>
        <p className={styles.questDescription}>{quest.description}</p>
        <button className={styles.questBtn} onClick={setModal}><span>Принять участие</span></button>
      </div>
      {modal ? <Modal><FormOrderHook/></Modal>: ''}
    </div>
  );
}

export default Quest;
