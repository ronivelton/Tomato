import { useContext, useState } from 'react';
import ThemeContext from './context/ThemeSwitchContext/ThemeContext';

import Header from './components/Header';
import PomodoroMain from './components/PomodoroMain';
import PomodoroCounts from './components/PomodoroCounts';

import styles from './App.module.css';
import { lightToDark } from './utils/themeSwitcher';

function App() {
  const { theme } = useContext(ThemeContext);
  const [counts, setCounts] = useState(0);

  return (
    <div className={lightToDark(theme)}>
      <div className={styles.container}>
        <Header />

        <main className={styles.main}>
          <PomodoroMain setCounts={setCounts} />
        </main>

        <footer className={styles.pomodoroCounts}>
          <PomodoroCounts counts={counts} />
          <span>
            Made By <a href="https://github.com/user/ronivelton">Roni</a>
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
