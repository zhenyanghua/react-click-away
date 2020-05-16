import React from 'react'

export interface ClickOutsideProps {
  /**
   * Callback once click outside event is detected.
   * @param e `Event`
   */
  onClickOutside: (e: Event) => any
}

/**
 * Use this component to wrap other components to detect if it is clicked
 * outside of the wrapped container.
 */
const ClickOutside: React.FC<ClickOutsideProps> = ({
  onClickOutside,
  children,
  ...rest
}) => {
  const el = React.useRef<HTMLDivElement>(null)
  let isTouch = false

  const handle = (e: Event) => {
    if (e.type === 'touchend') {
      isTouch = true
    }

    if (e.type === 'click' && isTouch) {
      return
    }

    if (el.current && !el.current.contains(e.target as Node)) {
      onClickOutside(e)
    }
  }

  React.useEffect(() => {
    document.addEventListener('touchend', handle, true)
    document.addEventListener('click', handle, true)

    return () => {
      document.removeEventListener('touchend', handle, true)
      document.removeEventListener('click', handle, true)
    }
  }, [])

  return (
    <div {...rest} ref={el}>
      {children}
    </div>
  )
}

export default ClickOutside
