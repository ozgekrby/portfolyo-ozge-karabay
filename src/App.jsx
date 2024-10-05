import './App.css'
import { Provider } from 'react-redux'
import myStore from './redux/store'
import ModeSwitch from './components/Header/ModeSwitch'
import Header from './components/Header/Header'
import Hero from './components/Body/Hero'
import Skills from './components/Body/Skills'
import Projects from './components/Body/Projects'
import Footer from './components/Footer/Footer'
import Profile from './components/Body/Profile'

function App() {
  return (
    <>
    <Provider store={myStore}>
      <ModeSwitch />
      <Header/>
      <Hero />
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
    </Provider>
    </>
  )
}

export default App
