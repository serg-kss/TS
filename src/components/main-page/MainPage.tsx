import { ReactElement, useLayoutEffect }from 'react';
import styles from './MainPage.module.scss';
import axios from 'axios';
import QuestsList from './QuestsList';
import { useQuestStore } from '../../store/quest-store';
import { useQuestNavStore } from '../../store/quest-nav-store';
import { IQuestNav, IQuestsData } from '../../interfaces/interfaces';


function MainPage(): ReactElement {

    const location: string = 'квесты в США';
    const quest: string = 'Выберите тематику';

    const [quests ,questsFiltered]= useQuestStore((state) => [state.quests, state.questsFiltered]);
    const [setData, setDataFiltered] = useQuestStore((state) => [state.setData, state.setDataFiltered]);
    const questNav = useQuestNavStore ((state) => state.questNav);

    useLayoutEffect(() => {
        const getQuests = async (): Promise<IQuestsData[]> => {
            const { data } = await axios.get<IQuestsData[]>('http://localhost:3001/quests')
            setData(data)
            return data
        }
        getQuests();
      },[setData]);

  return (
    <div className={styles.MainPage}>
        <div className={styles.titleContainer}>
            <p className={styles.titleLocation}>{location}</p>
            <h1 className={styles.titleQuest}>{quest}</h1>
        </div>
        <ul className={styles.questsList}>
            {
                questNav.map( (el: IQuestNav): ReactElement =>
                   
                        <li>
                            <img src={el.img} alt={el.title} />
                            <p className={styles.questLink} onClick={()=>{setDataFiltered(el.type)}}>{el.title}</p>
                        </li>
                    
                )  
            }
        </ul>
        <div className={styles.questsContainer}>
             <QuestsList quests = {!questsFiltered.length ? quests : questsFiltered}/> 
        </div>
    </div>
  );
}

export default MainPage;
