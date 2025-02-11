import React from 'react'
import { faker } from '@faker-js/faker'
import { render } from '@testing-library/react'
import { UIBoxSerializer } from '../../../lib/testing'
import { ThemeProvider } from '../../theme'
import { defaultTheme } from '../../themes'
import Text from '../src/Text'

expect.addSnapshotSerializer(UIBoxSerializer)

test.each([
  ['size 300', 300],
  ['size 400', 400],
  ['size 500', 500],
  ['size 600', 600]
])('<Text /> %s renders as expected', async (_, size) => {
  const text = `Text ${size}`
  const { findByText } = render(
    <ThemeProvider value={defaultTheme}>
      <Text size={size}>{text}</Text>
    </ThemeProvider>
  )

  expect((await findByText(text)).outerHTML).toMatchSnapshot()
})

describe('Colors', () => {
  test('<Text /> accepts arbitrary theme values for color', async () => {
    const { findByText } = render(
      <ThemeProvider value={defaultTheme}>
        <Text color="muted">Testing</Text>{' '}
      </ThemeProvider>
    )

    expect((await findByText('Testing')).outerHTML).toMatchSnapshot()
  })

  test('<Text /> does not render any color when a non-theme color is passed in ', async () => {
    const { findByText } = render(
      <ThemeProvider value={defaultTheme}>
        <Text color="SOMETHING DOESNT EXISt">Testing</Text>{' '}
      </ThemeProvider>
    )

    expect((await findByText('Testing')).outerHTML).toMatchSnapshot()
  })
})

describe('Sizing', () => {
  const originalConsoleError = console.error
  const mockFn = jest.fn()
  beforeEach(() => {
    console.error = mockFn
  })

  afterEach(() => {
    console.error = originalConsoleError
  })
})

describe('Props', () => {
  it('should forward `className` prop', () => {
    const expected = faker.random.word().toLowerCase()
    const component = <Text className={expected}>Testing</Text>
    const { getByText } = render(component)
    expect(getByText('Testing')).toHaveClass(expected)
  })
})
