module.exports = function inet_pton (a) { // eslint-disable-line camelcase
  //  discuss at: https://locutus.io/php/inet_pton/
  // original by: Theriault (https://github.com/Theriault)
  //   example 1: inet_pton('::')
  //   returns 1: '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'
  //   example 2: inet_pton('127.0.0.1')
  //   returns 2: '\x7F\x00\x00\x01'

  var r
  var m
  var x
  var i
  var j
  var f = String.fromCharCode

  // IPv4
  m = a.match(/^(?:\d{1,3}(?:\.|$)){4}/)
  if (m) {
    m = m[0].split('.')
    m = f(m[0]) + f(m[1]) + f(m[2]) + f(m[3])
    // Return if 4 bytes, otherwise false.
    return m.length === 4 ? m : false
  }

  // IPv6
  if(a.length>39)return false;

  m = a.split('::')

  let res = ''
  if(m.length>2)return false;	// :: can't be used more than once in IPv6.
  for (j = 0; j < m.length; j++) {
    if (m[j].length === 0) {	// Skip if empty.
      continue
    }
    m[j] = m[j].split(':')
    for (i = 0; i < m[j].length; i++) {

      // check if valid hex string up to 4 chars
      if(!(m[j][i].match(/^[\da-f]{1,4}$/))) {
        return false
      }

      m[j][i] = parseInt(m[j][i], 16)

      // Would be NaN if it was blank, return false.
      if (isNaN(m[j][i])) {
        // Invalid IP.
        return false
      }
      m[j][i] = f(m[j][i] >> 8) + f(m[j][i] & 0xFF)
    }
    m[j] = m[j].join('')
    res += m[j];
  }
  x = res.length
  if (x === 16) {
    return res
  } else if (x < 16 && m.length > 1) {
    return res + (new Array(16 - x + 1))
      .join('\x00') + m[1]
  }

  // Invalid IP
  return false
}
