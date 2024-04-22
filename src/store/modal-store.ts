import { create } from "zustand";
import { IModalTrigger } from "../interfaces/interfaces";


export const useModaltStore = create<IModalTrigger>()((set) => ({
    modal: false,
    title: ['Заявка на гру'],
    setModal: () => set((state) => ({modal: !state.modal})),
}))