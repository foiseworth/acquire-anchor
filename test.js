/* eslint-env mocha */
'use strict';

var findAnchor = require('./index.js');
var jsdom = require('jsdom');
var assert = require('assert');

function makeDOM(html, cb) {
  jsdom.env({
    html: html,
    done: function(err, window) {
      if (err) cb(err);
      cb(null, window);
    }
  });
}

describe('Find anchor', function() {
  it('should return the passed node if it is an anchor', function(done) {
    makeDOM('<div><a class="anchorNode"></a><a></a></div>', function(err, window) {
      var node = window.document.querySelector('.anchorNode');
      var anchor = findAnchor(node);
      assert.equal(anchor.nodeName, 'A');
      assert.equal(anchor.className, 'anchorNode');
      done();
    });
  });

  it('should return a parent node if it is an anchor', function(done) {
    makeDOM('<a class="anchorNode"><div><span class="childNode"></span></div></a><a></a>', function(err, window) {
      var node = window.document.querySelector('.childNode');
      var anchor = findAnchor(node);
      assert.equal(anchor.nodeName, 'A');
      assert.equal(anchor.className, 'anchorNode');
      done();
    });
  });

  it('should return false if neither the node or any parents are anchors', function(done) {
    makeDOM('<main><div><span class="childNode"></span></div></main>', function(err, window) {
      var node = window.document.querySelector('.childNode');
      var anchor = findAnchor(node);
      assert.equal(anchor, false);
      done();
    });
  });
});
