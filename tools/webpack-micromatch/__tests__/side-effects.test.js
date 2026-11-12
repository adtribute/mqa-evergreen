const SideEffectsFlagPlugin = require('webpack/lib/optimize/SideEffectsFlagPlugin')

test('preserves CSS side effects for package paths and basename patterns', () => {
  expect(SideEffectsFlagPlugin.moduleHasSideEffects('./styles/theme.css', ['styles/*.css'])).toBe(true)
  expect(SideEffectsFlagPlugin.moduleHasSideEffects('./components/theme.css', ['styles/*.css'])).toBe(false)
  expect(SideEffectsFlagPlugin.moduleHasSideEffects('./styles/theme.css', ['./**/*.css'])).toBe(true)
  expect(SideEffectsFlagPlugin.moduleHasSideEffects('./styles/theme.css', ['*.css'])).toBe(true)
  expect(SideEffectsFlagPlugin.moduleHasSideEffects('./styles/theme.css', ['theme.css'])).toBe(false)
})
