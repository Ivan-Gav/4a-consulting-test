import { useCallback, useEffect, useState } from "react";

import { useMediaQuery } from "@react-hooks-hub/use-media-query";
import cn from "classnames";

import s from "./App.module.css";
import Header from "./components/header/Header";
import PlansSection from "./components/plans-section/PlansSection";
import Popup from "./components/popup/Popup";
import useAPI from "./hooks/useAPI";

function App() {
  const { device } = useMediaQuery({
    breakpoints: { desktop: 1100, tablet: 768, mobile: 0 },
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isDiscounted, setIsDiscounted] = useState(true);
  const { plans, isLoading, error } = useAPI();

  const handleTimer = useCallback(() => setIsDiscounted(false), []);
  const handleClose = useCallback(() => setShowPopup(false), []);
  const handleAnimation = useCallback(() => setShowPopup(true), []);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  if (error) {
    return <h1>Ошибка Сервера: {error}</h1>
  }

  return (
    <>
      <Header onTimer={handleTimer} />
      {isLoading ? <h1>Loading...</h1> :
      <>
      {showPopup && <Popup onCloseClick={handleClose} plans={plans} />}
      <main className={cn(s.main, s[device])}>
        <h1 className={cn(s.header, s[device])}>
          Выберите подходящий тарифный план
        </h1>
        <PlansSection
          isDiscounted={isDiscounted}
          onAnimationEnd={handleAnimation}
          plans={plans}
        />
      </main>
      </>
      }
    </>
  );
}

export default App;
