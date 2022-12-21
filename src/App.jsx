import logo from './assets/tomato-logo.svg';
import settingsIcon from './assets/settings.svg';
import tomatoIcon from './assets/tomato.svg';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <header>
          <div className="logo">
            <img src={logo} alt="Logo Tomato" />
          </div>
          <button type="button" className="btn-settings">
            <img src={settingsIcon} alt="Settings button" />
          </button>
        </header>

        <main>
          <div className="pomodoro-timer">
            <button className="btn-minus" type="button">
              -
            </button>
            <span>05:00</span>
            <button className="btn-plus" type="button">
              +
            </button>
          </div>
          <button className="btn-start" type="button">
            Start
          </button>
        </main>

        <footer className="pomodoro-counts">
          <img src={tomatoIcon} alt="Tomato logo icon" />
          <span>0</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
