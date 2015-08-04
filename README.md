# Find anchor
[![npm version](https://badge.fury.io/js/external-link.svg)](http://badge.fury.io/js/external-link)
[![Build Status](https://travis-ci.org/foiseworth/external-link.svg?branch=master)](https://travis-ci.org/foiseworth/external-link)
[![Coverage Status](https://coveralls.io/repos/foiseworth/external-link/badge.svg?branch=master&service=github)](https://coveralls.io/github/foiseworth/external-link?branch=master)
![MIT Licensed](https://img.shields.io/badge/license-MIT-blue.svg)

A function that given a node will return the nearest anchor node starting at the
passed node and walking up the tree until there are no more parent nodes.

## To use
```javascript
var findAnchor = require('find-anchor');
var childNode = document.querySelector('.child-node');

var anchorNode = findAnchor(childNode);
```
