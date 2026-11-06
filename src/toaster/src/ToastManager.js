import React, { memo, useRef, useState } from 'react'
import Box from '@maestroqa/ui-box'
import PropTypes from 'prop-types'
import { StackingOrder } from '../../constants'
import Toast from './Toast'

const hasCustomId = settings => Object.hasOwnProperty.call(settings, 'id')

const ToastManager = memo(function ToastManager(props) {
  const { bindCloseAll, bindGetToasts, bindNotify, bindRemove } = props

  const [toasts, setToasts] = useState([])
  // Kept in a ref so several toasts created before the next render still get unique ids
  const idCounter = useRef(0)

  const getToasts = () => toasts

  // Every update below is applied to the latest state rather than the `toasts` captured at render time:
  // React batches toaster calls made in the same tick, so a closure over `toasts` would drop all but the last one.
  const closeAll = () => {
    setToasts(currentToasts => currentToasts.map(toast => ({ ...toast, isShown: false })))
  }

  /**
   * This will set isShown on the Toast which will close the toast.
   * It won't remove the toast until onExited triggers onRemove.
   */
  const safeCloseToast = id => {
    setToasts(currentToasts => {
      const toastToRemove = currentToasts.find(toast => String(toast.id).startsWith(id))

      if (!toastToRemove) {
        return currentToasts
      }

      return currentToasts.map(toast => {
        if (toast.id === toastToRemove.id) {
          return {
            ...toast,
            isShown: false
          }
        }

        return toast
      })
    })
  }

  const withoutToast = (currentToasts, id) => currentToasts.filter(toast => !String(toast.id).startsWith(id))

  const removeToast = id => {
    setToasts(currentToasts => withoutToast(currentToasts, id))
  }

  const createToastInstance = (title, settings) => {
    const uniqueId = idCounter.current
    idCounter.current += 1
    const id = hasCustomId(settings) ? `${settings.id}-${uniqueId}` : uniqueId

    return {
      id,
      title,
      description: settings.description,
      hasCloseButton: settings.hasCloseButton ?? true,
      duration: settings.duration || 5,
      close: () => safeCloseToast(id),
      intent: settings.intent
    }
  }

  const notify = (title, settings) => {
    const instance = createToastInstance(title, settings)

    setToasts(currentToasts => {
      const otherToasts = hasCustomId(settings) ? withoutToast(currentToasts, settings.id) : currentToasts
      return [instance, ...otherToasts]
    })
  }

  bindNotify(notify)
  bindRemove(safeCloseToast)
  bindGetToasts(getToasts)
  bindCloseAll(closeAll)

  return (
    <Box
      is="span"
      maxWidth={560}
      marginY={0}
      marginX="auto"
      top={0}
      left={0}
      right={0}
      position="fixed"
      zIndex={StackingOrder.TOASTER}
      pointerEvents="none"
    >
      {toasts.map(({ description, id, ...rest }) => {
        return (
          <Toast key={id} onRemove={() => removeToast(id)} {...rest}>
            {description}
          </Toast>
        )
      })}
    </Box>
  )
})

ToastManager.propTypes = {
  /**
   * Function called with the `this.notify` function.
   */
  bindNotify: PropTypes.func.isRequired,

  /**
   * Function called with the `this.remove` function.
   */
  bindRemove: PropTypes.func.isRequired,

  /**
   * Function called with the `this.getToasts` function.
   */
  bindGetToasts: PropTypes.func.isRequired,

  /**
   * Function called with the `this.closeAll` function.
   */
  bindCloseAll: PropTypes.func.isRequired
}

export default ToastManager
