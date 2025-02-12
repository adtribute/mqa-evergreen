import React from 'react'
import { fireEvent, render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TagInput from '../src/TagInput'

const TEST_VALUES = ['one', 'two', 'three']
const TEST_PLACEHOLDER = 'Enter something...'

describe('<TagInput />', () => {
  describe('onAdd', () => {
    it('should be called when a new value is entered', async () => {
      const mockOnAdd = jest.fn()
      const newTestVal = 'Testing'

      render(<TagInput values={TEST_VALUES} onAdd={mockOnAdd} inputProps={{ placeholder: TEST_PLACEHOLDER }} />)

      await userEvent.type(screen.getByPlaceholderText(TEST_PLACEHOLDER), `${newTestVal}{enter}`)

      expect(screen.queryByTestId('TagInput-autocomplete-toggle')).not.toBeInTheDocument()
      expect(mockOnAdd).toHaveBeenCalledWith([newTestVal])
    })
  })

  describe('onRemove', () => {
    it('should be called after hitting backspace', async () => {
      const mockOnRemove = jest.fn()

      render(<TagInput values={TEST_VALUES} onRemove={mockOnRemove} inputProps={{ placeholder: TEST_PLACEHOLDER }} />)
      await userEvent.type(screen.getByPlaceholderText(TEST_PLACEHOLDER), '{backspace}')

      const lastValueIndex = TEST_VALUES.length - 1
      expect(mockOnRemove).toHaveBeenCalledWith(TEST_VALUES[lastValueIndex], lastValueIndex)
    })
  })

  describe('onChange', () => {
    it('should be called when a value is added', async () => {
      const mockOnChange = jest.fn()
      const newTestVal = 'Testing'

      render(<TagInput values={TEST_VALUES} onChange={mockOnChange} inputProps={{ placeholder: TEST_PLACEHOLDER }} />)
      await userEvent.type(screen.getByPlaceholderText(TEST_PLACEHOLDER), `${newTestVal}{enter}`)

      expect(mockOnChange).toHaveBeenLastCalledWith(TEST_VALUES.concat([newTestVal]))
    })

    it('should be called when a value is removed', async () => {
      const mockOnChange = jest.fn()

      render(<TagInput values={TEST_VALUES} onChange={mockOnChange} inputProps={{ placeholder: TEST_PLACEHOLDER }} />)
      await userEvent.type(screen.getByPlaceholderText(TEST_PLACEHOLDER), '{backspace}')

      const valuesLastRemoved = TEST_VALUES.slice(0, -1)
      expect(mockOnChange).toHaveBeenLastCalledWith(valuesLastRemoved)
    })
  })

  describe('tagSubmitKey', () => {
    it('should allow entering values with space key', async () => {
      const mockOnAdd = jest.fn()
      const newTestVal = 'Testing'

      render(
        <TagInput
          tagSubmitKey="space"
          values={TEST_VALUES}
          onAdd={mockOnAdd}
          inputProps={{ placeholder: TEST_PLACEHOLDER }}
        />
      )

      await userEvent.type(screen.getByPlaceholderText(TEST_PLACEHOLDER), newTestVal)
      await userEvent.keyboard(' ')

      await waitFor(() => {
        expect(mockOnAdd).toHaveBeenCalledWith([newTestVal])
      })
    })
  })

  describe('disabled', () => {
    it('prop should disable input', () => {
      render(<TagInput disabled values={TEST_VALUES} inputProps={{ placeholder: TEST_PLACEHOLDER }} />)

      expect(screen.getByPlaceholderText(TEST_PLACEHOLDER)).toBeDisabled()
    })

    it('prop should remove X icons', () => {
      render(<TagInput disabled values={TEST_VALUES} inputProps={{ placeholder: TEST_PLACEHOLDER }} />)

      TEST_VALUES.forEach(value => {
        // Checks to make sure the "X" icon is not within each tag
        expect(screen.getByText(value).children.length).toBe(0)
      })
    })
  })

  describe('addOnBlur', () => {
    it('should allow adding new value on blur', async () => {
      const mockOnAdd = jest.fn()
      jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb())
      const newTestVal = 'Testing'

      render(
        <TagInput
          addOnBlur
          data-testid="wrapper"
          values={TEST_VALUES}
          onAdd={mockOnAdd}
          inputProps={{ placeholder: TEST_PLACEHOLDER }}
        />
      )

      await userEvent.type(screen.getByPlaceholderText(TEST_PLACEHOLDER), newTestVal)

      await act(async () => {
        screen.getByPlaceholderText(TEST_PLACEHOLDER).blur()
      })

      await act(async () => {
        fireEvent.blur(screen.getByPlaceholderText(TEST_PLACEHOLDER))
      })

      await waitFor(() => {
        expect(mockOnAdd).toHaveBeenCalledWith([newTestVal])
      })

      window.requestAnimationFrame.mockRestore()
    })
  })

  describe('separator', () => {
    it('prop should allow entering multiple values at a time', async () => {
      const mockOnAdd = jest.fn()
      const newTestVal = 'Testing|123'

      render(
        <TagInput separator="|" values={TEST_VALUES} onAdd={mockOnAdd} inputProps={{ placeholder: TEST_PLACEHOLDER }} />
      )
      await userEvent.type(screen.getByPlaceholderText(TEST_PLACEHOLDER), `${newTestVal}{enter}`)

      expect(mockOnAdd).toHaveBeenCalledWith(['Testing', '123'])
    })
  })

  describe('autocompleteItems', () => {
    it('should render a toggle button when provided', async () => {
      const mockOnAdd = jest.fn()
      const testAutocompleteItems = ['Testing1', 'Testing2', 'Testing3', 'Other']

      render(
        <TagInput
          autocompleteItems={testAutocompleteItems}
          values={TEST_VALUES}
          onAdd={mockOnAdd}
          inputProps={{ placeholder: TEST_PLACEHOLDER }}
        />
      )

      testAutocompleteItems.forEach(item => {
        expect(screen.queryByText(item)).not.toBeInTheDocument()
      })

      await userEvent.click(screen.getByTestId('TagInput-autocomplete-toggle'))

      testAutocompleteItems.forEach(item => {
        expect(screen.queryByText(item)).toBeInTheDocument()
      })
    })

    it('should reveal options based on search query', async () => {
      const mockOnAdd = jest.fn()
      const testAutocompleteItems = ['Testing1', 'Testing2', 'Testing3', 'Other']
      const testSearch = 'Test'

      render(
        <TagInput
          autocompleteItems={testAutocompleteItems}
          values={TEST_VALUES}
          onAdd={mockOnAdd}
          inputProps={{ placeholder: TEST_PLACEHOLDER }}
        />
      )

      testAutocompleteItems.forEach(item => {
        expect(screen.queryByText(item)).not.toBeInTheDocument()
      })

      await userEvent.type(screen.getByPlaceholderText(TEST_PLACEHOLDER), testSearch)

      testAutocompleteItems.forEach(item => {
        if (item.startsWith(testSearch)) {
          expect(screen.queryByText(item)).toBeInTheDocument()
        } else {
          expect(screen.queryByText(item)).not.toBeInTheDocument()
        }
      })
    })

    it('should allow user to add item via popover', async () => {
      const mockOnAdd = jest.fn()
      const testAutocompleteItems = ['Testing1', 'Testing2', 'Testing3', 'Other']

      render(
        <TagInput
          autocompleteItems={testAutocompleteItems}
          values={TEST_VALUES}
          onAdd={mockOnAdd}
          inputProps={{ placeholder: TEST_PLACEHOLDER }}
        />
      )
      await userEvent.click(screen.getByTestId('TagInput-autocomplete-toggle'))
      await userEvent.click(screen.getByText(testAutocompleteItems[0]))

      expect(mockOnAdd).toHaveBeenCalledWith([testAutocompleteItems[0]])
    })
  })
})
