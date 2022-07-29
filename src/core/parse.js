export function parse(value = '') {
  if (value.startsWith('=')) {
    try {
      return eval(value.slice(1)); // jshint ignore:line
    } catch (e) {
      return value;
    }
  }
  return value;
}

