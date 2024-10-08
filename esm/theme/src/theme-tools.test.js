import { getValue, mergeTheme, resolveThemeTokens } from './theme-tools';
describe('Theme tools', function () {
  describe('getValue', function () {
    it('returns the value based on a path lookup', function () {
      var obj = {
        foo: {
          bar: 'baz'
        }
      };
      var result = getValue(obj, 'foo.bar');
      expect(result).toEqual('baz');
    });
    it('returns the value as-is if the path cannot be resolved', function () {
      var obj = {
        foo: {
          bar: 'baz'
        }
      };
      var result = getValue(obj, '12px');
      expect(result).toEqual('12px');
    });
  });
  describe('mergeTheme', function () {
    it.each([undefined, null, {}])('should return unmodified destinationTheme when sourceTheme is %p', function (sourceTheme) {
      var destinationTheme = {
        colors: {
          gray900: '#101840',
          gray800: '#474d66',
          gray700: '#696f8c'
        }
      };
      var result = mergeTheme(destinationTheme, sourceTheme);
      expect(result).toStrictEqual(destinationTheme);
    });
    it('should override existing values', function () {
      var destinationTheme = {
        colors: {
          gray900: '#101840',
          gray800: '#474d66',
          gray700: '#696f8c'
        }
      };
      var sourceTheme = {
        colors: {
          gray700: 'updated'
        }
      };
      var result = mergeTheme(destinationTheme, sourceTheme);
      expect(result.colors.gray700).toBe(sourceTheme.colors.gray700);
    });
    it('should add new values without clobbering existing structure', function () {
      var destinationTheme = {
        components: {
          Button: {
            baseStyle: {
              _disabled: {
                cursor: 'not-allowed',
                pointerEvents: 'auto'
              }
            }
          }
        }
      };
      var sourceTheme = {
        components: {
          Button: {
            appearances: {
              tab: {
                _hover: {
                  backgroundColor: '#696f8c'
                },
                backgroundColor: 'white'
              }
            }
          }
        }
      };
      var result = mergeTheme(destinationTheme, sourceTheme);
      expect(result.components.Button.baseStyle).toMatchObject(destinationTheme.components.Button.baseStyle);
      expect(result.components.Button.appearances).toMatchObject(sourceTheme.components.Button.appearances);
    });
    it('should always return a new reference', function () {
      var destinationTheme = {
        colors: {
          gray900: '#101840',
          gray800: '#474d66',
          gray700: '#696f8c'
        }
      };
      var sourceTheme = {
        colors: {
          gray700: 'updated'
        }
      };
      var result = mergeTheme(destinationTheme, sourceTheme);
      expect(result).not.toEqual(destinationTheme);
    });
  });
  describe('resolveThemeTokens', function () {
    it('preserves nested object structures', function () {
      var theme = {};
      var props = {
        baseStyle: {
          color: 'blue'
        },
        appearances: {
          primary: {
            backgroundColor: 'pink'
          }
        }
      };
      var result = resolveThemeTokens(theme, props);
      expect(result).toEqual(props);
    });
    it('resolves keys if they exist in the theme', function () {
      var theme = {
        colors: {
          muted: 'gray',
          primary: 'pink'
        }
      };
      var props = {
        baseStyle: {
          color: 'colors.muted'
        },
        appearances: {
          primary: {
            backgroundColor: 'colors.primary'
          }
        }
      };
      var result = resolveThemeTokens(theme, props);
      expect(result).toEqual({
        baseStyle: {
          color: 'gray'
        },
        appearances: {
          primary: {
            backgroundColor: 'pink'
          }
        }
      });
    });
  });
});