import { useContext } from 'react';
import ThemeContext from './context/ThemeSwitchContext/ThemeContext';

import Header from './components/Header';
import Timer from './components/Timer';
import Counter from './components/Counter';

import styles from './App.module.css';
import { lightToDark } from './utils/themeSwitcher';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={lightToDark(theme)}>
      <div className={styles.container}>
        <Header />

        <main className={styles.main}>
          <Timer />
        </main>

        <footer className={styles.pomodoroCounter}>
          <Counter />
        </footer>
      </div>
    </div>
  );
}

export default App;
