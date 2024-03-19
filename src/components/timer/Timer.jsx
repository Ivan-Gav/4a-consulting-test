import { useEffect, useState } from "react";
import cn from "classnames";

import s from "./Timer.module.css";
import useDevice from "src/hooks/useDevice";
import Colon from "src/assets/svg/colon.svg";

const STARTING_TIME = 5; // in seconds
const THRESHOLD_TIME = 3; // in seconds

export default function Timer({ onTimer }) {
  const [time, setTime] = useState(STARTING_TIME);
  const [isThresholdPassed, SetIsThresholdPassed] = useState(false);

  const { device } = useDevice();

  useEffect(() => {
    let count;
    if (time === 0) {
      onTimer();
    } else {
      count = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
    if (time === THRESHOLD_TIME) {
      SetIsThresholdPassed(true);
    }
    return () => clearInterval(count);
  }, [time, onTimer]);

  let min = new Intl.NumberFormat("en-IN", { minimumIntegerDigits: 2 }).format(
    Math.floor(time / 60)
  );
  let sec = new Intl.NumberFormat("en-IN", { minimumIntegerDigits: 2 }).format(
    Math.floor(time % 60)
  );

  return (
    <div className={cn(s.timer, s[device])}>
      <div
        className={cn(
          s.min,
          s.display,
          isThresholdPassed && s.threshold_passed
        )}
      >
        {min}
      </div>
      <div
        className={cn(
          s.colon,
          s.display,
          isThresholdPassed && s.threshold_passed
        )}
      >
        <Colon />
      </div>
      <div
        className={cn(
          s.sec,
          s.display,
          isThresholdPassed && s.threshold_passed
        )}
      >
        {sec}
      </div>
      <div className={s.legend_m}>минут</div>
      <div className={s.legend_s}>секунд</div>
    </div>
  );
}
