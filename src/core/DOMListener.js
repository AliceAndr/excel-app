export class DOMListener {
  constructor($root) {
    if (!$root) {
      throw new Error('No $root was provided to DomListener');
    }
    this.$root = $root;
  }
}
