import cn from "classnames";

import s from "./Header.module.css";
import useDevice from "src/hooks/useDevice";
import Timer from "../timer/Timer";

export default function Header({ onTimer }) {
  const { device } = useDevice();

  return (
    <header className={cn(s.header, s[device])}>
      <p className={cn(s.anouncement, s[device])}>Скидка действует:</p>
      <Timer onTimer={onTimer} />
    </header>
  );
}
