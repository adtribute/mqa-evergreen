import React from 'react'
import Box from 'ui-box'
import { FormField, FormFieldDescription, FormFieldLabel, FormFieldValidationMessage } from '..'

export default {
  title: 'form-field'
}

export const _FormField = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <FormField label="FormField Label">FormField Children</FormField>
    </Box>
  ),

  name: 'FormField'
}

export const _FormFieldDescription = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <FormFieldDescription>FormFieldDescription</FormFieldDescription>
    </Box>
  ),

  name: 'FormFieldDescription'
}

export const _FormFieldLabel = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <FormFieldLabel>FormFieldLabel</FormFieldLabel>
    </Box>
  ),

  name: 'FormFieldLabel'
}

export const _FormFieldValidationMessage = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <FormFieldValidationMessage>FormFieldValidationMessage</FormFieldValidationMessage>
      <Box width={240}>
        <FormFieldValidationMessage>
          greatly nearby muscle evening picture took afraid fallen reason flight shout crew research act beneath flow
          away cloth will pair world trip reach explain
        </FormFieldValidationMessage>
      </Box>
    </Box>
  ),

  name: 'FormFieldValidationMessage'
}
