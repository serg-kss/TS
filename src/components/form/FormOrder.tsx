import { ReactElement } from 'react';
import styles from './FormOrder.module.scss';
import { onSubmit } from '../../utils/utils';


type FormFields = {
  clientName: HTMLInputElement,
  clientPhone: HTMLInputElement,
  clientsNumber: HTMLInputElement,
  isLegal: HTMLInputElement
}


function FormOrder(): ReactElement {
  
  const textBtn: string = 'Відправити заявку';


  const handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const {clientName, clientPhone, clientsNumber, isLegal} = form;
    const agreement = (isLegal: string): boolean => {
      let result: boolean = false;
      if (isLegal === 'on') {
        result = true;
      }
      return result;
    }
    onSubmit({
      name: clientName.value,
      peopleCount: parseInt(clientsNumber.value),
      phone: clientPhone.value,
      isLegal: agreement(isLegal.value)
    })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text" name="clientName" className={styles.formInput} required/>
      <input type="tel" name="clientPhone" className={styles.formInput} required/>
      <input type="number" name="clientsNumber" className={styles.formInput} required/>
      <div className={styles.formContainer}>
        <div className={styles.formCheckBoxWrapper}>
          <input type="checkbox" name="isLegal" id="" required/>
          <label htmlFor=""></label>
        </div>
        <p className={styles.formText}>Погоджуюсь з <span>правилами обробки персональних даних</span> та <span>угодою користувачів</span></p>
      </div>
      <button className={styles.formBtn} type="submit">{textBtn}</button>
    </form>
  );
}

export default FormOrder;