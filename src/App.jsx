import Header from './components/Header'
import Welcome from './components/Welcome'
import PathMap from './components/PathMap'
import AboutMe from './components/AboutMe'
import Resources from './components/Resources'

function App() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      <Header />
      <Welcome />
      <PathMap />
      <AboutMe />
      <Resources />
    </div>
  )
}

export default App
