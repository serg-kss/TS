import { ReactElement } from 'react';
import styles from './ErrorPage.module.scss';


function ErrorPage(): ReactElement {

  return (
    <div className={styles.errorPage}>
      <div className={styles.errorPageContainer}>
        <p className={styles.errorPageText}>Сторінку не знайдено</p>
        <h1 className={styles.errorPageTitle}>Помилка 404</h1>
      </div>
    </div>
  );
}

export default ErrorPage;