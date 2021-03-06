/*
 * setup.js
 *
 * Setup minikube cluster.
 */

// Main packages
const { logger, utils } = require('@microbs.io/core')

// Plugin packages
const probe = require('./probe')

module.exports = async () => {
  logger.info('')
  logger.info('Creating minikube cluster...')
  utils.exec('minikube start')

  // Verify that the minikube cluster was created.
  logger.info('')
  logger.info('Verifying that minikube is available...')
  if (await probe.status()) {
    logger.info('...acknowledged. minikube is ready.')
  } else {
    logger.error('...failure. minikube did not start successfully.')
    process.exit(1)
  }
}
