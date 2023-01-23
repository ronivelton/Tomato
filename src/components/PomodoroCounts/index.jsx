import tomatoIcon from '../../assets/tomato.svg';

export default function Counter({ counts }) {
  return (
    <div>
      <img src={tomatoIcon} alt="Tomato logo icon" />
      <span>{counts}</span>
    </div>
  );
}
