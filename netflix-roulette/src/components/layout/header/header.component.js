import styles from './component.scss';
import NetflixRoulette from '../netflix-roulette';

const HeaderComponent = () => (
  <div className={styles.header}>
    <NetflixRoulette/>
  </div>
);

export default HeaderComponent;