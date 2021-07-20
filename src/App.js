import { Cards } from './domains/Cards/Cards'
import { Header } from './components/Header/Header'
import { Home } from './domains/Home/Home'
import { Footer } from './components/Footer/Footer'
import { Rules } from './domains/Rules/Rules'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Rules />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
