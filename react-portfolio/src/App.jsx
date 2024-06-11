
import styles from './App.module.css'
import { Hero } from '/src/components/Hero/Hero.jsx'
import { Navbar } from '/src/components/Navbar/Navbar.jsx'

function App() {

  return (
    <div className ={styles.App}>
      <Navbar/>
      <Hero />
    </div>
  )
}

export default App
