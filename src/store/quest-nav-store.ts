import { create } from 'zustand';

import adventure from '../assets/adventure.png';
import allQuests from '../assets/allQuests.png';
import detective from '../assets/detective.png';
import horror from '../assets/horror.png';
import mystic from '../assets/mystic.png';
import sciFi from '../assets/sciFi.png';

import { IQuestNavStore } from '../interfaces/interfaces';

export const useQuestNavStore = create<IQuestNavStore>()(() => ({
    questNav: [
        {img: allQuests, type: 'all-quests', title: 'Все квесты'},
        {img: adventure, type: 'adventures', title: 'Приключения'},
        {img: horror, type: 'horror', title: 'Ужасы'},
        {img: mystic, type: 'mystic', title: 'Мистика'},
        {img: detective, type: 'detective', title: 'Детектив'},
        {img: sciFi, type: 'sci-fi', title: 'Sci-fi'},
    ] ,
}))