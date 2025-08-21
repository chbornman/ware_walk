import { useState, useEffect, useMemo } from 'react'
import Header from './components/Header'
import Welcome from './components/Welcome'
import PathMap from './components/PathMap'
import AboutMe from './components/AboutMe'
import PhotoGallery from './components/PhotoGallery'
import Resources from './components/Resources'
import NavigationDots from './components/NavigationDots'
import NavigationButtons from './components/NavigationButtons'

function App() {
  const [currentSection, setCurrentSection] = useState(0)

  const sections = useMemo(() => [
    { id: 'header', name: 'Home' },
    { id: 'welcome', name: 'Welcome' },
    { id: 'pathmap', name: 'Map' },
    { id: 'aboutme', name: 'About' },
    { id: 'resources', name: 'Resources' },
    { id: 'gallery', name: 'Gallery' }
  ], [])

  useEffect(() => {
    const handleScroll = (e) => {
      const container = e.target
      const scrollY = container.scrollTop
      const containerHeight = container.clientHeight

      // Find the current section based on scroll position
      let current = 0

      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i].id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          const sectionTop = offsetTop
          const sectionBottom = offsetTop + offsetHeight

          // Check if the viewport center is within this section
          const viewportCenter = scrollY + containerHeight / 2

          if (viewportCenter >= sectionTop && viewportCenter < sectionBottom) {
            current = i
            break
          }
          // If we've scrolled past the last section, set it as current
          else if (i === sections.length - 1 && viewportCenter >= sectionTop) {
            current = i
          }
        }
      }

      setCurrentSection(current)
    }

    // Get the scrollable container
    const container = document.querySelector('.overflow-y-auto')

    if (container) {
      // Add scroll listener to the container
      container.addEventListener('scroll', handleScroll, { passive: true })

      // Initial check
      handleScroll({ target: container })

      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [sections]) // Remove currentSection from dependencies to avoid re-registering

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    const container = document.querySelector('.overflow-y-auto')
    if (element && container) {
      container.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const handleNavigation = (direction) => {
    const newIndex = direction === 'next'
      ? Math.min(currentSection + 1, sections.length - 1)
      : Math.max(currentSection - 1, 0)
    scrollToSection(sections[newIndex].id)
  }

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      <NavigationDots
        sections={sections}
        currentSection={currentSection}
        onDotClick={scrollToSection}
      />
      <NavigationButtons
        currentSection={currentSection}
        totalSections={sections.length}
        onNavigate={handleNavigation}
      />
      <Header />
      <Welcome />
      <PathMap />
      <AboutMe />
      <Resources />
      <PhotoGallery />
    </div>
  )
}

export default App
