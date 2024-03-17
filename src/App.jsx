import { useCallback, useState } from "react";

import { useMediaQuery } from "@react-hooks-hub/use-media-query";
import cn from "classnames";

import s from './App.module.css'
import Header from './components/header/Header'
import PlansSection from './components/plans-section/PlansSection'
import Popup from "./components/popup/Popup";

function App() {
  const { device } = useMediaQuery({
    breakpoints: { desktop: 1100, tablet: 768, mobile: 0 },
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleTimer = useCallback(() => setShowPopup(true),[])
  const handleClose = useCallback(() => setShowPopup(false),[])

  return (
    <>
      <Header onTimer={handleTimer}/>
      {showPopup && <Popup onCloseClick={handleClose}/>}
      <main className={cn(s.main, s[device])}>
        <h1 className={cn(s.header, s[device])}>Выберите подходящий тарифный план</h1>
        <PlansSection />
      </main>
    </>
  )
}

export default App
