const serverlessExpress = require('@vendia/serverless-express')
const app = require('./index')
exports.handler = serverlessExpress({ app })