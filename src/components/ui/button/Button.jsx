import cn from "classnames";

import s from "./Button.module.css";

export default function Button(props) {
  const { children, className, ...restOfProps } = props;

  return (
    <button className={cn(s.btn, className)} {...restOfProps}>
      {children}
    </button>
  );
}
