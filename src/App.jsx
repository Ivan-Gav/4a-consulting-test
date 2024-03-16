import './App.css'
import Header from './components/header/Header'
import PlansSection from './components/plans-section/PlansSection'

function App() {

  return (
    <>
      <Header />
      <main>
        <h1>Выберите подходящий тарифный план</h1>
        <PlansSection />
      </main>
    </>
  )
}

export default App
