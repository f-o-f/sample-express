const rp = require('request');
let options = {
  headers: {
    'content-type': 'application/json'
  },
  method: 'POST',
  uri: 'http://localhost:3000/login',
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