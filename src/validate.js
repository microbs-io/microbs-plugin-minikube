/*
 * validate.js
 */

// Third-party packages
const commandExists = require('command-exists')
const semver = require('semver')

// Main packages
const { logger, utils } = require('@microbs.io/core')

/**
 * Validate minikube installation
 */
const validateMinikubeInstallation = () => {
  if(commandExists.sync('minikube'))
    return [{
      success: true,
      message: 'minikube is installed'
    }]
  else
    return [{
      success: true,
      message: 'minikube is not installed'
    }]
}

/**
 * Validate minikube version
*/
const validateMinikubeVersion = () => {
  const result = utils.exec('minikube version', true)
  if (result.stdout) {
    try {
      versionActual = semver.clean(result.stdout.match(/minikube version: v(.+)/)[1])
      versionRequired = semver.clean('1.25.2')
      if (semver.gte(versionActual, versionRequired))
        return [{
          success: true,
          message: `minikube is correct version [using=${versionActual}, required>=${versionRequired}]`
        }]
      else
        return [{
          success: false,
          message: `minikube is incorrect version [using=${versionActual}, required>=${versionRequired}]`
        }]
    } catch (e) {
      logger.error(e)
      return [{
        success: false,
        message: e
      }]
    }
  } else {
    logger.warn(result.stderr)
    return [{
      success: false,
      message: result.stderr
    }]
  }
}

module.exports = async () => {
  const results = []
  validateMinikubeInstallation().forEach(
    (result) => results.push(result)
  )
  validateMinikubeVersion().forEach(
    (result) => results.push(result)
  )
  return results
}
