import { create } from "zustand";
import { IContactsStore } from "../interfaces/interfaces";


export const useContactsStore = create<IContactsStore>()(() => ({
    contactsList: [
        {title: 'Адреса', text: 'Львів, Площа Ринок 3Б'},
        {title: 'Години роботи', text: 'Щоденно, з 9:00 до 20:00'},
        {title: 'Телефон', text: '+38 (050) 555-99-55'},
        {title: 'E-mail', text: 'lviv.games@game.ua'},
    ]
}))