# Acquire anchor
[![npm version](https://badge.fury.io/js/acquire-anchor.svg)](http://badge.fury.io/js/acquire-anchor)
[![Build Status](https://travis-ci.org/foiseworth/acquire-anchor.svg?branch=master)](https://travis-ci.org/foiseworth/acquire-anchor)
[![Coverage Status](https://coveralls.io/repos/foiseworth/acquire-anchor/badge.svg?branch=master&service=github)](https://coveralls.io/github/foiseworth/acquire-anchor?branch=master)
![MIT Licensed](https://img.shields.io/badge/license-MIT-blue.svg)

A function that given a node will return the nearest anchor node starting at the
passed node and walking up the tree until there are no more parent nodes.

## To use
```javascript
var acquireAnchor = require('acquire-anchor');
var childNode = document.querySelector('.child-node');

var anchorNode = acquireAnchor(childNode);
```
