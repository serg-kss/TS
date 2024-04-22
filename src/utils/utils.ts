import axios from "axios";
import { IOrderPostData, IQuestsData } from "../interfaces/interfaces";


export function setLevel(param: string):string {
    let level: string = '';
    if (param === 'hard') {
        level = 'сложный';
        } else if (param === 'medium'){
        level = 'средний';
        } else if (param === 'easy'){
        level = 'легкий';
        }
    return level;
}

export function onSubmit (obj: IOrderPostData): void {
    console.log(obj)
    axios({
      method: 'post',
      url: 'http://localhost:3001/orders',
      data: {
        name: obj.name,
        peopleCount: obj.peopleCount,
        phone: obj.phone,
        isLegal: obj.isLegal
      }
    });
  }

  export function onSubmitPost (obj: IOrderPostData): void {
    console.log(obj)
    axios({
      method: 'post',
      url: 'http://localhost:3001/orders',
      data: {
        name: obj.name,
        peopleCount: obj.peopleCount,
        phone: obj.phone,
        isLegal: obj.isLegal
      }
    });
  }

//export  function filter(param: string, arr:IQuestsData[]):IQuestsData[]{

   // arr.reduce((el) => {

   // })
//}


export function filter(param: string, arr:IQuestsData[]):IQuestsData[]{
    let filteredArray: IQuestsData[] = [];
    arr.forEach((el)=>{
        if(el.type === param) filteredArray.push(el)

    })
//REWRITE TO REDUCE
    if(filteredArray.length === 0) return arr
    return filteredArray;
}

export function filterById (id: number, arr:IQuestsData[]):IQuestsData[] | []{
    let filteredArray: IQuestsData | undefined = arr.find((el) =>el.id === id) 
    return  filteredArray ?   [filteredArray] : []
   
}