import styles from './PomodoroButton.module.css';

export default function PomodoroButton({
  handlePomodoroAction,
  className,
  children,
}) {
  return (
    <button
      onClick={() => handlePomodoroAction()}
      className={`${className} ${styles.pomodoroButton}`}
      type="button"
    >
      {children}
    </button>
  );
}
