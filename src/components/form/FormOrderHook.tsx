import { ReactElement } from 'react';
import styles from './FormOrder.module.scss';
import { useForm } from 'react-hook-form';
import { string, z } from "zod";
import { IOrderPostData } from '../../interfaces/interfaces';
import { onSubmitPost } from '../../utils/utils';
import { zodResolver } from "@hookform/resolvers/zod";


export default function FormOrderHook(): ReactElement {
  
  const textBtn: string = 'Відправити заявку';

  const formSchema = z.object({
    name: z.string().min(2, {message: 'Name is too short'}).max(10, {message: 'Name is too long'}),
    peopleCount: z.number().gte(1).lte(5),
    phone: string().regex(/\+8\(\d{3}\)\d{3}-\d{2}-\d{2}/, {message: 'phone format +8(999)999-99-99'}),
    isLegal: z.boolean()
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrderPostData>({
    resolver: zodResolver(formSchema), // Apply the zodResolver
  })

  const onSubmit = handleSubmit((data) => {
    // в дате peopleCount строка, не дает вручную форматировать в число через parceInt
    const validation = formSchema.safeParse(data)
    if (validation.success) {
        onSubmitPost(data)
    } else if (!validation.success){
        const error = validation.error.format()
        console.log(error)
        //ошибки не выводит в консоль
    }
    }
  )

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input type="text" {...register("name", {required: true})} className={styles.formInput} />
      <p className={styles.formError}>{errors.name?.message}</p>
      <input type="tel" {...register("phone")} className={styles.formInput} />
      <p className={styles.formError}>{errors.phone?.message}</p>
      <input type="number" {...register("peopleCount")} className={styles.formInput}/>
      <p className={styles.formError}>{errors.peopleCount?.message}</p>
      <div className={styles.formContainer}>
        <div className={styles.formCheckBoxWrapper}>
          <input type="checkbox"  {...register("isLegal")}/>
          <label htmlFor=""></label>
        </div>
        <p className={styles.formText}>Погоджуюсь з <span>правилами обробки персональних даних</span> та <span>угодою користувачів</span></p>
      </div>
      <button className={styles.formBtn}>{textBtn}</button>
    </form>
  );
}
