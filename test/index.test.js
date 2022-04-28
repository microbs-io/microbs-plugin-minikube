/*
 * index.test.js
 */
 
// Standard packages
const path = require('path')

// Main packages
const { utils } = require('@microbs.io/core')

describe('microbs plugin standards', () => {

  test('plugin.json declares "type" as "kubernetes"', () => {
    const json = utils.loadJson(path.join(process.cwd(), 'plugin.json'))
    expect(json.type).toBe('kubernetes')
  })
})
