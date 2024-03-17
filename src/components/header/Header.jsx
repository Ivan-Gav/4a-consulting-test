import { useMediaQuery } from "@react-hooks-hub/use-media-query";
import cn from "classnames";

import Timer from "../timer/Timer";
import s from "./Header.module.css";

export default function Header() {
  const { device } = useMediaQuery({
    breakpoints: { desktop: 1100, tablet: 768, mobile: 0 },
  });

  return (
    <header className={cn(s.header, s[device])}>
      <p className={cn(s.anouncement, s[device])}>Скидка действует:</p>
      <Timer />
    </header>
  );
}
