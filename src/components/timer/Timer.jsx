import s from './Timer.module.css';
import Colon from 'src/assets/svg/colon.svg'

export default function Timer() {
  return (
    <div className={s.timer}>
      <div className={s.min}>09</div>
      <div className={s.colon}><Colon /></div>
      <div className={s.sec}>59</div>
      <div className={s.legend_m}>минут</div>
      <div className={s.legend_s}>секунд</div>
    </div>
  )
}
