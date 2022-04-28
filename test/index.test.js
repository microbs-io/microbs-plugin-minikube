/*
 * index.test.js
 */
 
// Standard packages
const path = require('path')

// Main packages
const { utils } = require('@microbs.io/core')

describe('microbs plugin standards', () => {

  test('plugin.json exists', () => {
    const json = utils.loadJson(path.join(process.cwd(), 'plugin.json'))
    expect(json).toBeTruthy()
  })

  test('plugin.json declares "type" as "kubernetes"', () => {
    const json = utils.loadJson(path.join(process.cwd(), 'plugin.json'))
    expect(json.type).toBe('kubernetes')
  })

  test('package-lock.json exists', () => {
    const json = utils.loadJson(path.join(process.cwd(), 'package-lock.json'))
    expect(json).toBeTruthy()
  })

  test('package.json and package-lock.json have same version', () => {
    const pkg = utils.loadJson(path.join(process.cwd(), 'package.json'))
    const pkgLock = utils.loadJson(path.join(process.cwd(), 'package-lock.json'))
    expect(pkg.version).toBe(pkgLock.version)
  })
})
