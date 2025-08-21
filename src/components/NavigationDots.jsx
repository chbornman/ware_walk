const NavigationDots = ({ sections, currentSection, onDotClick }) => {
  return (
    <div className="fixed right-6 lg:right-8 xl:right-10 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => onDotClick(section.id)}
          className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
            currentSection === index
              ? 'bg-accent scale-125'
              : 'bg-neutral-600 hover:bg-neutral-400 hover:scale-110'
          }`}
          aria-label={`Go to ${section.name}`}
        >
          <span className="absolute right-6 top-1/2 -translate-y-1/2 px-2 py-1 bg-neutral-900/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {section.name}
          </span>
        </button>
      ))}
    </div>
  )
}

export default NavigationDots