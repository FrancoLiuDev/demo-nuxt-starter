const express = require('express')
const consola = require('consola')
const service = require('../app/api/MainSevice')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const https = require('https')
const fs = require('fs')
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  
  service(app)
  // Give nuxt middleware to express
  app.use(nuxt.render)

   
  // Listen the server
  app.listen(80)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
    
  // const options = {
  //   key: fs.readFileSync('ssl/privateKey.key'),
  //   cert: fs.readFileSync('ssl/cer.pem'),
  //   ca: [fs.readFileSync('ssl/ca.pem')]
  // }
  // https.createServer(options, app).listen(443)

}
start()
