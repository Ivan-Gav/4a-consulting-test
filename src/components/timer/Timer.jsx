import { useMediaQuery } from "@react-hooks-hub/use-media-query";
import cn from "classnames";

import s from './Timer.module.css';
import Colon from 'src/assets/svg/colon.svg'

export default function Timer() {
  const { device } = useMediaQuery({
    breakpoints: { desktop: 1100, tablet: 768, mobile: 0 },
  });
  
  return (
    <div className={cn(s.timer, s[device])}>
      <div className={s.min}>09</div>
      <div className={s.colon}><Colon /></div>
      <div className={s.sec}>59</div>
      <div className={s.legend_m}>минут</div>
      <div className={s.legend_s}>секунд</div>
    </div>
  )
}
