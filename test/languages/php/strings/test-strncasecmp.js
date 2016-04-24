XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var strncasecmp = require('/Users/kvz/code/phpjs/src/php/strings/strncasecmp.js')

describe('php.strings.strncasecmp.js', function () {
  it('should pass example 1', function (done) {
    strncasecmp('Price 12.9', 'Price 12.15', 2)
    var expected = 0
    var result = strncasecmp('Price 12.9', 'Price 12.15', 2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    strncasecmp('Price 12.09', 'Price 12.15', 10)
    var expected = -1
    var result = strncasecmp('Price 12.09', 'Price 12.15', 10)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    strncasecmp('Price 12.90', 'Price 12.15', 30)
    var expected = 8
    var result = strncasecmp('Price 12.90', 'Price 12.15', 30)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    strncasecmp('Version 12.9', 'Version 12.15', 20)
    var expected = 8
    var result = strncasecmp('Version 12.9', 'Version 12.15', 20)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    strncasecmp('Version 12.15', 'Version 12.9', 20)
    var expected = -8
    var result = strncasecmp('Version 12.15', 'Version 12.9', 20)
    expect(result).to.deep.equal(expected)
    done()
  })
})