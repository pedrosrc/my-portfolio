import './App.css'
import About from './about/About'
import Header from './components/Header/Header'
import Home from './home/Home'
import Projects from './projects/Projects'
import Skills from './skills/Skills'
import Contact from './contact/Contact'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <footer>
        <a href="https://github.com/pedrosrc" target='_blank'>
        Created by Pedro Leonardo
        </a>
      </footer>
    </>
  )
}

export default App
