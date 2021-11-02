const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')

const nuxtConfig = require('./nuxt.config.js')

const config = {
  ...nuxtConfig,
  dev: false,
  debug: false,
  buildDir: 'nuxt'
}
const nuxt = new Nuxt(config)

exports.ssrapp = functions.https.onRequest(async (req, res) => {
  await nuxt.ready()
  nuxt.render(req, res)
})

exports.setCustomClaims = functions.https.onCall(async (_data, context) => {
  try {
    const admin = require('firebase-admin')
    admin.initializeApp()

    const uid = context.auth.uid

    const customClaims = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': 'user',
        'x-hasura-allowed-roles': ['user', 'admin'],
        'x-hasura-user-id': uid
      }
    }

    await admin.auth().setCustomUserClaims(uid, customClaims)

    return { status: 'ok' }
  } catch (error) {
    throw new functions.https.HttpsError('aborted', 'error')
  }
})
