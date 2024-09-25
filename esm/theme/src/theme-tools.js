import _typeof from "@babel/runtime/helpers/esm/typeof";
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import merge from 'lodash.merge';
export function get(obj, path, fallback) {
  var keys = path && path.split ? path.split('.') : [path];
  var value = obj;
  var _iterator = _createForOfIteratorHelper(keys),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      value = value ? value[key] : undefined;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return value === undefined ? fallback : value;
}

/**
 * Gets a value from the given theme based on a path when present,
 * else returns the provided value
 * @param {object} theme
 * @param {unknown} pathOrValue
 */
export function getValue(theme, pathOrValue) {
  return get(theme, pathOrValue, pathOrValue);
}

/**
 * Adds or overrides theme values on top of an existing theme object
 * @param destinationTheme Theme object to merge on top of
 * @param sourceTheme Theme object that adds or overrides values
 */
export function mergeTheme(destinationTheme, sourceTheme) {
  return merge({}, destinationTheme, sourceTheme);
}

/**
 * Resolves an object (or style config) when referencing theme paths
 * It will preserve the original object structure (nesting)
 * @param {object} theme
 * @param {object} obj
 * @returns {object} a new object with theme-resolved properties
 */
export function resolveThemeTokens(theme, obj) {
  var result = {};
  for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    var raw = obj[key];
    if (raw === null) {
      continue;
    }
    if (_typeof(raw) === 'object') {
      result[key] = resolveThemeTokens(theme, raw);
    } else {
      result[key] = getValue(theme, raw);
    }
  }
  return result;
}