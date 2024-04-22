export interface IQuestsData {
    id: number,
    title: string,
    description: string,
    previewImg: string,
    coverImg: string,
    type: string,
    level: string,
    peopleCount: number[],
    duration: number
  }

export interface IQuestState {
  quests: IQuestsData[]
  questsFiltered: IQuestsData[]
  questId: number
  questsFilteredById: IQuestsData[]
  setData: (quests: IQuestsData[]) => void
  setDataFiltered: (param: string) =>void
  setDataId: (param: number) =>void
  setDataFilteredById: (param: number) => void
}

export interface IQuestNav {
    img: string,
    type: string,
    title: string
}

export interface IQuestNavStore {
    questNav: IQuestNav[]
}

export interface IContacts{
    title: string,
    text: string
}

export interface IContactsStore {
    contactsList: IContacts[]
}

export interface IModalTrigger {
    modal: boolean
    title: string[]
    setModal: () => void
}

export interface IOrderPostData{
    name: string,
    peopleCount: number,
    phone: string,
    isLegal: boolean
}

export interface IContactsInfo {
    title: string,
    text: string
}

export interface HeaderList {
    name: string,
    link: string
}

export interface IQuestsProps {
    quests: IQuestsData[]
}