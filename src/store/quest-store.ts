import { create } from 'zustand';
import { IQuestState } from '../interfaces/interfaces';
import { filter, filterById } from '../utils/utils';


export const useQuestStore = create<IQuestState>()((set) => ({
    quests: [],
    questsFiltered: [],
    questId: 0,
    questsFilteredById: [],
    setData: (quests) => set((state) => ({quests: quests})),
    setDataFiltered: (param) => set((state) => ({questsFiltered: filter(param, state.quests)})),
    setDataId: (id) => set((state) => ({questId: id})),
    setDataFilteredById: (id) => set((state) => ({questsFilteredById: filterById(id, state.quests)}))
}))






