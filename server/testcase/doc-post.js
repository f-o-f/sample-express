const rp = require('request');
let options = {
  headers: {
    'content-type': 'application/json'
  },
  method: 'GET',
  uri: 'http://localhost:3000/v1/sampleapps/documents/10000',
  removeRefererHeader: true,
  qs: {
    query: [],
    boolean: true
  },
  json: {
    body: 'xxxx'
  }
}

rp(options, (err, response, body) => {
  if (err) {
    console.log(err.messsage)
  } else {
    console.log(response.statusCode)
    console.log(body)
  }
})