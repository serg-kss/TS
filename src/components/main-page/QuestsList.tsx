import { ReactElement } from 'react';
import styles from './QuestsList.module.scss';
import person from '../../assets/person.png';
import devider from '../../assets/devider.png';
import puzzle from '../../assets/puzzle.png';
import { Link } from 'react-router-dom';
import { useQuestStore } from '../../store/quest-store';
import { IQuestsData, IQuestsProps } from '../../interfaces/interfaces';
import { setLevel } from '../../utils/utils';


function QuestsList(quests: IQuestsProps): ReactElement | null {

    const [setDataId, setDataFilteredById] = useQuestStore((state) => [state.setDataId, state.setDataFilteredById]);

  return (
    <div className={styles.quests}>
      {quests.quests.map(function (el: IQuestsData): ReactElement{
        const level: string = setLevel(el.level);
            return (
                    <Link to={`/detailed-quest/${el.id}`} onClick={() => {setDataId(el.id); setDataFilteredById(el.id)}} className={styles.questPic} 
                        style={
                         {
                            backgroundImage: `url(${require("../../assets/"+el.previewImg)})`, 
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                         }
                        }>
                        <h2 className={styles.questTitle}>{el.title}</h2>
                        <div className={styles.questInfo}>
                            <img src={person} alt="person" />
                            <p className={styles.questInfoText}>{el.peopleCount[0]} - {el.peopleCount[1]} чел</p>
                            <img src={devider} alt="devider" />
                            <img src={puzzle} alt="puzzle" />
                            <p className={styles.questInfoText}>{level}</p>
                        </div>
                    </Link>
                    )
                }) }
    </div>
  );
}

export default QuestsList;
