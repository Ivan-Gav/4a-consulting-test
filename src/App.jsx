import { useCallback, useEffect, useState } from "react";

import cn from "classnames";

import s from "./App.module.css";
import Header from "./components/header/Header";
import PlansSection from "./components/plans-section/PlansSection";
import Popup from "./components/popup/Popup";
import Loading from "./components/ui/loading/Loading"
import useAPI from "./hooks/useAPI";
import useDevice from "./hooks/useDevice";

const POPUP_DELAY = 3000 // in msec

function App() {
  const { device } = useDevice();

  const [showPopup, setShowPopup] = useState(false);
  const [isDiscounted, setIsDiscounted] = useState(true);
  const { plans, isLoading, error } = useAPI();

  const handleTimer = useCallback(() => setIsDiscounted(false), []);
  const handleClose = useCallback(() => setShowPopup(false), []);
  const handleAnimation = useCallback(() =>{ 
    const popupDelay = setTimeout(() => setShowPopup(true), POPUP_DELAY)
    return () => clearTimeout(popupDelay)
    }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  const Error = () => <h1>Ошибка: {error}</h1>;

  return (
    <>
      <Header onTimer={handleTimer} />
      {!!error && <Error />}
      {!error && isLoading && <Loading />}
      {!error && !isLoading && (
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
      )}
    </>
  );
}

export default App;
