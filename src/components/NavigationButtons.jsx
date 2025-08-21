import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const NavigationButtons = ({ currentSection, totalSections, onNavigate }) => {
  const canGoUp = currentSection > 0
  const canGoDown = currentSection < totalSections - 1

  return (
    <>
      {canGoUp && (
        <button
          onClick={() => onNavigate('prev')}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 p-2 bg-neutral-900/80 backdrop-blur-sm rounded-full border border-neutral-700 hover:bg-neutral-800 hover:border-accent/50 transition-all duration-300 group animate-bounce"
          aria-label="Previous section"
        >
          <ChevronUpIcon className="w-5 h-5 text-neutral-300 group-hover:text-accent transition-colors" />
        </button>
      )}
      
      {canGoDown && (
        <button
          onClick={() => onNavigate('next')}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 p-2 bg-neutral-900/80 backdrop-blur-sm rounded-full border border-neutral-700 hover:bg-neutral-800 hover:border-accent/50 transition-all duration-300 group animate-bounce"
          aria-label="Next section"
        >
          <ChevronDownIcon className="w-5 h-5 text-neutral-300 group-hover:text-accent transition-colors" />
        </button>
      )}
    </>
  )
}

export default NavigationButtons