import logo from '../../assets/tomato-logo.svg';
import settingsIcon from '../../assets/settings.svg';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="logo">
        <img src={logo} alt="Logo Tomato" />
      </div>
      <button type="button" className="btn-settings">
        <img src={settingsIcon} alt="Settings button" />
      </button>
    </header>
  );
}
