import React, { memo, forwardRef } from 'react'
import { splitBoxProps } from '@maestroqa/ui-box'
import PropTypes from 'prop-types'
import { FormField } from '../../form-field'
import { useId } from '../../hooks'
import { generateAriaDescribedBy } from '../../lib/generate-aria-describedby'
import Select from './Select'

const SelectField = memo(
  forwardRef(function SelectField(props, ref) {
    const id = useId('SelectField', props.id)

    const {
      // We are using the id from the state
      appearance,

      // FormField props
      description,
      disabled,
      hint,
      id: unusedId,

      // TextInput props
      inputHeight = 32,
      /** The input width should be as wide as the form field. */
      inputWidth = '100%',
      isInvalid,
      label,
      required,
      validationMessage,

      // Rest props are spread on the FormField
      ...rest
    } = props

    /**
     * Split the wrapper props from the input props.
     */
    const { matchedProps, remainingProps } = splitBoxProps(rest)

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
        <Select
          id={id}
          width={inputWidth}
          height={inputHeight}
          disabled={disabled}
          required={required}
          isInvalid={isInvalid}
          appearance={appearance}
          ref={ref}
          aria-describedby={generateAriaDescribedBy(id, { description, hint, validationMessage })}
          {...remainingProps}
        />
      </FormField>
    )
  })
)

SelectField.propTypes = {
  /**
   * Composes the Select component as the base.
   */
  ...Select.propTypes,
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

export default SelectField
