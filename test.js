import test from 'ava'
import classNameStartingWith from './'

global.document = require('jsdom').jsdom('<body><div class="root root-prefix__el"><div class="child-prefix__el child"></div><div class="child-prefix__el child2"></div></div></body>')
global.window = document.defaultView
global.navigator = window.navigator

test('from body element', t => {
  const expected = 'root root-prefix__el'
  const actual = classNameStartingWith('root-prefix__')[0].className
  t.is(actual, expected)
})

test('from specific element', t => {
  const el = document.querySelector('.root')
  const expected = 'child-prefix__el child'
  const actual = classNameStartingWith('child-prefix__', el)[0].className
  t.is(actual, expected)
})

test('all specific element', t => {
  const el = document.querySelector('.root')
  const expected = 2
  const actual = classNameStartingWith('child-prefix__', el).length
  t.is(actual, expected)
})
