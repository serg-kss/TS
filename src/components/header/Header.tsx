import React , { ReactElement }from 'react';
import logo from '../../assets/sign.png';
import name from '../../assets/name.png';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
import { HeaderList } from '../../interfaces/interfaces';


function Header(): ReactElement {

    const tel:string = '0 (800) 333-55-99';
  

    const headerList: HeaderList[] = [
        {name: 'КВЕСТЫ', link: '/'},
        {name: 'НОВИЧКАМ', link: '/freshman'},
        {name: 'ОТЗЫВЫ', link: '/feedbacks'},
        {name: 'АКЦИИ', link: '/discounts'},
        {name: 'КОНТАКТЫ', link: '/contacts'},
    ]

  return (
    <div className={styles.header}>
        <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt="logo" />
            <img className={styles.name} src={name} alt="Escape Room" />
        </div>
        <ul className={styles.navigation}>
            {
                headerList.map(function (el:HeaderList): ReactElement{
                    return(
                        <li className={styles.navigationList}><Link className={styles.navigationLink} to={el.link}>{el.name}</Link></li>
                    )
                })
            }
        </ul>
        <p className={styles.phone}>{tel}</p>
    </div>
  );
}

export default Header;
