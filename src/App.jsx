import Header from './components/Header';
import Timer from './components/Timer';
import Counter from './components/Counter';

import styles from './App.module.css';

function App() {
  return (
    <div className="app">
      <div className={styles.container}>
        <Header />

        <main>
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
