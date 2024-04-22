import styles from './Footer.module.scss';
import skype from '../../assets/skype.png';
import vk from '../../assets/vk.png';

function Footer() {

  return (
    <div className={styles.footer}>
        <a className={styles.skypeWrapper} href='/#'>
            <img src={skype} alt="skype" />
        </a>
        <a className={styles.vkWrapper} href='/#'>
            <img src={vk} alt="vk" />
        </a>
    </div>
  );
}

export default Footer;
