'use strict';

function findAnchor(node) {
  while (node.nodeName.toLowerCase() !== 'a') {
    if (!node.parentNode) return false;
    node = node.parentNode;
  }
  return node;
}

module.exports = findAnchor;
