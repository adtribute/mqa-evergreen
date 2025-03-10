import React, { memo } from 'react'
import { keyframes } from '@maestroqa/ui-box'
import PropTypes from 'prop-types'
import { Button, IconButton } from '../../buttons'
import { useStyleConfig } from '../../hooks'
import { CrossIcon } from '../../icons'
import { Pane } from '../../layers'
import { Overlay } from '../../overlay'
import { Paragraph, Heading } from '../../typography'

const animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)'
}

const ANIMATION_DURATION = 200

const openAnimation = keyframes('openAnimation', {
  from: {
    transform: 'scale(0.8)',
    opacity: 0
  },
  to: {
    transform: 'scale(1)',
    opacity: 1
  }
})

const closeAnimation = keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.8)',
    opacity: 0
  }
})

const enterAnimationProps = {
  animationName: openAnimation,
  animationDuration: ANIMATION_DURATION,
  animationTimingFunction: animationEasing.deceleration,
  animationFillMode: 'both'
}

const animationStyles = {
  selectors: {
    '&[data-state="entering"]': enterAnimationProps,
    '&[data-state="entered"]': enterAnimationProps,
    '&[data-state="exiting"]': {
      animationName: closeAnimation,
      animationDuration: ANIMATION_DURATION,
      animationTimingFunction: animationEasing.acceleration,
      animationFillMode: 'both'
    }
  }
}

const closeHandler = close => close()
const emptyProps = {}

const Dialog = memo(function Dialog({
  children,
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  containerProps = emptyProps,
  contentContainerProps,
  footer,
  hasCancel = true,
  hasClose = true,
  hasFooter = true,
  hasHeader = true,
  header,
  intent = 'none',
  isConfirmDisabled = false,
  isConfirmLoading = false,
  isShown = false,
  minHeightContent = 80,
  onCancel = closeHandler,
  onCloseComplete,
  onConfirm = closeHandler,
  onOpenComplete,
  overlayProps = emptyProps,
  preventBodyScrolling = false,
  shouldAutoFocus = true,
  shouldCloseOnEscapePress = true,
  shouldCloseOnOverlayClick = true,
  sideOffset = '16px',
  title,
  topOffset = '12vmin',
  width = 560
}) {
  const sideOffsetWithUnit = Number.isInteger(sideOffset) ? `${sideOffset}px` : sideOffset
  const maxWidth = `calc(100% - ${sideOffsetWithUnit} * 2)`

  const topOffsetWithUnit = Number.isInteger(topOffset) ? `${topOffset}px` : topOffset
  const maxHeight = `calc(100% - ${topOffsetWithUnit} * 2)`

  const renderChildren = close => {
    if (typeof children === 'function') {
      return children({ close })
    }

    if (typeof children === 'string') {
      return <Paragraph>{children}</Paragraph>
    }

    return children
  }

  const renderNode = (node, close) => {
    if (typeof node === 'function') {
      return node({ close })
    }

    return node
  }

  const themedHeaderProps = useStyleConfig('DialogHeader', emptyProps, emptyProps, emptyProps)
  const themedBodyProps = useStyleConfig('DialogBody', emptyProps, emptyProps, emptyProps)
  const themedFooterProps = useStyleConfig('DialogFooter', emptyProps, emptyProps, emptyProps)

  const renderHeader = close => {
    if (!header && !hasHeader) {
      return undefined
    }

    return (
      <Pane flexShrink={0} display="flex" alignItems="center" {...themedHeaderProps}>
        {header ? (
          renderNode(header, close)
        ) : (
          <>
            <Heading is="h4" size={600} flex="1">
              {title}
            </Heading>
            {hasClose && <IconButton appearance="minimal" icon={CrossIcon} onClick={() => onCancel(close)} />}
          </>
        )}
      </Pane>
    )
  }

  const renderFooter = close => {
    if (!footer && !hasFooter) {
      return undefined
    }

    return (
      <Pane display="flex" justifyContent="flex-end" {...themedFooterProps}>
        <Pane>
          {footer ? (
            renderNode(footer, close)
          ) : (
            <>
              {/* Cancel should be first to make sure focus gets on it first. */}
              {hasCancel && (
                <Button tabIndex={0} onClick={() => onCancel(close)}>
                  {cancelLabel}
                </Button>
              )}

              <Button
                tabIndex={0}
                marginLeft={8}
                appearance="primary"
                intent={intent}
                isLoading={isConfirmLoading}
                disabled={isConfirmDisabled}
                onClick={() => onConfirm(close)}
              >
                {confirmLabel}
              </Button>
            </>
          )}
        </Pane>
      </Pane>
    )
  }

  const { className: containerClassName, ...remainingContainerProps } = containerProps

  return (
    <Overlay
      isShown={isShown}
      shouldAutoFocus={shouldAutoFocus}
      shouldCloseOnClick={shouldCloseOnOverlayClick}
      shouldCloseOnEscapePress={shouldCloseOnEscapePress}
      onExited={onCloseComplete}
      onEntered={onOpenComplete}
      containerProps={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        ...overlayProps
      }}
      preventBodyScrolling={preventBodyScrolling}
    >
      {({ close, state }) => (
        <Pane
          {...animationStyles}
          role="dialog"
          backgroundColor="white"
          elevation={4}
          borderRadius={8}
          width={width}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
          marginX={sideOffsetWithUnit}
          marginY={topOffsetWithUnit}
          display="flex"
          flexDirection="column"
          className={containerClassName}
          data-state={state}
          {...remainingContainerProps}
        >
          {renderHeader(close)}

          <Pane
            data-state={state}
            display="flex"
            overflow="auto"
            flexDirection="column"
            minHeight={minHeightContent}
            {...themedBodyProps}
            {...contentContainerProps}
          >
            <Pane>{renderChildren(close)}</Pane>
          </Pane>

          {renderFooter(close)}
        </Pane>
      )}
    </Overlay>
  )
})

Dialog.propTypes = {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph /> is used to wrap the string.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The intent of the Dialog. Used for the button.
   */
  intent: PropTypes.string,

  /**
   * When true, the dialog is shown.
   */
  isShown: PropTypes.bool,

  /**
   * Title of the Dialog. Titles should use Title Case.
   */
  title: PropTypes.node,

  /**
   * When true, the header with the title and close icon button is shown.
   */
  hasHeader: PropTypes.bool,

  /**
   * You can override the default header with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Header can either be a React node or a function accepting `({ close })`.
   */
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: PropTypes.bool,

  /**
   * You can override the default footer with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Footer can either be a React node or a function accepting `({ close })`.
   */
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * When true, the cancel button is shown.
   */
  hasCancel: PropTypes.bool,

  /**
   * When true, the close button is shown
   */
  hasClose: PropTypes.bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   *
   * `onConfirm={(close) => close()}`
   */
  onConfirm: PropTypes.func,

  /**
   * Label of the confirm button.
   */
  confirmLabel: PropTypes.string,

  /**
   * When true, the confirm button is set to loading.
   */
  isConfirmLoading: PropTypes.bool,

  /**
   * When true, the confirm button is set to disabled.
   */
  isConfirmDisabled: PropTypes.bool,

  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   *
   * `onCancel={(close) => close()}`
   */
  onCancel: PropTypes.func,

  /**
   * Label of the cancel button.
   */
  cancelLabel: PropTypes.string,

  /**
   * Controls whether the overlay should automatically try to bring focus inside.
   * @default true
   */
  shouldAutoFocus: PropTypes.bool,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   * @default true
   */
  shouldCloseOnOverlayClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   * @default true
   */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
   * Width of the Dialog.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The space above the dialog.
   * This offset is also used at the bottom when there is not enough vertical
   * space available on screen — and the dialog scrolls internally.
   */
  topOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The space on the left/right sides of the dialog when there isn't enough
   * horizontal space available on screen.
   */
  sideOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The min height of the body content.
   * Makes it less weird when only showing little content.
   */
  minHeightContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: PropTypes.object,

  /**
   * Props that are passed to the content container.
   */
  contentContainerProps: PropTypes.object,

  /**
   * Whether or not to prevent scrolling in the outer body
   * @default false
   */
  preventBodyScrolling: PropTypes.bool,

  /**
   * Props that are passed to the Overlay component.
   */
  overlayProps: PropTypes.object
}

export default Dialog
