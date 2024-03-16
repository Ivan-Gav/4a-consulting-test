import Timer from '../timer/Timer';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <p className={s.anouncement}>Скидка действует:</p>
      <Timer />
    </header>
  )
}
