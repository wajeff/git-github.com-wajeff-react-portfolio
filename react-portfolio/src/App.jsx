
import styles from './App.module.css'
import { Hero } from '/src/components/Hero/Hero.jsx'
import { Navbar } from '/src/components/Navbar/Navbar.jsx'
import { About } from '/src/components/About/About.jsx'
import { Experience } from './components/Experience/Experience'
function App() {

  return (
    <div className ={styles.App}>
      <Navbar/>
      <Hero />
      <About />
      <Experience />
    </div>
  )
}

export default App
