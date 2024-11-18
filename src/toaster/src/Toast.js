import React, { memo, useMemo, useRef, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import Box from 'ui-box'
import Alert from '../../alert/src/Alert'

const ANIMATION_DURATION = 240

const defaultStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 0,
  transform: 'scale(1)',
  transition: `all ${ANIMATION_DURATION}ms cubic-bezier(0.0, 0.0, 0.2, 1)`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0, transform: 'scale(1)' },
  exited: { opacity: 0, transform: 'scale(0.9)' }
}

const Toast = memo(function Toast(props) {
  const {
    children,
    duration,
    hasCloseButton,
    // Template props
    intent = 'none',
    isShown: isShownProp,
    onRemove,
    title,
    zIndex
  } = props

  const transitionRef = useRef(null)
  const [isShown, setIsShown] = useState(true)
  const [height, setHeight] = useState(0)
  const closeTimer = useRef(null)

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }, [])

  const close = useCallback(() => {
    clearCloseTimer()
    setIsShown(false)
  }, [clearCloseTimer])

  const startCloseTimer = useCallback(() => {
    if (duration) {
      clearCloseTimer()
      closeTimer.current = setTimeout(() => {
        close()
      }, duration * 1000)
    }
  }, [duration, clearCloseTimer, close])

  useEffect(() => {
    startCloseTimer()

    return () => {
      clearCloseTimer()
    }
  }, [startCloseTimer, clearCloseTimer])

  useEffect(() => {
    if (isShownProp !== isShown && typeof isShownProp === 'boolean') {
      setIsShown(isShownProp)
    }
  }, [isShown, isShownProp])

  const handleMouseEnter = useCallback(() => clearCloseTimer(), [clearCloseTimer])
  const handleMouseLeave = useCallback(() => startCloseTimer(), [startCloseTimer])

  const onRef = useCallback(ref => {
    if (ref === null) return

    const { height: rectHeight } = ref.getBoundingClientRect()
    setHeight(rectHeight)
  }, [])

  const styles = useMemo(
    () => ({
      height,
      zIndex,
      marginBottom: isShown ? 0 : -height
    }),
    [isShown, height, zIndex]
  )

  return (
    <Transition
      nodeRef={transitionRef}
      appear
      unmountOnExit
      timeout={ANIMATION_DURATION}
      in={isShown}
      onExited={onRemove}
    >
      {state => (
        <Box
          ref={transitionRef}
          data-state={state || 'entered'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          // Styles object needs to be spread after defaultStyles, otherwise the height/zIndex is overridden
          // and earlier toasts will not be pushed down in the viewport
          style={{
            ...defaultStyles,
            ...transitionStyles[state],
            ...styles
          }}
        >
          <Box ref={onRef} padding={8}>
            <Alert
              flexShrink={0}
              appearance="card"
              elevation={3}
              intent={intent}
              title={title}
              isRemoveable={hasCloseButton}
              onRemove={close}
              pointerEvents="all"
            >
              {children}
            </Alert>
          </Box>
        </Box>
      )}
    </Transition>
  )
})

Toast.propTypes = {
  /**
   * The z-index of the toast.
   */
  zIndex: PropTypes.number,

  /**
   * Duration of the toast.
   */
  duration: PropTypes.number,

  /**
   * Function called when the toast is all the way closed.
   */
  onRemove: PropTypes.func,

  /**
   * The type of the alert.
   */
  intent: PropTypes.string,

  /**
   * The title of the alert.
   */
  title: PropTypes.node,

  /**
   * Description of the alert.
   */
  children: PropTypes.node,

  /**
   * When true, show a close icon button inside of the toast.
   */
  hasCloseButton: PropTypes.bool,

  /**
   * When false, will close the Toast and call onRemove when finished.
   */
  isShown: PropTypes.bool
}

export default Toast
