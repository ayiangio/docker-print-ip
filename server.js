const express = require('express')
const RequestIp = require('@supercharge/request-ip')

const app = express()
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`\n Server listening on port ${port} \n`)
})
/* Endpoint */
app.get('/welcome', (req, res) => {
    ip = RequestIp.getClientIp(req)
    console.log(ip)
})

module.exports = app