import React, { forwardRef, memo } from 'react'
import { splitBoxProps } from '@maestroqa/ui-box'
import PropTypes from 'prop-types'
import { FormField } from '../../form-field'
import { useId } from '../../hooks'
import { generateAriaDescribedBy } from '../../lib/generate-aria-describedby'
import { majorScale } from '../../scales'
import TextInput from './TextInput'

const TextInputField = memo(
  forwardRef(function TextInputField(props, ref) {
    const id = useId('TextInputField', props.id)

    const {
      // We are using the id from the state
      appearance,

      // FormField props
      description,
      disabled,
      hint,
      id: unusedId,

      // TextInput props
      inputHeight = majorScale(4),
      inputWidth = '100%',
      isInvalid,
      label,
      placeholder,
      required,
      spellCheck,
      validationMessage,

      // Rest props are spread on the FormField
      ...restProps
    } = props

    /**
     * Split the wrapper props from the input props.
     */
    const { matchedProps, remainingProps } = splitBoxProps(restProps)

    return (
      <FormField
        marginBottom={24}
        label={label}
        isRequired={required}
        hint={hint}
        description={description}
        validationMessage={validationMessage}
        labelFor={id}
        {...matchedProps}
      >
        <TextInput
          id={id}
          width={inputWidth}
          height={inputHeight}
          disabled={disabled}
          required={required}
          isInvalid={isInvalid}
          appearance={appearance}
          placeholder={placeholder}
          spellCheck={spellCheck}
          ref={ref}
          aria-describedby={generateAriaDescribedBy(id, { description, hint, validationMessage })}
          {...remainingProps}
        />
      </FormField>
    )
  })
)

TextInputField.propTypes = {
  /**
   * Composes the TextInput component as the base.
   */
  ...TextInput.propTypes,
  ...FormField.propTypes,

  /**
   * The label used above the input element.
   */
  label: PropTypes.node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: PropTypes.string,

  /**
   * Whether or not to show an asterix after the label.
   */
  required: PropTypes.bool,

  /**
   * An optional description of the field under the label, above the input element.
   */
  description: PropTypes.node,

  /**
   * An optional hint under the input element.
   */
  hint: PropTypes.node,

  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint. This is unaffected by `isInvalid`.
   */
  validationMessage: PropTypes.node,

  /**
   * The height of the input element.
   */
  inputHeight: PropTypes.number,

  /**
   * The width of the input width.
   */
  inputWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default TextInputField
