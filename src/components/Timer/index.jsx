import styles from './Timer.module.css';

export default function Timer() {
  return (
    <>
      <div className={styles.pomodoroTimer}>
        <button className="btnMinus" type="button">
          -
        </button>
        <span>05:00</span>
        <button className="btnPlus" type="button">
          +
        </button>
      </div>
      <button className="btnStart" type="button">
        Start
      </button>
    </>
  );
}
